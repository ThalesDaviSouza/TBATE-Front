import type { NodeType } from "./nodeType"

export type SheetNode = {
  type: NodeType,
  name: string,
  value: string,
  maxValue?: number,
  children?: SheetNode[]
}