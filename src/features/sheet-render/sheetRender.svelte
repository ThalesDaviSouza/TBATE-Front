<script lang="ts">
  import type { Sheet } from "./model/sheet";
  import { AddTextNode } from "./services/tabService";
  import { CreateSheetStore } from "./stores/sheetStore.svelte";
  import TabContentRender from "./tabContentRender.svelte";
  import TabRender from "./tabRender.svelte";

  type props = {
    sheet: Sheet
  };

  let { sheet }: props = $props();

  const sheetStore = CreateSheetStore(sheet);

</script>

<button onclick={() => console.log(sheetStore.sheet)}>inspect</button>
<!-- <button onclick={() => AddTextNode(sheetStore.sheet, 0)}>Text Node</button> -->

<div>
  <h2>{sheet.charactherName}</h2>
  <p>{sheet.description}</p><br/>

  <TabRender tabs={sheet.tabs}></TabRender>
  <TabContentRender 
    context={sheetStore}
    content={sheetStore.currentContent} 
    sheet={sheetStore.sheet}
  >
  </TabContentRender>
  
</div>

<style>
  h2, p {
    margin: 0;
    margin-bottom: 10px;
  }
</style>