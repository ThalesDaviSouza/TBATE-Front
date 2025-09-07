<script lang="ts">
  import { writable } from "svelte/store";
  import Modal from "../../../shared/components/Modal.svelte";
  import type { SheetNode } from "../model/sheetNode";
  import { ReadFormula } from "../../../shared/services/RollFormulaInterpreter/rollFormulaInterpreter";
  import type { Sheet } from "../model/sheet";

  type props = {
    node: SheetNode,
    sheet: Sheet
  };

  let { node, sheet }: props = $props();
  let showModal = writable(false);
  let input = $state("");
</script>

<div id="modifier-wrapper">
  <span 
    onclick={() => showModal.set(true)}
    tabindex="0"
    role="button"
    onkeydown={(e) => {
      if(e.key == 'enter' || e.key == ' ')
        showModal.set(true)
    }}
  >
    {node.value}
  </span>
</div>

<Modal showModal={showModal}>
  {#snippet header()}
    <span>Definir a formula:</span>
  {/snippet}
  {#snippet body()}
    <input type="text" bind:value={input}>
  {/snippet}
  {#snippet footer()}
    <button onclick={() => ReadFormula(input, sheet)}>Teste</button>
  {/snippet}
</Modal>

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