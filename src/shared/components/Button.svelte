<script lang="ts">
  let buttonProps = {
    class:[$$restProps.class]
  }
</script>

<button
  on:click
  {...buttonProps}
>
  <slot />
</button>


<style>
  button{
    border-radius: 20px;
    border: 2px var(--black) solid;
    background-color: var(--white);
    padding: 5px 10px;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  button:hover{
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-color: var(--white);
  }

  .width-100{
    display: flex;
    width: 100%;
  }
  
  .width-90{
    display: flex;
    width: 90%;
  }

  .bg{
    font-size: 24px;
  }
  
  .bgx{
    font-size: 18px;
  }
  
  .br-10 {
    border-radius: 10px;
  }

  .purple {
    background-color: var(--purple);
    border: 0;
    color: var(--white);
  }
  .purple:hover {
    background-color: var(--white);
    color: var(--purple);
  }
  
  .red {
    background-color: var(--red);
    border: 0;
    color: var(--white);
  }
  .red:hover {
    background-color: var(--white);
    color: var(--red);
  }

  .transparent{
    background-color: transparent;
    border: 0;
    color: var(--white);
  }
  .transparent:hover{
    background-color: var(--light-black);
  }

  .align-start{
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

</style>