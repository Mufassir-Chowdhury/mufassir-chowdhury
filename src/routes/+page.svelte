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
    <main class="w-full h-full z-10 absolute">    
        <div class="w-screen h-screen p-24 text-center text-white">
            <Title title="Mufassir A. Chowdhury" />
            <h3 class="xl font-semibold">
                MAC in short.
            </h3>
            <p class="my-8">
                Computer Science and Engineering student at <a href="https://www.sust.edu/" class="underline text-emerald-300">Shahjalal University of Science and Technology</a>.
            </p>
            <Research />
            <Projects />
            <Stack />
            <Interests />
            <Skills />
            <h2 class="text-3xl font-bold underline text-center my-8">
                Which one suits better?
            </h2>
            <div class="w-full flex justify-around">
                <div class="relative z-20">
                    <img src="DP.png" alt="dp" class="relative z-20 h-96">
                    <div class="absolute top-0 left-0 z-10">
                        <img src="DP.png" alt="dp" class="h-96 " style="filter: brightness(0) invert(0); transform: scale(1.02);">
                    </div>
                </div>
                <div class="relative z-20">
                    <img src="Mufassir.png" alt="dp" class="relative z-20 h-96">
                    <div class="absolute top-0 left-0 z-10">
                        <img src="Mufassir.png" alt="dp" class="h-96 " style="filter: brightness(0) invert(1); transform: scale(1.02);">
                    </div>
                </div>        
            </div>
            
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
</style>