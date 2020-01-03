<script>
    let className = '';

    export let primary = false;
    export let secondary = false;
    export let disabled = false;
    export let destructive = false;
    export { className as class };
</script>

<button
    on:click
    on:submit
    onclick="this.blur();"
    class:primary={primary}
    class:secondary={secondary}
    class:destructive={destructive}
    {disabled}
    class={className}>
    <slot />
</button>

<style>

    button {
        background-color: var(--blue);
        border-radius: var(--border-radius-large);
        color: var(--white);
        display: inline-block;
        flex-shrink: 0;
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-medium);
        letter-spacing: var(--font-letter-spacing-neg-medium);
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
    .primary.destructive:disabled {
        opacity: 0.4;
    }

    /* Secondary styles */
    .secondary {
        background-color: var(--white);
        border: 1px solid var(--black8);
        color: var(--black8);
        padding: 0 calc(var(--size-xsmall) + 1px) 0 calc(var(--size-xsmall) + 1px);
        letter-spacing: var(--font-letter-spacing-pos-medium);
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

</style>