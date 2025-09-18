import { NodeType } from "../../model/nodeType";
import type { SheetNode } from "../../model/sheetNode";
import type { NodeStrategy } from "./nodeStrategy";

export class NodeModifierStrategy implements NodeStrategy{
  create(): SheetNode {
    return {
      name: 'Atributo',
      type: NodeType.modifier,
      value: "0"
    };
  }
}