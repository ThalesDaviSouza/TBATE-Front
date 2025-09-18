<script lang="ts">
  import { tick } from "svelte";
  import type { Tab } from "./model/tab";
  import type { SheetStore } from "./stores/sheetStore.svelte";

  type props = {
    context: SheetStore,
    tab: Tab,
    id: number
  }

  let { context, id, tab }: props = $props();

  let isEditing = $state(false);

  async function handleDbClick(e:any){
    e.preventDefault();
    isEditing = !isEditing;
    await tick();
    const el = document.getElementById("tab_editor_"+id);
    el?.focus();
  }

  function handleBlur(){
    isEditing = false;
  }

</script>

<div 
  class="tab"
  class:active={id == context.selectedTabId}
  role="button"
  tabindex="0"
  onclick={() => context.selectedTabId = id}
  onkeydown={(e) => {
    if(e.key == 'Enter' || e.key == ' '){
      context.selectedTabId = id
    }
  }}
  ondblclick={handleDbClick}
>
  {#if isEditing}
    <input 
      id={"tab_editor_"+id}
      type="text" 
      class="tab-edit-input"
      bind:value={tab.name}
      onblur={handleBlur}
      onkeydown={(e) => {
        if(e.key == 'Enter')
          handleBlur();
      }}
    />
  {:else}
    <span>
      {tab.name}
    </span>
  {/if}
</div>

<style>
  .tab {
    border: 1px solid var(--dark-gray);
    padding: 5px 10px;
    border-radius: 7px 7px 0 0;
    cursor: pointer;
    transition: all ease-in-out 0.25s;

    user-select: none;
  }
  .tab:hover {
    background-color: var(--light-black);
  }

  .active{
    border-color: var(--white);
    color: var(--white);
  }

  .tab-edit-input {
    background-color: var(--black-bg);
    color: var(--white);
    border-radius: 5px;
    border-color: var(--gray);
    width: 100px;
  }

</style>