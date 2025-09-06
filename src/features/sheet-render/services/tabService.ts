import { NodeType } from "../model/nodeType";
import type { Sheet } from "../model/sheet";
import type { Tab } from "../model/tab";

function addNode(tab: Tab, nodeType: NodeType){
  tab.nodes.push({
    name: '',
    type: nodeType,
    value: 'teste'
  })
}

export function AddTextNode(sheet: Sheet, tabId: number){
  addNode(sheet.tabs[tabId], NodeType.text);
}