<script>
  import Button from "../../shared/components/Button.svelte";

  const AUTH_URL = import.meta.env.VITE_AUTH_URL;

  export function login() {
    window.location.href = AUTH_URL;
  }
</script>

<section>
  <div id="container">
    <h2 class="title">Seja Bem-Vindo</h2>
    <div class="btns-wrapper">
      <span>Entrar com</span>
      <Button class="bg"
        on:click="{login}"
      >
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