<script lang="ts">
  import type { Sheet } from "./model/sheet";
  import type { SheetNode } from "./model/sheetNode";
  import NodeFactory from "./node-render/nodeFactory.svelte";
  import AddNodeBtn from "./addNodeBtn.svelte";
  import type { SheetStore } from "./stores/sheetStore.svelte";

  type props = {
    context: SheetStore,
    content: SheetNode[],
    sheet: Sheet
  };

  let { context, content = $bindable(), sheet }: props = $props();
  let currentIndex = $state(-2);
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
    context.DragAndDropNode(dragIndex, id);
  }
</script>

<div>
  <div 
    class="add-container"
    onmouseenter={() => currentIndex = -1}
    onmouseleave={() => currentIndex = -2}
    tabindex="0"
    role="button"
  >
    {#if currentIndex === -1}
      <AddNodeBtn 
        index={-1}
        {context}
      >
      </AddNodeBtn>
    {/if}
  </div>
  
  {#each content as node, i}
    <div
      role="button"
      tabindex="0"
      class="draggable"
      draggable="true"
      ondragstart={(e) => handleDragStart(e, i)}
      ondragover={handleDragOver}
      ondrop={(e) => handleDrop(e, i)}
    >
      <NodeFactory 
        {context} 
        bind:node={content[i]} 
        id={i}
      >
      </NodeFactory>
      
      <div 
        class="add-container"
        onmouseenter={() => currentIndex = i}
        onmouseleave={() => currentIndex = -2}
        tabindex="0"
        role="button"
      >
        {#if currentIndex === i}
          <AddNodeBtn 
            index={i}
            {context}
          >
          </AddNodeBtn>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: baseline;
    width: 100%;
  }
  .add-container{
    position: relative;
    width: 100%;
    height: 16px;
    justify-content: center;
    align-items: center;
  }

  .draggable{
    width: 100%;
  }
</style>