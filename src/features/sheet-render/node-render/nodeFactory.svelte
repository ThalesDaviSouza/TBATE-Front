<script lang="ts">
  import { NodeType } from "../model/nodeType";
  import type { Sheet } from "../model/sheet";
  import type { SheetNode } from "../model/sheetNode";
  import ModifierNode from "./node-types/modifierNode.svelte";
  import RollBtnNode from "./node-types/rollBtnNode.svelte";
  import TextNode from "./node-types/textNode.svelte";
  import TitleNode from "./node-types/titleNode.svelte";

  type props = {
    node: SheetNode,
    sheet: Sheet
  };

  let { node, sheet }: props = $props();

</script>

{#if node.type == NodeType.text}
  <TextNode {node}></TextNode>
{:else if node.type == NodeType.modifier}
  <ModifierNode {node}></ModifierNode>
{:else if node.type == NodeType.title}
  <TitleNode {node}></TitleNode>
{:else if node.type == NodeType.rollBtn}
  <RollBtnNode {node} {sheet}></RollBtnNode>
{:else}
  <p>Tipo de nó não implementado</p>
{/if}

