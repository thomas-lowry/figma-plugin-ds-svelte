<script>
    export let iconName = null; //pass svg data into this var by importing an svg in parent
    export let spin = false;
    export let iconText = null;
    export let color = 'black8';
    export let size = 32;

    export { className as class };

    let className = '';
</script>

<div
    class:spin
    class="icon-component {className}"
    style="color: var(--{color}); fill: var(--{color}); width: {size}px; height: {size}px"
    on:click
>
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
        animation: rotating 1s linear infinite;
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
