import { tokenizer, type Lexer } from "./lexer"

export function ReadFormula(source: string){
  let lexer: Lexer = {
    pos: 0,
    source: source,
    tokens: []
  };

  tokenizer(lexer);

  console.log('Source: ', source);
  console.log('Tokens:', lexer.tokens)
}