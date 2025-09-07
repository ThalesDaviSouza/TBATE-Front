import type { TokenKind } from "../Lexer/tokenKinds"

export enum ExpressionType {
  NumberLiteral,
  AttributeReference,
  Binary,
  DiceRoll,
  Keep,
}

export type Expression = {
  kind: ExpressionType.NumberLiteral,
  value: number
} 
| {
  kind: ExpressionType.AttributeReference,
  target: string
}
| {
  kind: ExpressionType.Binary,
  left: Expression, 
  operator: TokenKind,
  right: Expression
}
| {
  kind: ExpressionType.DiceRoll,
  left: Expression, 
  right: Expression
}
| {
  kind: ExpressionType.Keep,
  left: Expression,
  right: Expression
}