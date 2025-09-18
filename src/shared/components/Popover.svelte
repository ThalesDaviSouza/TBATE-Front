<script lang="ts">
  
  type props = {
    open: boolean,
    onClose: () => void,
    body: any,
    anchor: any
  };

  let { body, open, onClose, anchor }: props = $props();

  function handleClickOutside(e: any){
    if(!e.target.closest(".popover-content"))
    {
      onClose();
    }
  }

  let rect = $derived(anchor.getBoundingClientRect());
  let popoverStyle = $derived(`top:${rect.bottom - 25}px;left:${rect.left + 30}px;position:absolute;`);


</script>

{#if open}
  <div
    class="popover-backdrop"
    onclick={handleClickOutside}
    onkeydown={handleClickOutside}
    role="dialog"
    tabindex="0"
  >
    <div class="popover-content" style={popoverStyle}>
      {@render body()}
    </div>
  </div>
{/if}

<style>
  .popover-backdrop {
    position: fixed;
    inset: 0;
    z-index: 10;
  }
  .popover-content {
    position: absolute;
    background: var(--black);
    border: 1px solid var(--dark-gray);
    border-radius: 8px;
    padding: 0.75rem;
  }
</style>