<script lang="ts">
  import type { TitleNode } from "../../model/sheetNode";

  type props = {
    node: TitleNode
  };

  let { node = $bindable() }: props = $props();

</script>

<h2
  contenteditable="true"
  bind:textContent={node.value}
>
</h2>

<style>
  h2 {
    width: 100%;
    margin: 0;
  }
</style>
