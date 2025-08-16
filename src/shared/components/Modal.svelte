<script lang="ts">
  import type { Snippet } from "svelte";
  import type { Writable } from "svelte/store";

  type Props = {
    header?: Snippet,
    body?: Snippet,
    footer?: Snippet,
    showModal: Writable<boolean>
  }

  let { header, body, footer, showModal }: Props = $props();

  function closeModal() {
    showModal.set(!showModal);
  }

</script>

{#if $showModal}
  <div 
    class="overlay" 
    onclick={closeModal}
    role="button"
    tabindex="0"
    onkeydown={(e) => e.key == 'Enter' && closeModal()}
  >
    <div 
      class="modal-wrapper"
      role="button"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
      onkeydown={() => {}}
    >
      <div>
        {@render header?.()}
      </div>
      <div>
        {@render body?.()}
      </div>
      <div>
        {@render footer?.()}
      </div>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--black-bg-transparent);
  }

  .modal-wrapper{
    background-color: var(--gray);
    color: var(--dark-black);

    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    gap: 25px;

    border-radius: 10px;
    border: solid 1px var(--white);

    min-width: 400px;

        
    box-shadow: 0px 0px 30px -2px var(--gray-shadow);
    -webkit-box-shadow: 0px 0px 30px -2px var(--gray-shadow);
    -moz-box-shadow: 0px 0px 30px -2px var(--gray-shadow);
  }
</style>