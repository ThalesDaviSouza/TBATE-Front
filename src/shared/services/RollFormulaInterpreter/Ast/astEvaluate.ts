import { roll } from "../../diceRollService";
import { TokenKind } from "../Lexer/tokenKinds";
import { ExpressionType, type Expression } from "./ast";

export const dicesRolled: number[] = [];

export function evaluate(expression: Expression): number | number[]{
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
      left = evaluate(expression.left);
      right = evaluate(expression.right);
      leftSum = calculateSum(left);
      rightSum = calculateSum(right);
      
      return realizeOperation(expression.operator, leftSum, rightSum);
    
    case ExpressionType.DiceRoll:
      left = evaluate(expression.left);
      right = evaluate(expression.right);
      leftSum = calculateSum(left);
      rightSum = calculateSum(right);
      
      results = roll(leftSum, rightSum);
      dicesRolled.push(...results);
      return results;
    
    case ExpressionType.Keep: 
      left = evaluate(expression.left) as number[];
      right = evaluate(expression.right);
      
      rightSum = calculateSum(right);

      let maxs: number[] = [];
      for(let i = 0; i < rightSum; i++){
        let aux = Math.max(...left);
        maxs.push(aux);
        left.splice(left.findIndex(n => n == aux), 1);
      }
      return maxs;

    case ExpressionType.AttributeReference: 
      throw new Error("Not implemented");

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