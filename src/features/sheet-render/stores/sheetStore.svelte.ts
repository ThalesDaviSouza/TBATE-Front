import type { NodeType } from "../model/nodeType";
import type { Sheet } from "../model/sheet";
import type { SheetNode } from "../model/sheetNode";
import { nodeFactory } from "../services/nodeFactory";

export type SheetStore = {
  sheet: Sheet,
  currentContent: SheetNode[],
  selectedTabId: number,
  AddNodeInCurrentTab: (type: NodeType, offset: number) => void
  AddTab: () => void
}

export function CreateSheetStore(sheetInput: Sheet): SheetStore {
  let selectedTabId = $state(0);
  let sheet = $state(sheetInput);
  let currentContent = $derived(sheet.tabs[selectedTabId].nodes); 

  function AddNodeInCurrentTab(type: NodeType, offset: number){
    let node: SheetNode = nodeFactory(type);
    sheet.tabs[selectedTabId].nodes.splice(offset+1, 0, node)
  }

  function AddTab(){
    sheet.tabs.push({name:"Nova Tab", nodes: []})
  }

  return {
    sheet,
    get currentContent() { return currentContent }, 
    get selectedTabId() { return selectedTabId }, 
    set selectedTabId(v: number) { selectedTabId = v },
    AddNodeInCurrentTab,
    AddTab
  }
}
