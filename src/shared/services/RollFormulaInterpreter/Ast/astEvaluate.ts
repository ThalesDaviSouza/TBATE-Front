import { NodeType } from "../../../../features/sheet-render/model/nodeType";
import type { Sheet } from "../../../../features/sheet-render/model/sheet";
import { roll } from "../../diceRollService";
import { TokenKind } from "../Lexer/tokenKinds";
import { ExpressionType, type Expression } from "./ast";

export const dicesRolled: number[] = [];

export function evaluate(expression: Expression, context: Sheet): number | number[]{
  let left: number | number[];
  let right: number | number[];
  let leftSum: number = 0;
  let rightSum: number = 0;
  let results: number[];

  switch(expression.kind)
  {
    case ExpressionType.NumberLiteral:
      return expression.value;

    case ExpressionType.Binary:
      left = evaluate(expression.left, context);
      right = evaluate(expression.right, context);
      leftSum = calculateSum(left);
      rightSum = calculateSum(right);
      
      return realizeOperation(expression.operator, leftSum, rightSum);
    
    case ExpressionType.DiceRoll:
      left = evaluate(expression.left, context);
      right = evaluate(expression.right, context);
      leftSum = calculateSum(left);
      rightSum = calculateSum(right);
      
      results = roll(leftSum, rightSum);
      dicesRolled.push(...results);
      return results;
    
    case ExpressionType.Keep: 
      left = evaluate(expression.left, context) as number[];
      right = evaluate(expression.right, context);
      
      rightSum = calculateSum(right);

      let maxs: number[] = [];
      for(let i = 0; i < rightSum; i++){
        let aux = Math.max(...left);
        maxs.push(aux);
        left.splice(left.findIndex(n => n == aux), 1);
      }
      return maxs;

    case ExpressionType.AttributeReference: 
      console.log('sheet', context);
      let result = findAttribute(context, expression.target);
      console.log('target value:', result);
      if(!result)
        throw new Error("Falha ao localizar: " + expression.target);

      return result;

  }
}

function calculateSum(input: number | number[]): number{
  if(Array.isArray(input))
    return input.reduce((a, b) => a + b, 0);

  return input;
}

function realizeOperation(tokenKind: TokenKind, left: number, right: number){
  switch(tokenKind){
    case TokenKind.plus:
      return left + right;

    case TokenKind.minus:
      return left - right;
    
    case TokenKind.star:
      return left * right;
    
    case TokenKind.slash:
      return left / right;
    
    default:
      throw new Error("Erro ao realizar a operação binária: " + tokenKind);
  }
}

function findAttribute(context: Sheet, target: string) : number | null{
  for(let tab of context.tabs){
    for(let node of tab.nodes){
      if(node.type != NodeType.modifier)
        continue;
      
      if(node.name === target)
        return parseInt(node.value);
    }
  }

  return null;
}