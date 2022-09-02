<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import ClickOutside from 'svelte-click-outside';
    import SelectItem from './../SelectItem/index.svelte';
    import SelectDivider from './../SelectDivider/index.svelte';
    import Icon from './../Icon/index.svelte';

    export let iconName = null;
    export let iconText = null;
    export let disabled = false;
    export let macOSBlink = false;
    export let menuItems = []; //pass data in via this prop to generate menu items
    export let placeholder = "Please make a selection.";
    export let value = null; //stores the current selection, note, the value will be an object from your array
    export let showGroupLabels = false; //default prop, true will show option group labels
    export { className as class };

    const dispatch = createEventDispatcher();
    let className = '';
    let groups = checkGroups();
    let menuWrapper, menuButton, menuList;
    $:menuItems, updateSelectedAndIds();

    //FUNCTIONS

    //assign id's to the input array
    onMount(async () => {
        updateSelectedAndIds();
    });

    // this function runs everytime the menuItems array os updated
    // it will auto assign ids and keep the value var updated
    function updateSelectedAndIds() {
        if (menuItems) {
            menuItems.forEach((item, index) => {
                //update id
                item['id'] = index;
                //update selection
                if (item.selected === true) {
                    value =  item;
                }
            });
        }
        //set placeholder
        if (menuItems.length <= 0) {
            placeholder = 'There are no items to select';
            disabled = true;
        } else {
            placeholder = 'Please make a selection';
            disabled = false;
        }
    }

    //determine if option groups are present
    function checkGroups() {
        let groupCount = 0;
        if (menuItems) {
            menuItems.forEach(item => {
                if (item.group != null) { groupCount++; }
            });
            if (groupCount === menuItems.length) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    //menu highlight function on the selected menu item
    function removeHighlight(event) {
        let items = Array.from(event.target.parentNode.children);
        items.forEach(item => {
            item.blur();
            item.classList.remove('highlight');
        });
    }

    //run for all menu click events
    //this opens/closes the menu
    function menuClick(event) {

        resetMenuProperties();

        if (!event.target) {
            menuList.classList.add('hidden');

        } else if (event.target.contains(menuButton)) {
            let topPos = 0;

            if (value) {
                //toggle menu
                menuList.classList.remove('hidden');

                let id = value.id;
                let selectedItem = menuList.querySelector('[itemId="'+id+'"]');
                selectedItem.focus(); //set focus to the currently selected item

                // calculate distance from top so that we can position the dropdown menu
                let parentTop = menuList.getBoundingClientRect().top;
                let itemTop = selectedItem.getBoundingClientRect().top;
                let topPos = (itemTop - parentTop) - 3;
                menuList.style.top = -Math.abs(topPos) + 'px';

                //update size and position based on plugin UI
                resizeAndPosition();

            } else {
                menuList.classList.remove('hidden');
                menuList.style.top = '0px';
                let firstItem = menuList.querySelector('[itemId="0"]');
                firstItem.focus();

                //update size and position based on plugin UI
                resizeAndPosition();

            }

        } else if (menuList.contains(event.target)) {
            //find selected item in array
            let itemId = parseInt(event.target.getAttribute('itemId')); 

            //remove current selection if there is one
            if (value) {
                menuItems[value.id].selected = false;
            }
            menuItems[itemId].selected = true; //select current item
            updateSelectedAndIds();
            dispatch('change', menuItems[itemId]);

            if (macOSBlink) {
                var x = 4;
                var interval = 70;
                
                //blink the background
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        event.target.classList.toggle('blink');
                    }, i * interval)
                }
                //delay closing the menu
                setTimeout(function () {
                    menuList.classList.add('hidden'); //hide the menu
                }, (interval * x) + 40)

            } else {
                menuList.classList.add('hidden'); //hide the menu
                menuButton.classList.remove('selected'); //remove selected state from button
            }
        }
    }

    // this function ensures that the select menu
    // fits inside the plugin viewport
    // if its too big, it will resize it and enable a scrollbar
    // if its off screen it will shift the position
    function resizeAndPosition() {

        //set the max height of the menu based on plugin/iframe window
        let maxMenuHeight = window.innerHeight - 16;
        let menuHeight = menuList.offsetHeight;
        let menuResized = false;

        if (menuHeight > maxMenuHeight) {
            menuList.style.height = maxMenuHeight + 'px';
            menuResized = true;
        }

        //lets adjust the position of the menu if its cut off from viewport
        let bounding = menuList.getBoundingClientRect();
        let parentBounding = menuButton.getBoundingClientRect();

        if (bounding.top < 0) {
            menuList.style.top = -Math.abs(parentBounding.top - 8) + 'px';
        }
        if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
            let minTop = -Math.abs(parentBounding.top - (window.innerHeight - menuHeight - 8));
            let newTop = -Math.abs(bounding.bottom - window.innerHeight + 16);
            if (menuResized) {
                menuList.style.top = -Math.abs(parentBounding.top - 8) + 'px'; 
            } else if (newTop > minTop) {
                menuList.style.top = minTop + 'px';
            } else {
                 menuList.style.top = newTop + 'px';
            }
            
        }

    }
    function resetMenuProperties() {
        menuList.style.height = 'auto';
        menuList.style.top = '0px';
    }

