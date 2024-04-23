<script>
    import { onMount } from 'svelte';
    import Research from '$lib/Research.svelte';
    import Projects from '$lib/Projects.svelte';
    import Stack from '$lib/Stack.svelte';
    import Interests from '$lib/Interests.svelte';
    import Skills from '$lib/Skills.svelte';
    
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
<body class="h-full m-0 bg-[#F9EFDF]">
    
    <div id="blob"></div>
    <div id="blur"></div>
    <div id="background"></div>

    <main class="w-full h-full my-32 z-10 absolute">    
        <div class="fixed w-full z-20 top-0 lg:p-12 py-8 text-center text-black backdrop-blur-lg">
            <h1 class="sm:text-3xl text-lg font-bold font-calligraffitti ">
                Mufassir Ahmad Chowdhury
            </h1>
            <h1 class="sm:text-3xl text-lg font-bold font-berkshire ">
                Mufassir Ahmad Chowdhury
            </h1>
            <h1 class="sm:text-3xl text-lg font-bold font-aladin ">
                Mufassir Ahmad Chowdhury
            </h1>
            <h1 class="sm:text-3xl text-lg font-bold font-marmelad ">
                Mufassir Ahmad Chowdhury
            </h1>
        </div>
        <div class="w-full h-full px-12 lg:px-40 text-center text-black">
            <h2 class="xl font-semibold">
                MAC in short.
            </h2>
            <p class="my-8">
                Computer Science and Engineering student at <a href="https://www.sust.edu/" class="underline text-emerald-300">Shahjalal University of Science and Technology</a>.
            </p>



            <!-- Research -->



            <div class="divide-y-2">
                <div>
                    <h2 class="text-3xl font-bold font-dm my-8">
                        Research
                    </h2>
                    <div class="text-left lg:px-28 flex flex-col " >
                        <div class="grid grid-cols-4 mb-4 lg:p-4 hover:backdrop-blur-3xl rounded-lg hover:backdrop-brightness-150 lg:h-32">
                            <div class="text-center font-semibold text-sm text-gray-900">
                                1. 2023
                            </div>
                            <div class="col-span-3">
                                <div class="font-semibold">
                                    BnPC: A Gold Standard Corpus for Paraphrase Detection in Bangla, and its Evaluation
                                </div>
                                <div class="text-gray-900">
                                    Accepted at 17th BUCC (Building and Using Comparable Corpora) workshop at LREC-COLING 2024
                                </div>    
                            </div>
                        </div>
                        <div class="grid grid-cols-4 lg:p-4 hover:backdrop-blur-3xl rounded-lg hover:backdrop-brightness-150 lg:h-32">
                            <div class="text-center font-semibold text-sm text-gray-900">
                                2. 2024
                            </div>
                            <div class="col-span-3">
                                <div class="font-semibold">
                                    Advancing Conversational Search: User Simulation, Open-Ended Retrieval, and Domain Discovery (Literature Review)
                                </div>
                                <div class="text-gray-900">
                                    Ongoing
                                </div>    
                            </div>
                        </div>
                
                    </div>
                </div>
                <div class="py-28"><Projects /></div>
                <div class="py-28"><Stack /></div>
                <div class="py-28"><Interests /></div>
                <div class="py-28"><Skills /></div>
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
        backdrop-filter: blur(12vmax) brightness(0.8);
    }
    body {
        background-color: #F9EFDF;
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