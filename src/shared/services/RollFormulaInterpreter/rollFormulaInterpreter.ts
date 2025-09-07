import type { Sheet } from "../../../features/sheet-render/model/sheet";
import { dicesRolled, evaluate } from "./Ast/astEvaluate";
import { tokenizer, type Lexer } from "./Lexer/lexer"
import { PrattParser } from "./Parser/parser";
import { TokenStream } from "./Parser/tokenStream";

export function ReadFormula(source: string, context: Sheet){
  let lexer: Lexer = {
    pos: 0,
    source: source,
    tokens: []
  };

  tokenizer(lexer);
  const parser = new PrattParser(new TokenStream(lexer.tokens));
  const ast = parser.parseExpression();
  let result = evaluate(ast, context);

  console.log('Source: ', source);
  console.log('Tokens:', lexer.tokens)
  console.log('Ast:', ast)
  console.log('Dices rolled:', dicesRolled)
  console.log('Result:', result)
}