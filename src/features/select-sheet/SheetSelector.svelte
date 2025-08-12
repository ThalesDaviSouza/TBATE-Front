<script>
  import Button from "../../shared/components/Button.svelte";
  import SheetCard from "./SheetCard.svelte";

</script>
<div class="wrapper">
  <div class="container">
    <h3>Qual ficha será a escolha de hoje?</h3>

    <div class="sheets-container">
      <Button class="width-90 bg br-10 purple">
        Criar Ficha
      </Button>
      <SheetCard></SheetCard>
      <SheetCard></SheetCard>
      <SheetCard></SheetCard>
      <SheetCard></SheetCard>
      <SheetCard></SheetCard>
      <SheetCard></SheetCard>
    </div>
  </div>
</div>


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
  }
</style>