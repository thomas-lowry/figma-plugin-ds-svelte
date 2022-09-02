<script>
    
    export let itemId;
    export let selected = false;
    export { className as class };

    let className = '';

</script>

<li {itemId} tabindex={itemId+1} class:highlight={selected} class={className} on:mouseenter on:click>
    <div class="icon" class:selected={selected}>
    </div>
    <div class="label"><slot /></div>
</li>

<style>

    li {
        align-items: center;
        color: var(--color-text-menu-text);
        cursor: default;
        display: flex;
        font-family: var(--font-stack);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-xsmall);
        line-height: var(--font-line-height);
        height: var(--size-small);
        padding: 0px var(--size-xsmall) 0px var(--size-xxsmall);
        user-select: none;
        outline: none;
        transition-property: background-color;
        transition-duration: 30ms;
    }

    .label {
        overflow-x: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
        pointer-events: none;
    }

    .highlight, li:hover, li:focus {
        background-color: var(--figma-color-bg-brand);
    }

    .icon {
        width: var(--size-xsmall);
        height: var(--size-xsmall);
        margin-right: var(--size-xxsmall);
        opacity: 0;
        pointer-events: none;
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
        background-repeat: no-repeat;
		background-position: center center;
    }
    .icon.selected {
        opacity: 1.0;
    }

    .blink, .blink:hover {
        background-color: transparent;
    }

</style>