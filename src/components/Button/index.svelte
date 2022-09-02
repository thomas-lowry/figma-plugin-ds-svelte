<script>
    import { onMount } from 'svelte';

    export let variant = 'primary';
    export let disabled = false;
    export let destructive = false;
    export { className as class };

    let className = '';

</script>

<button
    on:click
    on:submit|preventDefault
    onclick="this.blur();"
    {variant}
    {disabled}
    class:destructive={destructive}
    class="{variant} {className}">
        <slot />
</button>

<style>

    button {
        display: flex;
        align-items: center;
        border-radius: var(--border-radius-large);
        color: var(--figma-color-text-onbrand);
        flex-shrink: 0;
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-medium);
        letter-spacing: var(--font-letter-spacing-neg-small);
        line-height: var(--font-line-height);
        height: var(--size-medium);
        padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
        text-decoration: none;
        outline: none;
        border: 2px solid transparent;
        user-select: none;
    }

    /* Primary styles */
    .primary {
        background-color: var(--figma-color-bg-brand);
        color: var(--figma-color-text-onbrand);
    }
    .primary:enabled:active, .primary:enabled:focus {
        border: 2px solid var(--figma-color-border-brand-strong);
    }
    .primary:disabled {
        background-color: var(--figma-color-bg-disabled);
    }
    .primary.destructive {
        background-color: var(--figma-color-bg-danger);
    }
    .primary.destructive:active, .primary.destructive:focus {
        border: 2px solid var(--figma-color-border-disabled-strong);
    }
    .primary.destructive:disabled  {
        background-color: var(--figma-color-bg-disabled);
    }

    /* Secondary styles */
    .secondary {
        background-color: transparent;
        border: 1px solid var(--figma-color-border-strong);
        color: var(--figma-color-text);
        padding: 0 calc(var(--size-xsmall) + 1px) 0 calc(var(--size-xsmall) + 1px);
        letter-spacing: var(--font-letter-spacing-pos-small);
    }
    .secondary:enabled:active, .secondary:enabled:focus {
        border: 2px solid var(--figma-color-border-selected);
        padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
    }
    .secondary:disabled {
        border: 1px solid var(--figma-color-border-disabled-strong);
        color: var(--figma-color-text-disabled);
    }
    .secondary.destructive {
       /* this should be deprecated */ 
       border-color: var(--figma-color-border-danger-strong);
       color: var(--figma-color-text-danger);
    }
    .secondary.destructive:enabled:active, .secondary.destructive:enabled:focus {
       border: 2px solid var(--figma-color-border-danger-strong);
        padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
    }
    .secondary.destructive:disabled {
        opacity: 0.4;
    }

    /* tertiary styles */
    .tertiary {
        border: 1px solid transparent;
        color: var(--figma-color-text-brand);
        background: initial;
        padding: 0;
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-pos-small);
        cursor: pointer;
    }
    .tertiary:enabled:focus {
        text-decoration: underline;
    }
    .tertiary:disabled {
        color: var(--figma-color-text-disabled);
    }
    .tertiary.destructive {
       color: var(--figma-color-text-danger);
    }
    .tertiary.destructive:enabled:focus {
        text-decoration: underline;
    }
    .tertiary.destructive:disabled {
       opacity: 0.4;
    }

</style>
