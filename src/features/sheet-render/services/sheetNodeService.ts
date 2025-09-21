import type { RollBtnNode } from "../model/sheetNode";
import type { Tab } from "../model/tab";

export class SheetNodeService{

  RemoveNode(tab: Tab, nodeId: number){
    tab.nodes.splice(nodeId, 1);
  }
  
  ChangeNodePosition(tab: Tab, oldId: number, newId: number){
    const [moved] = tab.nodes.splice(oldId, 1);
    tab.nodes.splice(newId, 0, moved);
  }

  DeleteEffect(tab: Tab, nodeId: number, effectId: number){
    const node = tab.nodes[nodeId] as RollBtnNode; 
    node.effects.splice(effectId, 1);
  }
  
  DeleteAction(tab: Tab, nodeId: number, effectId: number, actionId: number){
    const node = tab.nodes[nodeId] as RollBtnNode; 
    node.effects[effectId].actions.splice(actionId, 1);
  }
}