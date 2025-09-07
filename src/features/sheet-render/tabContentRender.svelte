<script lang="ts">
  import type { Sheet } from "./model/sheet";
  import type { SheetNode } from "./model/sheetNode";
  import NodeFactory from "./node-render/nodeFactory.svelte";

  type props = {
    content: SheetNode[],
    sheet: Sheet
  };

  let { content, sheet }: props = $props();
</script>

<div>
  {#each content as node}
    <NodeFactory {node} {sheet}></NodeFactory>
  {/each}
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: baseline;
  }
</style>