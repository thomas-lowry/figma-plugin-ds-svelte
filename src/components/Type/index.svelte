<script>
    import { onMount } from 'svelte';

    export let size = 'xsmall';
    export let weight = 'normal';
    export let inverse = false; //this prop uses different letterspacing values for inversed type (light on dark)
    export let color = 'black8';
    export let inline = false;
    
    let className = '';

    onMount(async () => {
        if (color = 'black8' && inverse) {
            color = 'white';
        }
    });

</script>

<div class="type {className} {size} {weight}" class:inverse={inverse} class:inline={inline} style="color: var(--{color})">
    <slot/>
</div>

<style>

    .type {
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        line-height: var(--font-line-height);
        letter-spacing: var(--font-letter-spacing-pos-small);
    }

    /* sizes */
    .small {
        font-size: var(--font-size-small);
        letter-spacing: var(--font-letter-spacing-pos-medium);
    }
    .large {
        font-size: var(--font-size-large);
        line-height: var(--font-line-height-large);
        letter-spacing: var(--font-letter-spacing-pos-large);
    }
    .xlarge {
        font-size: var(--font-size-xlarge);
        line-height: var(--font-line-height-large);
        letter-spacing: var(--font-letter-spacing-pos-xlarge);
    }

    /* weights */
    .medium {
        font-weight: var(--font-weight-medium);
    }
    .bold {
        font-weight: var(--font-weight-bold);
    }

    /* letter spacing adjustments based pos/neg application */
    .inverse {
        letter-spacing: var(--font-letter-spacing-neg-small);
    }
    .inverse.small {
        letter-spacing: var(--font-letter-spacing-neg-medium);
    }
    .inverse.large {
        letter-spacing: var(--font-letter-spacing-neg-large);
    }
    .inverse.xlarge {
        letter-spacing: var(--font-letter-spacing-neg-xlarge);
    }

    .inline {
        display: inline-block;
    }

</style>