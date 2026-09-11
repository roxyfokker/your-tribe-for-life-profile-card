<script>

</script>

<!--https://svelte.dev/docs/svelte/@render-->
<div class="container">
    <p></p>
</div>

<style>
/*https://www.youtube.com/watch?v=w1nhwUGsG6M*/
    .container{
        display: inline-block;
        .text{
            border-right: solid 0.1rem;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 2s steps(18),
            cursor .4s step-end infinite alternate;
        }
    }
    @keyframes cursor{
        50% {border-color: transparent;}
    }
    @keyframes typing{
        from {width: 0}
    }
</style>