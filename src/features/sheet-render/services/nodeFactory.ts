import { NodeType } from "../model/nodeType";
import type { SheetNode } from "../model/sheetNode";
import { NodeModifierStrategy } from "./nodeStrategies/nodeModifierStrategy";
import { NodeRollBtnStrategy } from "./nodeStrategies/nodeRollBtnStrategy";
import type { NodeStrategy } from "./nodeStrategies/nodeStrategy";
import { NodeTextStrategy } from "./nodeStrategies/nodeTextStrategy";
import { NodeTitleStrategy } from "./nodeStrategies/nodeTitleStrategy";

export function nodeFactory(type: NodeType): SheetNode{
  let strategy: NodeStrategy;

  switch(type){
    case NodeType.title:
      strategy = new NodeTitleStrategy();
      break;
    
    case NodeType.text:
      strategy = new NodeTextStrategy();
      break;
    
    case NodeType.modifier:
      strategy = new NodeModifierStrategy();
      break;
    
    case NodeType.rollBtn:
      strategy = new NodeRollBtnStrategy();
      break;
    
    default:
      throw new Error("Node type not defined");
  }

  return strategy.create();
}