<script>

    export let checked = false;
    export let value = '';
    export let disabled = false;
    export let tabindex = 0;
    export { className as class };

    let uniqueId = 'checkbox--' + ((Math.random() * 10000000).toFixed(0)).toString();
    let className = '';
    
</script>

<div class={className}>
    <input 
        type="checkbox"
        id={uniqueId}
        bind:checked={checked}
        bind:value={value}
        {disabled} 
        {tabindex}
        onclick="this.blur();"
        on:change
        on:focus
        on:blur>
    <label for={uniqueId}>
        <slot />
    </label>
</div>	

<style>

    div {
        align-items: center;
        cursor: default;
        display: flex;
        position: relative;
    }

    input {
        opacity: 0;
        width: 10px;
        height: 10px;
        margin: 0;
        padding: 0;
        flex-shrink: 0;
    }
    input:checked + label:before {
        border: 1px solid var(--figma-color-bg-brand);
        background-color: var(--figma-color-bg-brand);
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
        background-repeat: no-repeat;
        background-position: 1px 2px;
    }
    input:disabled + label {
        color: var(--figma-color-text-disabled);
    }

    input:checked:disabled + label:before {
        border: 1px solid transparent;
		background-color: var(--figma-color-icon-disabled);
    }

    label {
        color: var(--figma-color-text);
        display: flex;
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        line-height: var(--font-line-height);
        letter-spacing: var(--font-letter-spacing-pos-xsmall);
        margin-left: -16px;
        padding: var(--size-xxsmall) var(--size-xsmall) var(--size-xxsmall) var(--size-small);
        user-select: none;
    }
    label:before {
        border: 1px solid var(--figma-color-icon);
		border-radius: var(--border-radius-small);
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        margin: 2px 10px 0 -8px;
        flex-shrink: 0;
    }

    input:enabled:checked:focus + label:before {
        border: 1px solid var(--figma-color-bg);
        box-shadow: 0 0 0 2px var(--figma-color-border-brand-strong);
        border-radius: var(--border-radius-small);
    }

    input:enabled:focus + label:before {
        border: 1px solid var(--figma-color-border-brand-strong);
        box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
    }

</style>