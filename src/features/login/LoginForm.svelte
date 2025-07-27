<script>
  import Button from "../../shared/components/Button.svelte";
</script>

<section>
  <div id="container">
    <h2 class="title">Seja Bem-Vindo</h2>
    <div class="btns-wrapper">
      <span>Entrar com</span>
      <Button class="bg">
        Google
      </Button>
    </div>
  </div>
</section>

<style>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  #container{
    width: 350px;
    height: 450px;
    display: grid;
    grid-template-rows: auto 1fr;
    
    background-color: var(--white);
    color: var(--dark-gray-blue);
    padding: 10px 20px;
    
    border-radius: 20px;
  }

  .btns-wrapper{
    margin-top: 40px;
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .title{
    font-size: 32px;
  }
</style>