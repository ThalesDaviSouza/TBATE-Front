<script lang="ts">
  import type { Tab } from "./model/tab";
  import { selectedTabId } from "./stores/selectedTab.svelte";

  type props = {
    tabs: Tab[]
  }

  let { tabs }: props = $props();
</script>

<div id="tab-wrapper">
  {#each tabs as tab, id }
    <div 
      class="tab"
      class:active={id == selectedTabId.value}
      role="button"
      tabindex="0"
      onclick={() => selectedTabId.value = id}
      onkeydown={(e) => {
        if(e.key == 'Enter' || e.key == ' '){
          selectedTabId.value = id
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
    transition: all ease-in-out 0.125s;
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