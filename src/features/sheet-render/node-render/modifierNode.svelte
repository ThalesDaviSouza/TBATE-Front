<script lang="ts">
  import type { SheetNode } from "../model/sheetNode";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

<div id="modifier-wrapper">
  <span
    contenteditable="true"
    bind:textContent={node.name}
  >
  </span>
  <input type="number" bind:value={node.value}>
</div>

<style>
  div{
    gap: 15px;
  }
  
  #modifier-wrapper{
    display: flex;
    flex-direction: row;
  }

  input {
    text-align: center;
    width: auto;
  }

</style>