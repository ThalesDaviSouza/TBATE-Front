export enum TokenKind {
  number,
  attributeReference, // @{atributeName}

  // Atributos de rolagem
  d,
  k,

  plus,
  minus,
  star,
  slash,

  openBracket,
  closeBracket,

  space
}

export const tokenSpecs: [TokenKind, RegExp][] = [
  [TokenKind.space, /^\s+/],
  [TokenKind.number, /^\d+/],
  [TokenKind.attributeReference, /^@\{[a-zA-Z_][a-zA-Z0-9_]*\}/], // @{atributo}

  [TokenKind.d, /^d/],
  [TokenKind.k, /^k/],

  [TokenKind.plus, /^\+/],
  [TokenKind.minus, /^-/],
  [TokenKind.star, /^\*/],
  [TokenKind.slash, /^\//], 
  
  [TokenKind.openBracket, /^\(/],
  [TokenKind.closeBracket, /^\)/],
];
