<script>
    import { onMount } from 'svelte';
    import WhiteProjects from '$lib/WhiteProjects.svelte';
    import Stack from '$lib/Stack.svelte';
    import WhiteInterests from '$lib/WhiteInterests.svelte';
    import WhiteSkills from '$lib/WhiteSkills.svelte';
    
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
    
    <div id="blob" class="hidden md:block"></div>
    <div id="blur" class="hidden md:block"></div>
    <!-- <div id="background"></div> -->

    <main class="w-full h-full my-32 z-10 absolute">    
        <div class="fixed w-full z-20 top-0 lg:p-12 py-8 text-center text-black backdrop-blur-lg">
            <h1 class="sm:text-3xl text-lg font-bold font-elmessiri ">
                Mufassir Ahmad Chowdhury
            </h1>
            
        </div>
        <div class="w-full h-full px-12 lg:px-40 text-center text-black">
            <h2 class="xl font-semibold">
                MAC in short.
            </h2>
            <p class="my-8">
                Computer Science and Engineering student at <a href="https://www.sust.edu/" class="underline text-emerald-500 relative inline-block highlight-animation translate-y-1">
                    <span class="relative overflow-hidden inline-block">Shahjalal University of Science and Technology</span>
                  </a>.
            </p>


            <!-- Research -->



            <div class="divide-y-2 ">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold font-elmessiri my-8">
                        Research
                    </h2>
                    <div class="text-left lg:px-28 flex flex-col " >
                        <a href="https://aclanthology.org/2024.bucc-1.8/" target="_blank">
                            <div class="grid grid-cols-4 mb-4 lg:p-4 card lg:h-32">
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
                        </a>
                        <div class="font-semibold text-center p-8">Ongoing Research Topics</div>
                        <div class="lg:p-4 card lg:h-16">
                            1. Clinical Natural Language Processing
                        </div>
                        <div class="lg:p-4 card lg:h-16">
                            2. Natural Language Processing for Low Resource Languages
                        </div>
                
                    </div>
                </div>
                <div class="py-14"><WhiteProjects /></div>
                <div class="py-14"><Stack /></div>
                <div class="py-14"><WhiteInterests /></div>
                <div class="py-14"><WhiteSkills /></div>
            </div>
        </div>
    </main>

</body>
  
<style lang="postcss">
    :hover.card {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
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
        background: linear-gradient(to right, rgb(255, 236, 158), rgb(237, 148, 85));
        animation: rotate 20s infinite;
        z-index: 1;
        opacity: 0.5;
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
        backdrop-filter: blur(12vmax) brightness(1.1);
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

    .highlight-animation {
  position: relative;
}

.highlight-animation span {
  position: relative;
}

.highlight-animation span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  width: 100%;
  height: 50%;
  --tw-bg-opacity: .5;
    background-color: rgb(167 243 208 / var(--tw-bg-opacity));
  /* background-color: rgba(254, 234, 138, 0.5); Light yellow color with 50% opacity */
  transform: translateY(-50%);
  transition: left 0.5s ease-out;
  z-index: -1;
}

.highlight-animation:hover span::before {
  left: 0;
  transition: left 0.5s ease-in;
}
</style>