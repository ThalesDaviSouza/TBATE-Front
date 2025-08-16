<script lang="ts">
  import type { ResumeSheet } from "./model/resumeSheet";

  type Props = {
    sheet: ResumeSheet
  }

  let { sheet }: Props = $props();
</script>

<div class="sheet-card">
  <span>{sheet.characterName}</span>
</div>


<style>
  .sheet-card{
    background-color: var(--black);
    color: var(--gray);

    text-align: center;

    padding: 14px 0;
    border-radius: 10px;
    width: 90%;

    font-size: 21px;

    cursor: pointer;

    transition: all 0.15s;
  }

  .sheet-card:hover {
    font-weight: bold;
    background-color: var(--light-black);
    color: var(--white);
  }
</style>