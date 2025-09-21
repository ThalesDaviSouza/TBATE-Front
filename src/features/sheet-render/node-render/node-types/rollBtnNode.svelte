<script lang="ts">
  import type { RollBtnNode } from "../../model/sheetNode";
  import { ReadFormula } from "../../../../shared/services/RollFormulaInterpreter/rollFormulaInterpreter";
  import Icon from "@iconify/svelte";
  import RollBtnModal from "../roll-btn-node/rollBtnModal.svelte";
  import type { SheetStore } from "../../stores/sheetStore.svelte";

  type props = {
    node: RollBtnNode,
    nodeId: number,
    context: SheetStore
  };

  let { node = $bindable(), context, nodeId }: props = $props();
  let showModal = $state(false);
</script>

<div id="modifier-wrapper"
  onclick={() => ReadFormula(node.rollFormula, context.sheet)}
  tabindex="0"
  role="button"
  onkeydown={(e) => {
    if(e.key == 'enter' || e.key == ' ')
      ReadFormula(node.rollFormula, context.sheet)
  }}
>
  <span 
    class="edit"
    onclick={(e) => { showModal = true; e.stopPropagation(); }}
    tabindex="0"
    role="button"
    onkeydown={(e) => {
      if(e.key == 'enter' || e.key == ' ')
        showModal = true;
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
    {node.rollFormula}
  </span>
</div>

<RollBtnModal 
  bind:node={node} 
  {showModal} 
  {context}
  {nodeId}
>
</RollBtnModal>


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