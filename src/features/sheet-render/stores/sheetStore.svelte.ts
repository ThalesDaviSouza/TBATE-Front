import type { NodeType } from "../model/nodeType";
import type { Sheet } from "../model/sheet";
import type { SheetNode } from "../model/sheetNode";
import { SheetNodeService } from "../services/sheetNodeService";
import { SheetTabService } from "../services/sheetTabService";

export type SheetStore = {
  sheet: Sheet,
  currentContent: SheetNode[],
  selectedTabId: number,
  AddNodeInCurrentTab: (type: NodeType, offset: number) => void
  AddTab: () => void
  RemoveTab: (tabIndex: number) => void,
  RemoveNode: (selectedTabId: number, nodeId: number) => void
}

export function CreateSheetStore(sheetInput: Sheet): SheetStore {
  let sheetTabService = new SheetTabService();
  let sheetNodeService = new SheetNodeService();
  
  let selectedTabId = $state(0);
  let sheet = $state(sheetInput);
  let currentContent = $derived(sheet.tabs[selectedTabId].nodes); 

  function AddNodeInCurrentTab(type: NodeType, offset: number){
    sheetTabService.AddNode(sheet, selectedTabId, type, offset);
  }

  function AddTab(){
    sheetTabService.AddTab(sheet);
  }
  
  function RemoveTab(tabIndex: number){
    sheetTabService.RemoveTab(sheet, tabIndex);
  }
  
  function RemoveNode(selectedTabId: number, nodeId: number){
    sheetNodeService.RemoveNode(sheet.tabs[selectedTabId], nodeId);
  }

  return {
    sheet,
    get currentContent() { return currentContent }, 
    get selectedTabId() { return selectedTabId }, 
    set selectedTabId(v: number) { selectedTabId = v },
    AddNodeInCurrentTab,
    AddTab,
    RemoveTab,
    RemoveNode
  }
}
