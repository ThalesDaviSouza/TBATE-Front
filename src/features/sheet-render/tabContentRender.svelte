<script lang="ts">
  import type { SheetNode } from "./model/sheetNode";
  import NodeFactory from "./node-render/nodeFactory.svelte";

  type props = {
    content: SheetNode[]
  };

  let { content }: props = $props();
</script>

<div>
  {#each content as node}
  <NodeFactory {node}></NodeFactory>
  {/each}
</div>

<style>
  div{
    display: flex;
    gap: 5px;
    align-items: baseline;
  }
</style>