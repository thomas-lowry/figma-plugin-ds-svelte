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
    export { className as class };

    let className = '';

</script>

{#if iconName || iconText}
    <div class="input {className}">
        <div class="icon">
            <Icon {iconName} {iconText} {spin} color="--figma-color-icon"/>
        </div>
        <input 
            type="input"
            on:input
            on:change
            on:keydown
            on:focus
            on:blur
            bind:value={value}
            {id}
            {name}
            {disabled}
            {placeholder}
            {errorMessage}
            class="indent"
            class:borders={borders}
            class:invalid={invalid}
        >
        {#if invalid}
            <div class="error">
                {errorMessage}
            </div>
        {/if}
    </div>
{:else}
    <div class="input {className}">
        <input 
            type="input"
            on:input
            on:change
            on:keydown
            on:focus
            on:blur
            bind:value={value}
            {id}
            {name}
            {disabled}
            {placeholder}
            {errorMessage}
            class:borders={borders}
            class:invalid={invalid}
        >
        {#if invalid}
            <div class="error">
                {errorMessage}
            </div>
        {/if}
    </div>
{/if}
<style>

    .input {
        position: relative;
        transition: flex 0s 0.2s; 
    }

    input {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var( --font-letter-spacing-neg-xsmall);
        line-height: var(--line-height);
        position: relative;
        display: flex;
        overflow: visible;
        align-items: center;
        width: 100%;
        height: 30px;
        margin: 1px 0 1px 0;
        padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall) var(--size-xxsmall);
        color: var(--figma-color-text);
        border: 1px solid transparent;
        border-radius: var(--border-radius-small);
        outline: none;
        background-color: var(--figma-color-bg);
    }
    input:hover, input:placeholder-shown:hover {
		color: var(--figma-color-text-hover);
		border: 1px solid var(--figma-color-border);
        background-image: none;
	}
	input::selection {
		color: var(--figma-color-text);
		background-color: var(--text-highlight); 
	}
	input::placeholder {
		color: var(--figma-color-text-tertiary);
		border: 1px solid transparent;
	}
	input:placeholder-shown {
		color: var(--figma-color-text);
        border: 1px solid var(--figma-color-border);
        background-image: none;
	}
    input:focus:placeholder-shown {
        border: 1px solid var(--figma-color-border-selected);
        outline: 1px solid var(--figma-color-border-selected);
        outline-offset: -2px;
    }
	input:disabled:hover {
		border: 1px solid transparent;
	}
	input:active, input:focus {

		color: var(--figma-color-text);
        border: 1px solid var(--figma-color-border-selected);
        outline: 1px solid var(--figma-color-border-selected);
        outline-offset: -2px;
	}
	input:disabled {
		position: relative;
		color: var(--figma-color-text-disabled);
        background-image: none;
	}
	input:disabled:active {
        outline: none;
    }

    .borders {
        border: 1px solid var(--figma-color-border);
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
        border: 1px solid var(--figma-color-border);
        background-image: none;
    }
    
    .indent {
        padding-left: 32px;
    }

    .invalid, .invalid:hover, .invalid:focus {
        border: 1px solid var(--figma-color-border-danger-strong);
        outline: 1px solid var(--figma-color-border-danger-strong);
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
        color: var(--figma-color-text-danger);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var( --font-letter-spacing-neg-xsmall);
        line-height: var(--line-height);
        padding-top: var(--size-xxxsmall);
        padding-left: var(--size-xxsmall);
    }

</style>