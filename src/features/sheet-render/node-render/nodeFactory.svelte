<script lang="ts">
  import { NodeType } from "../model/nodeType";
  import type { SheetNode } from "../model/sheetNode";
  import ModifierNode from "./modifierNode.svelte";
  import RollBtnNode from "./rollBtnNode.svelte";
  import TextNode from "./textNode.svelte";
  import TitleNode from "./titleNode.svelte";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();

</script>

{#if node.type == NodeType.text}
  <TextNode {node}></TextNode>
{:else if node.type == NodeType.modifier}
  <ModifierNode {node}></ModifierNode>
{:else if node.type == NodeType.title}
  <TitleNode {node}></TitleNode>
{:else if node.type == NodeType.rollBtn}
  <RollBtnNode {node}></RollBtnNode>
{:else}
  <p>Tipo de nó não implementado</p>
{/if}

