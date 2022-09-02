<script>
    export let iconName = null; //pass svg data into this var by importing an svg in parent
    export let spin = false;
    export let iconText = null;
    export let color = '--figma-color-icon';
    export { className as class };

    let className = '';

</script>

<div 
    class:spin={spin}
    {iconText}
    {iconName} 
    class="icon-component {className}"
    style="color: var({color}); fill: var({color})"
    on:click>
    {#if iconText}
        {iconText}
    {:else}
        {@html iconName}
    {/if}
</div>

<style>

    .icon-component {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        width: var(--size-medium);
        height: var(--size-medium);
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        user-select: none;
    }

    .spin {
        animation: rotating 1.0s linear infinite;
    }

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    :global(.icon-component *) {
        fill: inherit;
        color: inherit;
    }

</style>