</script>

<ClickOutside on:clickoutside={menuClick}>
    <div 
        on:change
        on:focus
        on:blur
        bind:this={menuWrapper}
        {disabled}
        {placeholder}
        {showGroupLabels}
        {macOSBlink}
        class="wrapper {className}"
        >

        <button bind:this={menuButton} on:click={menuClick} disabled={disabled}>
            {#if iconName}
                <span class="icon"><Icon iconName={iconName} color="black3"/></span>
            {:else if iconText}
                <span class="icon"><Icon iconText={iconText} color="black3"/></span>
            {/if}

            {#if value}
                <span class="label">{value.label}</span>
            {:else}
                <span class="placeholder">{placeholder}</span>
            {/if}

            {#if !disabled}
                <span class="caret">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 5.35359L0.646454 2.35359L1.35356 1.64648L4.00001 4.29293L6.64645 1.64648L7.35356 2.35359L4.35356 5.35359L4.00001 5.70714L3.64645 5.35359Z" fill="black"/> </svg>
                </span>
            {/if}
        </button>

        <ul class="menu hidden" bind:this={menuList}>
        {#if menuItems && menuItems.length > 0}
            {#each menuItems as item, i}
                {#if i === 0}
                    {#if item.group && showGroupLabels}
                        <SelectDivider label>{item.group}</SelectDivider>
                    {/if}
                {:else if i > 0 && item.group && menuItems[i - 1].group != item.group}
                    {#if showGroupLabels}
                        <SelectDivider />
                        <SelectDivider label>{item.group}</SelectDivider>
                    {:else}
                        <SelectDivider />
                    {/if}
                {/if}
                <SelectItem on:click={menuClick} on:mouseenter={removeHighlight} itemId={item.id} bind:selected={item.selected}>{item.label}</SelectItem>
            {/each}
        {/if}
        </ul>
    </div>
</ClickOutside>


<style>

    .wrapper {
        position: relative;
    }

    button {
        display: flex;
        align-items: center;
        border: 1px solid transparent;
        height: 30px;
        width: 100%;
        margin: 1px 0 1px 0;
        padding: 4px var(--size-xxsmall) 0px var(--size-xxsmall);   
        overflow-y: hidden;
        border-radius: var(--border-radius-small);
        background-color: var(--white);
    }
    button:hover, button:active {
        border-color: var(--black1);
    }
    button:hover .placeholder {
        color: var(--black8);
    }
    button:hover .caret svg path, button:focus .caret svg path {
        fill: var(--black8);
    }
    button:hover .caret, button:focus .caret {
        margin-left: auto;
    }
    button:focus {
        border: 1px solid var(--blue);
        outline: 1px solid var(--blue);
        outline-offset: -2px;
        padding-left: calc(var(--size-xxsmall) + 1px);
    }
    button:focus .placeholder {
        color: var(--black8);
    }
    button:disabled .label {
        color: var(--black3);
    }
    button:disabled:hover {
        justify-content: flex-start;
        border-color: transparent;
    }
    button:disabled:hover .placeholder {
        color: var(--black3);
    }
    button:disabled:hover .caret svg path {
        fill: var(--black3);
    }
    button * {
        pointer-events: none;
    }

    .label, .placeholder {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var( --font-letter-spacing-neg-xsmall);
        line-height: var(--line-height);
        color: var(--figma-color-text);
        margin-right: 6px;
        margin-top: -3px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }

    .placeholder {
        color: var(--figma-color-text-tertiary);
    }

    .caret {
        display: block;
        margin-top: -1px;
    }

    .caret svg path {
        fill: var(--figma-color-icon-tertiary);
    }

    .icon {
        margin-left: -8px;
        margin-top: -2px;
        margin-right: 0;
    }

    .menu {
        position: absolute;
        top:32px;
        left:0;
        width: 100%;
        background-color: var(--color-bg-menu);
        box-shadow: var(--shadow-hud);
        padding: var(--size-xxsmall) 0 var(--size-xxsmall) 0;
        border-radius: var(--border-radius-small);
        margin: 0;
        z-index: 50;
        overflow-x: overlay;
        overflow-y: auto;
    }
    .menu::-webkit-scrollbar{
        width:12px;
        background-color:transparent;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
        background-repeat:repeat;
        background-size:100% auto
    }
    .menu::-webkit-scrollbar-track{
        border:solid 3px transparent;
        -webkit-box-shadow:inset 0 0 10px 10px transparent;
        box-shadow:inset 0 0 10px 10px transparent;
    }
    .menu::-webkit-scrollbar-thumb{
        border:solid 3px transparent;
        border-radius:6px;
        -webkit-box-shadow:inset 0 0 10px 10px rgba(255,255,255,.4);
        box-shadow:inset 0 0 10px 10px rgba(255,255,255,.4);
    }
        

</style>