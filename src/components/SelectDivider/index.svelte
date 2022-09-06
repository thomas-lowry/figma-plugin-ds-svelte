<script>
    export let label = false;
</script>

{#if label === true}
    <li class="label"><slot /></li>
{:else}
    <li class="divider" />
{/if}

<style>
    .label {
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-small);
        line-height: var(--line-height);
        display: flex;
        align-items: center;
        height: var(--size-small);
        margin-top: var(--size-xxsmall);
        padding: 0 var(--size-xxsmall) 0 var(--size-medium);
        color: var(--color-text-menu-secondary);
    }
    .label:first-child {
        border-top: none;
        margin-top: 0;
    }

    .divider {
        background-color: var(--color-border-menu);
        display: block;
        height: 1px;
        margin: 8px 0 7px 0;
    }
</style>
