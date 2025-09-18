import { NodeType } from "../../model/nodeType";
import type { SheetNode } from "../../model/sheetNode";
import type { NodeStrategy } from "./nodeStrategy";

export class NodeTitleStrategy implements NodeStrategy{
  create(): SheetNode {
    return {
      name: '',
      type: NodeType.title,
      value: "Texto"
    };
  }
}