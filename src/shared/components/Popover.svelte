<script lang="ts">
  
  type props = {
    isOpen: boolean,
    onClose: () => void,
    body: any,
    anchor: any
  };

  let { body, isOpen, onClose, anchor }: props = $props();

  function handleClickOutside(e: any){
    if(!e.target.closest(".popover-content"))
    {
      onClose();
    }
  }

  let rect = $derived(anchor ? anchor.getBoundingClientRect() : null);
  let popoverStyle = $derived(rect ?`top:${rect.bottom - rect.height/2}px;left:${rect.left + rect.width - 10}px;position:absolute;` : '');

 
</script>

{#if isOpen}
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