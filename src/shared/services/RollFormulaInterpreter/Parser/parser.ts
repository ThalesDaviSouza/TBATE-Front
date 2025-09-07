import { ExpressionType, type Expression } from "../Ast/ast";
import type { Token } from "../Lexer/lexer";
import { TokenKind } from "../Lexer/tokenKinds";
import { TokenStream } from "./tokenStream";

const BINDING_POWER: Record<string, number> = {
  "+": 10,
  "-": 10,

  "*": 20,
  "/": 20,

  "k": 30,
  "d": 40,
};

type NudFn = (parser: PrattParser, token: Token) => Expression;
type LedFn = (parser: PrattParser, left: Expression, token: Token) => Expression;

export class PrattParser {
  constructor(private tokeStream: TokenStream) {}

  parseExpression(rightBidingPower = 0): Expression {
    let token = this.tokeStream.advance();
    let left = this.nud(token);

    while (
      !this.tokeStream.eof() 
      && rightBidingPower < this.leftBidingPower(this.tokeStream.peek())
    ) 
    {
      token = this.tokeStream.advance();
      left = this.led(left, token);
    }

    return left;
  }

  private nud(token: Token): Expression {
    switch (token.kind) {
      case TokenKind.number: {
        return { 
          kind: ExpressionType.NumberLiteral, 
          value: parseInt(token.value) 
        };
      }

      case TokenKind.attributeReference: {
        return { 
          kind: ExpressionType.AttributeReference, 
          target: token.value.slice(2, -1) 
        };
      }

      case TokenKind.openBracket: {
        const expr = this.parseExpression();
        
        if (!this.tokeStream.match(TokenKind.closeBracket)) {
          throw new Error("Expected closing bracket");
        }

        return expr;
      }

      default:
        throw new Error(`Unexpected token in nud: ${token.kind}`);
    }
  }

  private led(left: Expression, token: Token): Expression {
    const op = token.value;

    switch (token.kind) {
      case TokenKind.plus:
      case TokenKind.minus:
      case TokenKind.star:
      case TokenKind.slash:
        return {
          kind: ExpressionType.Binary,
          left,
          operator: token.kind,
          right: this.parseExpression(BINDING_POWER[op]),
        };

      case TokenKind.d:
        return {
          kind: ExpressionType.DiceRoll,
          left,
          right: this.parseExpression(BINDING_POWER["d"]),
        };

      case TokenKind.k:
        return {
          kind: ExpressionType.Keep,
          left,
          right: this.parseExpression(BINDING_POWER["k"]),
        };

      default:
        throw new Error(`Unexpected token in led: ${token.kind}`);
    }
  }

  private leftBidingPower(token: Token): number {
    switch (token.kind) {
      case TokenKind.plus: return BINDING_POWER["+"];
      case TokenKind.minus: return BINDING_POWER["-"];
      case TokenKind.star: return BINDING_POWER["*"];
      case TokenKind.slash: return BINDING_POWER["/"];
      case TokenKind.d: return BINDING_POWER["d"];
      case TokenKind.k: return BINDING_POWER["k"];
      default: return 0;
    }
  }
}