<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { SheetStore } from "./stores/sheetStore.svelte";
  import Button from "../../shared/components/Button.svelte";
  import Tab from "./tab.svelte";

  type props = {
    context: SheetStore
  }

  let { context }: props = $props();

  let dragIndex = $state(-1);

  function handleDragStart(e: any, id: number){
    dragIndex = id;
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e: any){
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function handleDrop(e: Event, id: number){
    e.preventDefault();
    context.DragAndDropTab(dragIndex, id);
  }
  
</script>

<div id="tab-wrapper">
  {#each context.sheet.tabs as tab, id }
    <div
      role="button"
      tabindex="0"
      class="draggable"
      draggable="true"
      ondragstart={(e) => handleDragStart(e, id)}
      ondragover={handleDragOver}
      ondrop={(e) => handleDrop(e, id)}
    >
      <Tab
        {context}
        {tab}
        {id}
      >
    </Tab>
  </div>
  {/each}

  <div class="add-tab">
    <div class="add-tab-btn">
      <Button class="transparent" on:click={() => {context.AddTab()}}>
        <Icon 
          icon="iconoir:plus-circle"
          width="16"
        >
        </Icon>
      </Button>
    </div>
  </div>

</div>

<style>
  #tab-wrapper{
    display: flex;
    flex-direction: row;
    width: max-content;
  }

  .add-tab{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .add-tab .add-tab-btn{
    visibility: hidden;
    transition: 0.2s all ease-in;
    cursor: pointer;
  }
  .add-tab:hover .add-tab-btn{
    visibility: visible;
  }

  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
</style>