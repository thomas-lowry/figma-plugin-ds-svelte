<script>
    import Icon from './../Icon/index.svelte';

    export let id = null;
    export let value = null;
    export let name = null;
    export let iconText = null;
    export let borders = false;
    export let disabled = false;
    export let iconName = null;
    export let spin = false;
    export let invalid = false;
    export let errorMessage = 'Error message';
    export let placeholder = 'Input something here...';
    export let autofocus = false;
    // Causes warning, but helpful for search fields
    export { className as class };

    let indent;
    if (iconName || iconText) {
        indent = true;
    }

    let className = '';
</script>

<div class="input {className}">
    {#if iconName || iconText}
        <div class="icon">
            <Icon {iconName} {iconText} {spin} color="black3" />
        </div>
    {/if}
    <input
        type="input"
        on:input
        on:change
        on:keydown
        on:focus
        on:blur
        bind:value
        {id}
        {name}
        {disabled}
        {placeholder}
        {errorMessage}
        {autofocus}
        class:indent
        class:borders
        class:invalid
    />
    {#if invalid}
        <div class="error">
            {errorMessage}
        </div>
    {/if}
</div>

<style>
    .input {
        position: relative;
        transition: flex 0s 0.2s;
    }

    input {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-xsmall);
        line-height: var(--line-height);
        position: relative;
        display: flex;
        overflow: visible;
        align-items: center;
        width: 100%;
        height: 30px;
        margin: 1px 0 1px 0;
        padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall)
            var(--size-xxsmall);
        color: var(--black8);
        border: 1px solid transparent;
        border-radius: var(--border-radius-small);
        outline: none;
        background-color: var(--white);
    }
    input:hover,
    input:placeholder-shown:hover {
        color: var(--black8);
        border: 1px solid var(--black1);
        background-image: none;
    }
    input::selection {
        color: var(--black);
        background-color: var(--blue3);
    }
    input::placeholder {
        color: var(--black3);
        border: 1px solid transparent;
    }
    input:placeholder-shown {
        color: var(--black8);
        border: 1px solid var(--black1);
        background-image: none;
    }
    input:focus:placeholder-shown {
        border: 1px solid var(--blue);
        outline: 1px solid var(--blue);
        outline-offset: -2px;
    }
    input:disabled:hover {
        border: 1px solid transparent;
    }
    input:active,
    input:focus {
        color: var(--black);
        border: 1px solid var(--blue);
        outline: 1px solid var(--blue);
        outline-offset: -2px;
    }
    input:disabled {
        position: relative;
        color: var(--black3);
        background-image: none;
    }
    input:disabled:active {
        outline: none;
    }

    .borders {
        border: 1px solid var(--black1);
        background-image: none;
    }
    .borders:disabled {
        border: 1px solid transparent;
        background-image: none;
    }
    .borders:disabled:placeholder-shown {
        border: 1px solid transparent;
        background-image: none;
    }
    .borders:disabled:placeholder-shown:active {
        border: 1px solid transparent;
        outline: none;
    }
    .borders:placeholder-shown {
        border: 1px solid var(--black1);
        background-image: none;
    }

    .indent {
        padding-left: 32px;
    }

    .invalid,
    .invalid:hover,
    .invalid:focus {
        border: 1px solid var(--red);
        outline: 1px solid var(--red);
        outline-offset: -2px;
    }

    .icon {
        position: absolute;
        top: -1px;
        left: 0;
        width: var(--size-medium);
        height: var(--size-medium);
        z-index: 1;
    }

    .error {
        color: var(--red);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-xsmall);
        line-height: var(--line-height);
        padding-top: var(--size-xxxsmall);
        padding-left: var(--size-xxsmall);
    }
</style>
