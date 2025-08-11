<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Button from '../shared/components/Button.svelte'
  import { getNewAcessToken, verifyIsAuthenticated } from '../shared/services/authService';

  function navigateToLoginPage(){
    goto('/login');
  }

  onMount(async() => {
    // TODO: Isolar a lógica de refresh Token
    let authenticated: boolean = await verifyIsAuthenticated();

    if(!authenticated){ 
      authenticated = await getNewAcessToken();
    }
    
    if(authenticated)
      goto('/sheets')

  })
</script>

<div id="container">
  <div>
    <h2>Seja Bem vindo ao</h2>
    <h2>The Beginning After The End - RPG</h2>
    <p>
      Esse é um sistema feito de fã para fã para jogar no sistema
      mundo da série The Beginning After The End.
    </p>
  </div>

  <div id="card-login">
    <h2>
      Deseja começar a se aventurar nesse mundo?
    </h2>
    <Button on:click={navigateToLoginPage} class="width-100">
      Entrar
    </Button>
  </div>
</div>

<style>
  #container{
    display: grid;
    height: 100%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 50px;
    padding: 0 50px;
  }

  #card-login{
    background-color: var(--white);
    color: var(--dark-gray-blue);
    height: 450px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    align-self: center;

    border-radius: 40px;
    padding: 30px;
  }


</style>
