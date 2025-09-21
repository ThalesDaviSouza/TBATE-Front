<script lang="ts">
  import Button from "../../../../shared/components/Button.svelte";
  import { ActionApplysOn, ActionTarget, ActionType, type Effect } from "../../model/effect";
  import type { SheetStore } from "../../stores/sheetStore.svelte";
  import ActionWrapper from "./actionWrapper.svelte";

  type props = {
    effect: Effect,
    context: SheetStore,
    effectId: number,
    nodeId: number
  };

  let { effect = $bindable(), effectId, context, nodeId }: props = $props();

  function addAction(){
    effect.actions.push({
      applysOn: ActionApplysOn.all,
      duration: "",
      label: "Action",
      target: ActionTarget.self,
      type: ActionType.RollFormula,
      value: ""
    })
  }

  function deleteEffect() {
    context.DeleteEffect(nodeId, effectId);
  }

</script>

<div class="effect-wrapper">
  <div class="effect-data">
    <Button on:click={deleteEffect} class="red">Deletar</Button>
    <input type="text" bind:value={effect.name} />
    <Button on:click={addAction}>Adicionar Ação</Button>
  </div>
  
  {#each effect.actions as action, actionId }
    <ActionWrapper
      bind:action={effect.actions[actionId]}
      {actionId}
      {context}
      {effectId}
      {nodeId}
    >
    </ActionWrapper>
  {/each}

</div>

<style>
  .effect-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* border: 2px var(--black-bg) solid; */
    border-radius: 10px;
    padding: 5px 10px;
  }

  .effect-data{
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
</style>