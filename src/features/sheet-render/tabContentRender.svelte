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

  let { context, content, sheet }: props = $props();
  let currentIndex = $state(-2);
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
    <NodeFactory {node} {sheet}></NodeFactory>
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
  {/each}
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: baseline;
  }
  .add-container{
    position: relative;
    width: 100%;
    height: 16px;
    justify-content: center;
    align-items: center;
  }
</style>