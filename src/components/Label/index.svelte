<script>

    export { className as class };
    let className = '';

</script>

<div class="{className}">
    <slot></slot>
</div>

<style>

    div {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var( --font-letter-spacing-pos-xsmall);
        line-height: var(--line-height);
        color: var(--figma-color-text-secondary);
        height: var(--size-medium);
        width: 100%;
        display: flex;
        align-items: center;
        cursor: default;
        user-select: none;
        padding: 0 calc(var(--size-xxsmall) / 2) 0 var(--size-xxsmall);
    }

</style>