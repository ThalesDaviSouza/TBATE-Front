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
    background-color: var(--dark-gray-blue);
    color: var(--white);
    cursor: pointer;
    border-color: var(--white);
  }

  .width-100{
    display: flex;
    width: 100%;
  }

  .bg{
    font-size: 24px;
  }

</style>