<script>
    let { text, class: className } = $props();
</script>

<p class="text {className}" style="--typewriterCharacters: {text.length}; ">
    {text}
</p>

<style>
    /*typewriter effect*/
    .text{
        position: relative;
        width: max-content;
        --typewriterSpeed: 2s;
    }
    .text::before,
    .text::after{
        content: '';
        position: absolute;
        inset: 0;
    }
    .text::before{
        background-color: var(--background);
        animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards; 
    }
    .text::after{
        width: 0.125em;
        background-color: var(--color-brand-mid);
        animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards,
        blink 750ms steps(var(--typewriterCharacters)) calc(var(--typewriterSpeed) + 1s) forwards;
    }

    @keyframes typewriter{
        to{ 
            left: 100%;
        }
    }
    @keyframes blink{
        to{
           background: transparent;
        }
    }

</style>