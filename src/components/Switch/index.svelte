<script>
    
    export let checked = false;
    export let value = '';
    export let disabled = false;
    export let tabindex = 0;
    export { className as class };

    let uniqueId = 'switch--' + ((Math.random() * 10000000).toFixed(0)).toString();
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
    }
    input:checked + label:before {
        color: var(--black8);
        background-color: var(--black8-opaque);
    }
    input:checked + label:after {
        transform: translateX(12px);
    }
    input:disabled + label {
        color: var(--black);
        opacity: 0.3;
    }
    input:checked:disabled + label:before {
        border: 1px solid var(--black);
        background-color: var(--black);
    }

    input:focus + label:before {
        box-shadow: 0 0 0 2px var(--blue);
    }

    label {
        color: var(--black8);
        display: flex;
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-pos-xsmall);
        line-height: var(--font-line-height);
        margin-left: -16px;
        padding: var(--size-xxsmall) var(--size-xsmall) var(--size-xxsmall) calc(var(--size-xlarge) - 2px);
        user-select: none;
    }
    /* track */
    label:before {
        background-color: var(--white);
        border: 1px solid var(--black8-opaque);
        border-radius: 6px;
        content: '';
        display: block;
        height: 10px;
        left: 8px;
        position: absolute;
        top: 10px;
        transition: background-color 0.2s 0.1s;
        width: 22px;
    }
    /* slider */
    label:after {
        background-color: var(--white);
        border: 1px solid var(--black8-opaque);
        border-radius: 50%;
        content: '';
        display: block;
        height: 10px;
        left: 8px;
        position: absolute;
        top: 10px;
        transition: transform 0.2s;
        width: 10px;

    }

</style>