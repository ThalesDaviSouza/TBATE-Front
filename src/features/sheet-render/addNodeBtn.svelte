<script lang="ts">
  import Icon from "@iconify/svelte";
  import Popover from "../../shared/components/Popover.svelte";
  import Button from "../../shared/components/Button.svelte";
  import type { SheetStore } from "./stores/sheetStore.svelte";
  import { NodeType } from "./model/nodeType";

  type props = {
    index: number,
    context: SheetStore
  }

  let { index, context }: props = $props();

  let showPopover = $state(false);
  let anchor; // referência ao botão clicado

  function togglePopover(event: any) {
    anchor = event.currentTarget;
    showPopover = !showPopover;
  }

  function addNode(nodeType: NodeType) {
    context.AddNodeInCurrentTab(nodeType, index);
  }
</script>

<button class="add-btn">
  <Icon 
    icon="iconoir:plus-circle" 
    color="var(--white)" 
    width="18" 
    bind:this={anchor}
    onclick={togglePopover}
  />
</button>

<Popover 
  open={showPopover}
  onClose={() => {showPopover = false}}
  anchor={anchor}
>
  {#snippet body()}
    <h5>Adicionar</h5>
    <hr />
    <section class="options-section">
      <Button 
        class="transparent align-start" 
        on:click={() => addNode(NodeType.title)}
      >
        Titulo
      </Button>
      <Button class="transparent align-start">Texto</Button>
      <Button class="transparent align-start">Atributo</Button>
      <Button class="transparent align-start">Botão de Rolagem</Button>
    </section>  
  {/snippet}
</Popover>

<style>
  .add-btn{
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  h5{
    margin: 0;
  }

  .options-section{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>