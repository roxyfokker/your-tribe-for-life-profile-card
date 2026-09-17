<script>
    const themes = ['green', 'blue', 'red', 'yellow', 'orange'];
    let activeTheme = $state('green')

    function setTheme(themeName) {
        activeTheme = themeName;
    }
    
    $effect(() => {
        document.documentElement.setAttribute("data-theme", activeTheme);
    })
</script>
<!--https://fossheim.io/writing/posts/accessible-theme-picker-html-css-js/-->

<section class="theme-switcher">
    {#each themes as themeName}
        <button 
            data-theme={themeName} 
            aria-pressed={activeTheme === themeName}
            onclick={() => setTheme(themeName)}>
            {themeName}
        </button>
    {/each}
</section>


<style>
    section{
        display: flex;
        justify-content: center;
        position: absolute;
        top: var(--spacing-lg);
    }
    button{
        font-family: var(--font-primary);
        z-index: 999999;
        width: 5rem;
        font-size: var(--font-size-sm);
        color: var(--color-brand-mid);
        cursor: pointer;
        padding: var(--spacing-xs);
        border: none;
        border: solid transparent;
        &:hover{
            border: solid 0.01rem var(--color-brand-mid);
        }
        &:active{
           font-weight: bold;
           border: solid 0.02rem var(--color-brand-mid);
        }
    }
    button[aria-pressed="true"]{
        background-color: var(--color-brand-darkest);
    }
</style>