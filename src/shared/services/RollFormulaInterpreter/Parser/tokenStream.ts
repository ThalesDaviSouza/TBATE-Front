import type { Token } from "../Lexer/lexer";
import type { TokenKind } from "../Lexer/tokenKinds";

export class TokenStream {
  private pos = 0;
  constructor(private tokens: Token[]) {}

  peek(): Token {
    return this.tokens[this.pos];
  }

  advance(): Token {
    return this.tokens[this.pos++];
  }

  match(kind: TokenKind): boolean {
    if (this.peek()?.kind === kind) {
      this.advance();
      return true;
    }
    return false;
  }

  eof(): boolean {
    return this.pos >= this.tokens.length;
  }
}