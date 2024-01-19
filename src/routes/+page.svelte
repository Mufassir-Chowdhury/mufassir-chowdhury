<script>
    import { onMount } from 'svelte';
    import Title from '../lib/Title.svelte';
    import Research from '../lib/Research.svelte';
    import Projects from '../lib/Projects.svelte';
    import Stack from '../lib/Stack.svelte';
    import Interests from '../lib/Interests.svelte';
    import Skills from '../lib/Skills.svelte';
    
    onMount(() => {
        const blob = document.getElementById("blob");

        window.onpointermove = event => { 
        const { pageX, pageY } = event;

        const maxX = document.documentElement.scrollWidth - blob.offsetWidth + 100;
        const maxY = document.documentElement.scrollHeight - blob.offsetHeight + 100;

        const x = Math.min(pageX, maxX);
        const y = Math.min(pageY, maxY);

        blob.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 3000, fill: "forwards" });
        };
    });
    

</script>
<body class="h-full m-0 bg-[#0b142c]">
    
    <div id="blob"></div>
    <div id="blur"></div>
    <div id="background"></div>

    <main class="w-full h-full my-32 z-10 absolute">    
        <div class="fixed w-full z-20 top-0 p-12 text-center text-white backdrop-blur-lg">
            <Title title="Mufassir A. Chowdhury" />
        </div>
        <div class="w-full h-full px-40 text-center text-white">
            <h3 class="xl font-semibold">
                MAC in short.
            </h3>
            <p class="my-8">
                Computer Science and Engineering student at <a href="https://www.sust.edu/" class="underline text-emerald-300">Shahjalal University of Science and Technology</a>.
            </p>
            <div class="my-48"><Research /></div>
            <div class="my-48"><Projects /></div>
            <div class="my-48"><Stack /></div>
            <div class="my-48"><Interests /></div>
            <div class="my-48"><Skills /></div>
        </div>
    </main>

</body>
  
<style lang="postcss">
    @keyframes rotate {
    from {
        rotate: 0deg;
    }
    
    50% {
        scale: 1 1.5;
    }
    
    to {
        rotate: 360deg;
    }
    }

    #blob {
        background-color: white;
        height: 34vmax;
        aspect-ratio: 1;
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        border-radius: 50%;
        background: linear-gradient(to right, aquamarine, mediumpurple);
        animation: rotate 20s infinite;
        z-index: 1;
        opacity: 0.8;
    }
    #blur {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        backdrop-filter: blur(12vmax) brightness(0.6);
    }
    body {
        background-color: #0b142c;
    }
    
    #background {
    background-image: url("https://images.unsplash.com/photo-1565896311009-382b9e813b19?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987");
    background-position: center;
    background-size: cover;
    filter: blur(1.25em);
    height: 100%;
    left: 0px;
    opacity: 0.15;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
    }
</style>