import { NodeType } from "../../model/nodeType";
import type { SheetNode } from "../../model/sheetNode";
import type { NodeStrategy } from "./nodeStrategy";

export class NodeRollBtnStrategy implements NodeStrategy{
  create(): SheetNode {
    return {
      name: 'Nome',
      type: NodeType.rollBtn,
      value: ""
    };
  }
}