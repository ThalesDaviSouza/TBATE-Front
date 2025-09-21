import type { Effect } from "./effect"
import type { NodeType } from "./nodeType"

export type TitleNode = {
  type: NodeType.title,
  value: string
}

export type TextNode = {
  type: NodeType.text,
  value: string
}

export type ModifierNode = {
  name: string,
  type: NodeType.modifier,
  value: number
}

export type RollBtnNode = {
  name: string,
  type: NodeType.rollBtn,
  rollFormula: string,
  effects: Effect[]
}

export type ResourceBarNode = {
  name: string,
  type: NodeType.resourceBar,
  value: number,
  maxValue: number
}

export type SheetNode = TitleNode | TextNode | ModifierNode | RollBtnNode | ResourceBarNode;