<script lang="ts">
  import type { SheetNode } from "./model/sheetNode";
  import NodeFactory from "./node-render/nodeFactory.svelte";

  type props = {
    content: SheetNode[]
  };

  let { content }: props = $props();
</script>

{#each content as node}
  <NodeFactory {node}></NodeFactory>
{/each}