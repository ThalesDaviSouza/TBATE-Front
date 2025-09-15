<script lang="ts">
  import type { SheetNode } from "../../model/sheetNode";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

<p
  contenteditable="true"
  bind:textContent={node.value}
>
</p>

<style>
  p {
    width: 100%;
  }
</style>
