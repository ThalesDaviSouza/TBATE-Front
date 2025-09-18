import type { NodeType } from "../model/nodeType";
import type { Sheet } from "../model/sheet";
import type { SheetNode } from "../model/sheetNode";
import { selectedTabId } from "./selectedTab.svelte";

export type SheetStore = {
  sheet: Sheet,
  currentContent: SheetNode[],
  AddNodeInCurrentTab: (type: NodeType, offset: number) => void
}

export function CreateSheetStore(sheetInput: Sheet): SheetStore {
  let sheet = $state(sheetInput);
  let currentContent = $derived(sheet.tabs[selectedTabId.value].nodes); 

  function AddNodeInCurrentTab(type: NodeType, offset: number){
    // TODO: implementar um factory para isso
    let node = {
      name: 'Titulo',
      type: type,
      value: 'title'
    };
    
    currentContent.splice(offset+1, 0, node)
  }

  return {
    sheet,
    currentContent,
    AddNodeInCurrentTab
  }
}
