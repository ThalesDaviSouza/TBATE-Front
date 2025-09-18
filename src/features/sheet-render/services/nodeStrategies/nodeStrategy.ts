import type { SheetNode } from "../../model/sheetNode";

export interface NodeStrategy{
  create(): SheetNode;
}