import type { Sheet } from "../model/sheet";
import { selectedTabId } from "./selectedTab.svelte";

export function CreateSheetStore(sheet: Sheet) {

  return{
    get currentContent() { return sheet.tabs[selectedTabId.value].nodes }
  }
}
