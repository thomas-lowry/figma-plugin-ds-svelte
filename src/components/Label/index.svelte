<script>

    let className = '';

</script>

<div>
    <slot></slot>
</div>

<style>

    div {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var( --font-letter-spacing-pos-small);
        line-height: var(--line-height);
        color: var(--black3);
        height: var(--size-medium);
        width: 100%;
        display: flex;
        align-items: center;
        cursor: default;
        user-select: none;
    }

</style>