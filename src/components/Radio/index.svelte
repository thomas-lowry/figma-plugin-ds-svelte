

<script>
    import { onMount } from 'svelte';

    let uniqueId = 'radio--' + ((Math.random() * 10000000).toFixed(0)).toString();
    let className = '';

    export let group = null;
    export let value = null;
    export let disabled = false;
    export let tabindex = 0;
    export { className as class };

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
        on:change>
    <label for={uniqueId}>
        <slot />
    </label>
</div>

<style>

    div {
        align-items: center;
        cursor: default;
        display: flex;
        height: var(--size-medium);
        position: relative;
    }

    input {
        opacity: 0;
        width: 10px;
        height: 10px;
        margin: 0;
        padding: 0;
    }
    input:checked + label:before {
        background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="6" height="6" rx="3" fill="black" fill-opacity="0.8"/%3E%3C/svg%3E%0A');
        background-repeat: no-repeat;
        background-position: 2px 2px;
    }
    input:disabled + label {
        opacity: 0.3;
    }
    input:checked:disabled + label:before {
        border: 1px solid var(--black);
    }

    label {
        align-items: center;
        color: var(--black8);
        display: flex;
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        line-height: var(--font-line-height);
        letter-spacing: var(--font-letter-spacing-pos-small);
        margin-left: -16px;
        padding: 0 var(--size-xsmall) 0 var(--size-small);
        height: 100%;
        user-select: none;
    }
    label:before {
        border: 1px solid var(--black8);
		border-radius: var(--border-radius-small);
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        margin: 2px 10px 0 -8px;
        border-radius: 50%;
    }

    input:enabled:checked:focus + label:before {
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 1px var(--blue);
        border-radius: var(--border-radius-small);
        border-radius: 50%;
    }

    input:enabled:focus + label:before {
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 1px var(--blue);
    }

</style>
