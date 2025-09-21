<script lang="ts">
  import Icon from "@iconify/svelte";
  import { ActionApplysOn, ActionTarget, ActionType, type Action } from "../../model/effect";
  import type { SheetStore } from "../../stores/sheetStore.svelte";

  type props = {
    action: Action,
    actionId: number,
    nodeId: number,
    effectId: number,
    context: SheetStore
  }

  let { action = $bindable(), actionId, context, effectId, nodeId }: props = $props();

  let showBody = $state(false);

  function deleteAction(){
    context.DeleteAction(nodeId, effectId, actionId);
  }

</script>

<div class="action-wrapper">
  <div class="action-header">
    <button class="reveal-btn" onclick={() => showBody = !showBody}>
      {#if !showBody}
        <Icon icon="iconoir:arrow-down-circle"></Icon>
      {:else}
        <Icon icon="iconoir:arrow-up-circle"></Icon>
      {/if}
    </button>

    <div class="input-wrapper">
      <label for={"action"+actionId}>Nome</label>
      <input id={"action"+actionId} type="text" bind:value={action.label}>
    </div>
    
    <div class="input-wrapper">
      <label for={"actionvalue"+actionId}>Ação</label>
      <input id={"actionvalue"+actionId} type="text" bind:value={action.value}>
    </div>

    <button class="delete-btn" onclick={deleteAction}>
      <Icon icon="iconoir:xmark-circle-solid"></Icon>
    </button>
  </div>
  
  {#if showBody}
    <div class="action-body">
      <div class="input-wrapper">
        <label for={"actiontype"+actionId}>Tipo</label>
        <select name={"actiontype"+actionId} bind:value={action.type}>
          <option value={ActionType.RollFormula}>Formula</option>
          <option value={ActionType.text}>Texto</option>
        </select>
      </div>
      
      <div class="input-wrapper">
        <label for={"actionapplyson"+actionId}>Aplica em</label>
        <select name={"actionapplyson"+actionId} bind:value={action.applysOn}>
          <option value={ActionApplysOn.all}>Tudo</option>
          <option value={ActionApplysOn.modifier}>Atributo</option>
          <option value={ActionApplysOn.rollBtn}>Rolagem</option>
        </select>
      </div>
      
      <div class="input-wrapper">
        <label for={"actiontarget"+actionId}>Alvo</label>  
        <select name={"actiontarget"+actionId} bind:value={action.target}>
          <option value={ActionTarget.self}>Si mesmo</option>
        </select>
      </div>
      
      <div class="input-wrapper">  
        <label for={"actionduration"+actionId}>Duração</label>
        <input id={"actionduration"+actionId} type="number" bind:value={action.duration}>
      </div>
    </div>
  {/if}

</div>

<style>
  .input-wrapper{
    display: flex;
    flex-direction: column;
  }

  .action-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .action-header{
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  
  .action-body{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    padding-left: 40px;
  }

  .reveal-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: all 0.12s ease-in-out;
    font-size: 24px;
  }
  .reveal-btn:hover{
    color: var(--white);
  }

  .delete-btn{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: var(--red-bg);
    font-size: 24px;

    transition: all 0.12s ease-in-out;
  }
  .delete-btn:hover{
    color: var(--red);
  }
</style>