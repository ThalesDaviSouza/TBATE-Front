<script lang="ts">
  import Icon from "@iconify/svelte";
  import Modal from "../../../../shared/components/Modal.svelte";
  import { ReadFormula } from "../../../../shared/services/RollFormulaInterpreter/rollFormulaInterpreter";
  import type { RollBtnNode } from "../../model/sheetNode";
  import EffectWrapper from "./effectWrapper.svelte";
  import type { SheetStore } from "../../stores/sheetStore.svelte";

  type props = {
    node: RollBtnNode,
    nodeId: number
    context: SheetStore,
    showModal: boolean
  };

  let { node = $bindable(), showModal, context, nodeId }: props = $props();

  function addEffect(){
    node.effects.push({
      name: 'Efeito',
      actions: []
    })
  }

</script>


<Modal showModal={showModal}>
  {#snippet header()}
    <h2>Definir a formula:</h2>
  {/snippet}
  {#snippet body()}
    <div class="body-wrapper">
      <input type="text" bind:value={node.rollFormula}>

      <div>
        <button class="add-btn" onclick={addEffect}>
          <Icon icon="iconoir:keyframe-plus-in" width="25"></Icon>
        </button>
      </div>
      {#each node.effects as effect, effectId }
        <EffectWrapper 
          bind:effect={node.effects[effectId]} 
          {context}
          {effectId}
          {nodeId}
        >
        </EffectWrapper>
      {/each}
    </div>
  {/snippet}
  {#snippet footer()}
    <button onclick={() => ReadFormula(node.rollFormula, context.sheet)}>Teste</button>
  {/snippet}
</Modal>

<style>
  h2{
    margin: 0;
  }

  .body-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .add-btn{
    background-color: transparent;
    
    border: 0;
    border-radius: 10px;
    padding: 5px 8px;

    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: all 0.125s ease-in-out;
  }
  .add-btn:hover{
    background-color: var(--black-bg);
    color: var(--white);
  }

</style>