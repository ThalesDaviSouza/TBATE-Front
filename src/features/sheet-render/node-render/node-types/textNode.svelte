<script lang="ts">
  import type { TextNode } from "../../model/sheetNode";

  type props = {
    node: TextNode
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
