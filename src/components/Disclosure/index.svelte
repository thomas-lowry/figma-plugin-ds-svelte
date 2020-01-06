<script>

    import { createEventDispatcher, setContext, onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import DisclosureItem, { disclosure } from "./../DisclosureItem/index.svelte";
    
    const dispatch = createEventDispatcher();
    const selected = writable(null);
    let className = '';
    let disclosureWrapper;

    const clickHandler = function(itemId) {
        let currentVal = getValue(selected);
        if (currentVal != itemId) {
            selected.set(itemId);
            dispatch("change", itemId);
        } else {
            selected.set(null);
            dispatch("change", null);
        }
    };

    setContext(disclosure, { clickHandler, selected});

    function getValue(store) {
        let $val;
        store.subscribe($ => $val = $)()
        return $val
    }

</script>

<ul class={className} bind:this={disclosureWrapper}>
    <slot></slot>
</ul>

<style>

    ul {
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

</style>