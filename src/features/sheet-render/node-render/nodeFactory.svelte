<script lang="ts">
  import { NodeType } from "../model/nodeType";
  import type { SheetNode } from "../model/sheetNode";
  import TexteNode from "./texteNode.svelte";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

{#if node.type == NodeType.text}
  <TexteNode node={node}></TexteNode>
{:else}
  <p>Tipo de nó não implementado</p>
{/if}

