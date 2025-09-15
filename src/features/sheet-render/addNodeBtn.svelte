<script>
  import Icon from "@iconify/svelte";

  let { index } = $props();
  // TODO: implementar o insert after
</script>

<button class="add-btn">
  <Icon icon="iconoir:plus-circle" color="var(--white)" width="18" />
</button>

<style>
  .add-btn{
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
</style>