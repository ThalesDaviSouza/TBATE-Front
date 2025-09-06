import type { Sheet } from "../model/sheet";
import { selectedTabId } from "./selectedTab.svelte";

export function CreateSheetStore(sheetInput: Sheet) {
  let sheet = $state(sheetInput);
  let currentContent = $derived(sheet.tabs[selectedTabId.value].nodes); 

  return{
    get sheet() { return sheet; },
    get currentContent() { return currentContent }
  }
}
