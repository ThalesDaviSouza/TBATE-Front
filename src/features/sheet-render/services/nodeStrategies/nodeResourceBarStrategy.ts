import { NodeType } from "../../model/nodeType";
import type { SheetNode } from "../../model/sheetNode";
import type { NodeStrategy } from "./nodeStrategy";

export class NodeResourceBarStrategy implements NodeStrategy{
  create(): SheetNode {
    return {
      name: 'Recurso',
      type: NodeType.resourceBar,
      value: "50",
      maxValue: 100
    };
  }
}