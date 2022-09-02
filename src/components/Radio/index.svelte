<script>

    export let group = null;
    export let value = null;
    export let disabled = false;
    export let tabindex = 0;
    export { className as class };

    let uniqueId = 'radio--' + ((Math.random() * 10000000).toFixed(0)).toString();
    let className = '';
    $: checked = group === value;

</script>

<div class={className}>
    <input 
        type="radio"
        {value}
        {checked}
        {disabled} 
        {tabindex}
        id={uniqueId}
        bind:group={group}
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
    input:checked + label:after {
        background-color: var(--figma-color-icon);
    }
    input:disabled + label {
        opacity: 0.3;
    }
    input:checked:disabled + label:before {
        border: 1px solid var(--figma-color-icon);
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
    /* checked dot */
    label:after {
        content: '';
        width: 6px;
        height: 6px;
        background-color: transparent;
        border-radius: 50%;
        position: absolute;
        top: 13px;
        left: 13px;
    }

    /* circle */
    label:before {
        border: 1px solid var(--figma-color-icon); 
		border-radius: var(--border-radius-small);
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        margin: 2px 10px 0 -8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    input:enabled:checked:focus + label:before {
        border: 1px solid var(--figma-color-border-selected);
        box-shadow: 0 0 0 1px var(--figma-color-border-selected);
        border-radius: var(--border-radius-small);
        border-radius: 50%;
    }

    input:enabled:focus + label:before {
        border: 1px solid var(--figma-color-border-selected);
        box-shadow: 0 0 0 1px var(--figma-color-border-selected);
    }

</style>
