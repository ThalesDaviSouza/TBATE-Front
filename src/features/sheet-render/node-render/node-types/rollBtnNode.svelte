<script lang="ts">
  import { writable } from "svelte/store";
  import Modal from "../../../../shared/components/Modal.svelte";
  import type { SheetNode } from "../../model/sheetNode";
  import { ReadFormula } from "../../../../shared/services/RollFormulaInterpreter/rollFormulaInterpreter";
  import type { Sheet } from "../../model/sheet";
  import Icon from "@iconify/svelte";

  type props = {
    node: SheetNode,
    sheet: Sheet
  };

  let { node, sheet }: props = $props();
  let showModal = writable(false);
</script>

<div id="modifier-wrapper"
  onclick={() => ReadFormula(node.value, sheet)}
  tabindex="0"
  role="button"
  onkeydown={(e) => {
    if(e.key == 'enter' || e.key == ' ')
      ReadFormula(node.value, sheet)
  }}
>
  <span 
    class="edit"
    onclick={(e) => { showModal.set(true); e.stopPropagation(); }}
    tabindex="0"
    role="button"
    onkeydown={(e) => {
      if(e.key == 'enter' || e.key == ' ')
        showModal.set(true)
    }}
  >
    <Icon icon="iconoir:edit-pencil"/>
  </span>
  <p
    contenteditable="true"
    bind:textContent={node.name}
    onclick={(e) => e.stopPropagation()}
    onkeydown={(e) => {e.stopPropagation()}}
    class="name"
  >
  </p>
  <span class="roll-display">
    {node.value}
  </span>
</div>

<Modal showModal={showModal}>
  {#snippet header()}
    <span>Definir a formula:</span>
  {/snippet}
  {#snippet body()}
    <input type="text" bind:value={node.value}>
  {/snippet}
  {#snippet footer()}
    <button onclick={() => ReadFormula(node.value, sheet)}>Teste</button>
  {/snippet}
</Modal>

<style>  
  #modifier-wrapper{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px 20px;

    gap: 8px;
    
    background-color: var(--light-black);
    border: 1px solid var(--black-bg);
    border-radius: 10px;
    
    transition: ease-in 0.125s all;
    cursor: pointer;
  }
  
  #modifier-wrapper:hover{
    background-color: var(--black-bg);
    border: 1px solid var(--light-black);
  }

  input {
    text-align: center;
    width: auto;
  }

  .edit {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    padding: 3px;
  }

  .name {
    font-size: .9em;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .roll-display{
    font-size: .75em;
    text-align: center;
  }

</style>