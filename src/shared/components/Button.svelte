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
    border: 2px var(--dark-gray-blue) solid;
    background-color: var(--white);
    padding: 5px 10px;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover{
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-color: var(--white);
    font-weight: bold;
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
  

  .br-10 {
    border-radius: 10px;
  }

  .purple {
    background-color: var(--purple);
    color: var(--white);
  }
  .purple:hover {
    background-color: var(--white);
    color: var(--purple);
  }

</style>