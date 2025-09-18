<script lang="ts">
  import Icon from "@iconify/svelte";
  import Popover from "../../shared/components/Popover.svelte";

  let { index } = $props();

  let showPopover = $state(false);
  let anchor; // referência ao botão clicado
  let popoverStyle = $state("");

  function togglePopover(event: any) {
    anchor = event.currentTarget;
    showPopover = !showPopover;
  }

  // TODO: implementar o insert after
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
    <div style={popoverStyle}>
      <p>Snippet dinâmico {index}</p>
      <button onclick={() => alert("Ação!")}>Ação</button>
    </div>
  {/snippet}
</Popover>

<style>
  .add-btn{
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
</style>