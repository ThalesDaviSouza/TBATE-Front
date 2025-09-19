import type { NodeType } from "../model/nodeType";
import type { Sheet } from "../model/sheet";
import type { SheetNode } from "../model/sheetNode";
import { nodeFactory } from "./nodeFactory";

export class SheetTabService {
  
  AddNode(sheet: Sheet, tabId: number, type: NodeType, offset: number){
    let node: SheetNode = nodeFactory(type);
    sheet.tabs[tabId].nodes.splice(offset + 1, 0, node);
  }
  
  AddTab(sheet: Sheet){
    sheet.tabs.push({name:"Nova Tab", nodes: []});
  }

  RemoveTab(sheet: Sheet, tabIndex: number){
    if(sheet.tabs.length == 1){
      throw new Error('Não pode ter menos de 1 tab na ficha')
    }
    sheet.tabs.splice(tabIndex, 1);
  }
}


