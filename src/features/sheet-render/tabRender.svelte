<script lang="ts">
  import type { SheetStore } from "./stores/sheetStore.svelte";

  type props = {
    context: SheetStore
  }

  let { context }: props = $props();
</script>

<div id="tab-wrapper">
  {#each context.sheet.tabs as tab, id }
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
    >
      <span>
        {tab.name}
      </span>
    </div>
  {/each}
</div>

<style>
  .tab {
    border: 1px solid var(--dark-gray);
    padding: 5px 10px;
    border-radius: 7px 7px 0 0;
    cursor: pointer;
    transition: all ease-in-out 0.25s;
  }
  .tab:hover {
    background-color: var(--light-black);
  }

  #tab-wrapper{
    display: flex;
    flex-direction: row;
    width: max-content;
  }

  .active{
    border-color: var(--white);
    color: var(--white);
  }
</style>