import type { Tab } from "../model/tab";

export class SheetNodeService{

  RemoveNode(tab: Tab, nodeId: number){
    tab.nodes.splice(nodeId, 1);
  }
  
}