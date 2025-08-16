<script>
  import Button from "../../shared/components/Button.svelte";
  import Modal from "../../shared/components/Modal.svelte";
  import { criarFicha } from "./services/sheetsService";

  import { closeModal, refreshSheets, showModal } from "./stores/createSheetStore";

  let characterName = $state('');

  async function criar(){
    let criado = await criarFicha(characterName);

    if(criado){
      await refreshSheets();
      closeModal();
    }
  }

</script>

<Modal showModal={showModal}>
  {#snippet header()}
    <h3>Criar Ficha</h3>
  {/snippet}
  
  {#snippet body()}
    <div class="form-wrapper">
      <label for="name">Nome do personagem</label>
      <input bind:value={characterName} id="name" placeholder="Insira o nome do persoangem...">
    </div>
  {/snippet}
  
  {#snippet footer()}
    <div class="btn-wrapper">
      <Button
        on:click={closeModal}
        class="bgx br-10 red"
      >
        Cancelar
      </Button>
      <Button
        on:click={criar}
        class="bgx br-10 purple"
      >
        Criar
      </Button>
    </div>
  {/snippet}
</Modal>

<style>
  .btn-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    gap: 15px;
  }

  .form-wrapper{
    display: flex;
    flex-direction: column;

    gap: 10px;
  }
</style>