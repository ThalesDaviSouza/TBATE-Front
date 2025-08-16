<script lang="ts">
  import Button from "../../shared/components/Button.svelte";
  import { getSheets } from "./services/sheetsService";
  import SheetCard from "./SheetCard.svelte";
  import SheetCreatorModal from "./SheetCreatorModal.svelte";
  import { showModal } from "./stores/createSheetStore";

  let sheets = $state(getSheets());

  function openModal(){
    showModal.set(true);
  }

</script>

<div class="wrapper">
  <div class="container">
    <h3>Qual ficha será a escolha de hoje?</h3>

    <div class="sheets-container">
      <Button 
        class="width-90 bg br-10 purple"
        on:click={openModal}
      >
        Criar Ficha
      </Button>
      {#await sheets}
        <span>Carregando...</span>
      {:then sheets} 
        {#if sheets.length == 0}
          <span>Sem fichas</span>
        {:else}
          {#each sheets as sheet (sheet.characterName)}
            <SheetCard {sheet}></SheetCard>
          {/each}
        {/if}
      {:catch error}
        <span>Houve um erro ao carregar as fichas</span>
      {/await}
    </div>
  </div>
</div>

<SheetCreatorModal></SheetCreatorModal>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 900px;
    color: var(--white);
    padding: 20px;
    border-radius: 10px;
  }

  h3 {
    margin: 0;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .sheets-container{
    background-color: var(--gray);
    color: var(--black);
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    gap: 25px;
    width: 90%;
    min-height: 300px;
    max-height: 400px;
    
    border-radius: 14px;
    border: var(--light-black) solid 1px;

    overflow-y: auto;
    padding: 20px 15px;

    
    box-shadow: 0px 0px 16px -2px var(--white-shadow);
    -webkit-box-shadow: 0px 0px 16px -2px var(--white-shadow);
    -moz-box-shadow: 0px 0px 16px -2px var(--white-shadow);
  }
</style>