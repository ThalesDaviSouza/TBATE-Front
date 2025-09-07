import { TokenKind, tokenSpecs } from "./tokenKinds"

type Token = {
  kind: TokenKind,
  value: string
}
export type Lexer = {
  source: string,
  tokens: Token[],
  pos: number
}

export function tokenizer(lexer: Lexer){
  let current = lexer.source + '';

  while (current.length > 0) {
    let match = false;

    for (const [kind, regex] of tokenSpecs) {
      const result = regex.exec(current);
      
      if (!result)
        continue;
      
      if(!canSkip(kind)) {
        lexer.tokens.push({ kind, value: result[0] });
      }
      current = current.slice(result[0].length);
      match = true;
      break;
    }

    if (!match) {
      throw new Error("Unexpected token: " + current[0]);
    }
  }
}

function canSkip(tokenKind: TokenKind): boolean{
  if(tokenKind == TokenKind.space)
    return true;

  return false;
}