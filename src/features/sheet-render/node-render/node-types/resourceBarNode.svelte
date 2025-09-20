<script lang="ts">
  import Icon from "@iconify/svelte";
  import Button from "../../../../shared/components/Button.svelte";
  import type { ResourceBarNode } from "../../model/sheetNode";

  type props = {
    node: ResourceBarNode
  };

  let { node }: props = $props();
  let percent = $derived((node.value / node.maxValue!)*100)

  function decreaseActual(){
    node.value--;
  }
  function increaseActual(){
    node.value++;
  }

</script>

{#if node.name == ''}
  <input type="text" bind:value={node.name} placeholder="Recurso 1">
{:else}
  <span
    contenteditable="true"
    bind:textContent={node.name}
  >
  </span>
{/if}

<div class="wrapper">
  <input 
    type="range" 
    min="0" 
    max={node.maxValue} 
    bind:value={node.value}
    draggable="true"
    ondragstart={(e) => e.preventDefault()}
    style="background: linear-gradient(to right, var(--green-bg) {percent}%, white {percent}%);"
  >
  <section>
    <Button class="transparent" on:click={decreaseActual}>
      <Icon icon="iconoir:minus-circle" width="24" color="var(--red)"></Icon>
    </Button>
    
    <div class="value-container">
      <input type="number" bind:value={node.value} >
      <span>Atual</span>
    </div>
    
    <span>/</span>
    
    <div class="value-container">
      <input type="number" bind:value={node.maxValue} >
      <span>Máximo</span>
    </div>

    <Button class="transparent" on:click={increaseActual}>
      <Icon icon="iconoir:plus-circle" width="24" color="var(--green-bg)"></Icon>
    </Button>
  </section>
</div>

<style>
  .wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  section{
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  .value-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    border-radius: 5px;
    outline: none;
    padding: 0;
  }

  /* Thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: var(--dark-gray);
    cursor: pointer;
    border: none;
  }

  input[type="range"]::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: var(--dark-gray);
    cursor: pointer;
    border: none;
  }

  input[type="number"] {
    text-align: center;
  }
</style>
