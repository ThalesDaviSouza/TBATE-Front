import { NodeType } from "../../model/nodeType";
import type { SheetNode } from "../../model/sheetNode";
import type { NodeStrategy } from "./nodeStrategy";

export class NodeTextStrategy implements NodeStrategy{
  create(): SheetNode {
    return {
      type: NodeType.text,
      value: "Texto"
    };
  }
}