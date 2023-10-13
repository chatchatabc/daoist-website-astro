<script lang="ts">
  import CaretIcon from "@assets/svelte/CaretIcon.svelte";

  export let options: { value: string; label: string }[];
  export let placeholder: string | undefined;
  export let classNames:
    | {
        root: string;
        input: string;
        wrapper: string;
      }
    | undefined;

  let selectRef: HTMLDivElement | null = null;
  let isOpen = false;
  let selectedOption: string | null = null;
</script>

<div bind:this={selectRef} class={`custom-select relative ${classNames?.root}`}>
  <div class={`flex items-center ${classNames?.wrapper}`}>
    <input
      class={`flex-1 min-w-0 ${classNames?.input} focus:outline-none`}
      {placeholder}
      value={selectedOption}
      on:focus={() => (isOpen = true)}
      readonly
    />

    <button
      type="button"
      on:click={() => (isOpen = !isOpen)}
      class={`w-4 h-4 shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
    >
      <CaretIcon />
    </button>
  </div>

  {#if isOpen}
    <ul class={`absolute bg-white w-full max-h-[200px] top-full left-0 p-2`}>
      {#each options as option}
        <li>
          <button
            class="w-full text-left"
            type="button"
            on:click={() => {
              selectedOption = option.value;
              isOpen = false;
            }}
          >
            {option.label}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
