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
        color: var(--white);
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
        background-color: var(--blue);
        color: var(--white);
    }
    .primary:enabled:active, .primary:enabled:focus {
        border: 2px solid var(--black3);
    }
    .primary:disabled {
        background-color: var(--black3);
    }
    .primary.destructive {
        background-color: var(--red);
    }
    .primary.destructive:disabled  {
        opacity: 0.4;
    }

    /* Secondary styles */
    .secondary {
        background-color: var(--white);
        border: 1px solid var(--black8);
        color: var(--black8);
        padding: 0 calc(var(--size-xsmall) + 1px) 0 calc(var(--size-xsmall) + 1px);
        letter-spacing: var(--font-letter-spacing-pos-small);
    }
    .secondary:enabled:active, .secondary:enabled:focus {
        border: 2px solid var(--blue);
        padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
    }
    .secondary:disabled {
        border: 1px solid var(--black3);
        color: var(--black3);
    }
    .secondary.destructive {
       border-color: var(--red);
       color: var(--red);
    }
    .secondary.destructive:enabled:active, .secondary.destructive:enabled:focus {
       border: 2px solid var(--red);
        padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
    }
    .secondary.destructive:disabled {
        opacity: 0.4;
    }

    /* tertiary styles */
    .tertiary {
        border: 1px solid transparent;
        color: var(--blue);
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
        color: var(--black3);
    }
    .tertiary.destructive {
       color: var(--red);
    }
    .tertiary.destructive:enabled:focus {
        text-decoration: underline;
    }
    .tertiary.destructive:disabled {
       opacity: 0.4;
    }

</style>