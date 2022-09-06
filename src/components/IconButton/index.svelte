<script>
    import Icon from './../Icon/index.svelte';

    export let iconName = '';
    export let iconText = null;
    export let selected = false;
    export let spin = false;
    export let tabindex = 0;
    export let disabled = false;
    export let rounded = false;

    export { className as class };
    let className = '';
</script>

<div on:click onclick="this.blur();" class:selected class:disabled class:rounded class={className} {tabindex}>
    {#if selected === true}
        <Icon {iconName} {iconText} {spin} color="--figma-color-icon-onbrand" />
    {:else if disabled == true}
        <Icon {iconName} {iconText} {spin} color="--color-icon-disabled" />
    {:else}
        <Icon {iconName} {iconText} {spin} color="--figma-color-icon" />
    {/if}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: var(--size-medium);
        height: var(--size-medium);
        border-radius: var(--border-radius-small);
        border: 2px solid transparent;
    }
    div:hover {
        background: var(--figma-color-bg-hover);
    }
    div:active,
    div:focus {
        border: 2px solid var(--blue);
        outline: none;
    }

    .selected {
        background-color: var(--figma-color-bg-selected-strong);
    }
    .selected:hover {
        background-color: var(--figma-color-bg-selected-strong);
    }
    .selected:active,
    .selected:focus {
        border: 2px solid var(--black3);
    }

    .rounded {
        border-radius: 6px;
    }

    div.disabled {
        pointer-events: none;
    }
</style>
