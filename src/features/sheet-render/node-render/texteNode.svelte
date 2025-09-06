<script lang="ts">
  import { sanitize } from "../../../shared/services/sanitizeService";
  import type { SheetNode } from "../model/sheetNode";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

<p
  contenteditable="true"
  oninput={(e: any) => node.value = sanitize(e.target.innerHTML)}
>
  {@html node.value}
</p>