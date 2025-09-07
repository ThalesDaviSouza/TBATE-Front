<script lang="ts">
  import { writable } from "svelte/store";
  import Modal from "../../../shared/components/Modal.svelte";
  import type { SheetNode } from "../model/sheetNode";

  type props = {
    node: SheetNode
  };

  let { node }: props = $props();
  let showModal = writable(false);
</script>

<div id="modifier-wrapper">
  <span 
    onclick={() => showModal.set(true)}
    tabindex="0"
    role="button"
    onkeydown={(e) => {
      if(e.key == 'enter' || e.key == ' ')
        showModal.set(true)
    }}
  >
    {node.value}
  </span>
</div>

<Modal showModal={showModal}>
  {#snippet body()}
    <span>Definir a formula</span>
  {/snippet}
</Modal>

<style>
  div{
    gap: 15px;
  }
  
  #modifier-wrapper{
    display: flex;
    flex-direction: row;
  }

  input {
    text-align: center;
    width: auto;
  }

</style>