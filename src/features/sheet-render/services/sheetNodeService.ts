import type { Tab } from "../model/tab";

export class SheetNodeService{

  RemoveNode(tab: Tab, nodeId: number){
    tab.nodes.splice(nodeId, 1);
  }
  
  ChangeNodePosition(tab: Tab, oldId: number, newId: number){
    const [moved] = tab.nodes.splice(oldId, 1);
    tab.nodes.splice(newId, 0, moved);
  }
}