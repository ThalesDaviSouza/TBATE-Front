<script lang="ts">
  import type { SheetNode } from "../model/sheetNode";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

<div id="modifier-wrapper">
  <input type="number" bind:value={node.value}>
  <span>{node.name}</span>
</div>

<style>
  #modifier-wrapper{
    display: flex;
    flex-direction: column;
  }
  input {
    text-align: center;
    width: 50px;
  }

</style>