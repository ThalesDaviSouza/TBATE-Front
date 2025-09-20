<script lang="ts">
  import Button from "../../../shared/components/Button.svelte";
  import Popover from "../../../shared/components/Popover.svelte";
  import { NodeType } from "../model/nodeType";
  import type { Sheet } from "../model/sheet";
  import type { SheetNode } from "../model/sheetNode";
  import type { SheetStore } from "../stores/sheetStore.svelte";
  import ModifierNode from "./node-types/modifierNode.svelte";
  import ResourceBarNode from "./node-types/resourceBarNode.svelte";
  import RollBtnNode from "./node-types/rollBtnNode.svelte";
  import TextNode from "./node-types/textNode.svelte";
  import TitleNode from "./node-types/titleNode.svelte";

  type props = {
    context: SheetStore,
    node: SheetNode,
    sheet: Sheet,
    id: number
  };

  let { context, node = $bindable(), sheet, id }: props = $props();

  let showPopover = $state(false);
  let anchor = $state();

  function handleRightClick(e: Event){
    e.preventDefault();
    showPopover = true;
  }

  function deleteNode(){
    context.RemoveNode(context.selectedTabId, id);
  }

</script>

<div
  role="button"
  tabindex="0"
  oncontextmenu={handleRightClick}
  bind:this={anchor}
>
  {#if node.type == NodeType.text}
    <TextNode bind:node={node}></TextNode>
  {:else if node.type == NodeType.modifier}
    <ModifierNode bind:node={node}></ModifierNode>
  {:else if node.type == NodeType.title}
    <TitleNode bind:node={node}></TitleNode>
  {:else if node.type == NodeType.rollBtn}
    <RollBtnNode bind:node={node} {sheet}></RollBtnNode>
  {:else if node.type == NodeType.resourceBar}
    <ResourceBarNode bind:node={node}></ResourceBarNode>
  {:else}
    <p>Tipo de nó não implementado</p>
  {/if}
</div>

<Popover
  anchor={anchor}
  isOpen={showPopover}
  onClose={() => showPopover = false}
>
  {#snippet body()}
    <Button 
      class="transparent color-red align-start"
      on:click={deleteNode}
    >
      Deletar
    </Button>
  {/snippet}
</Popover>