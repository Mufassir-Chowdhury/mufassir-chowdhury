<script>
    import { onMount } from 'svelte';
    import WhiteProjects from '$lib/WhiteProjects.svelte';
    import Stack from '$lib/Stack.svelte';
    import WhiteInterests from '$lib/WhiteInterests.svelte';
    import WhiteSkills from '$lib/WhiteSkills.svelte';
    import { reveal } from 'svelte-reveal';

    // onMount(() => {
    //     const blob = document.getElementById("blob");

    //     window.onpointermove = event => { 
    //     const { pageX, pageY } = event;

    //     const maxX = document.documentElement.scrollWidth - blob.offsetWidth + 100;
    //     const maxY = document.documentElement.scrollHeight - blob.offsetHeight + 100;

    //     const x = Math.min(pageX, maxX);
    //     const y = Math.min(pageY, maxY);

    //     blob.animate({
    //         left: `${x}px`,
    //         top: `${y}px`
    //     }, { duration: 3000, fill: "forwards" });
    //     };
    // });
    

</script>
<svelte:head>
    <meta property="og:type" content="website" />
		<meta property="og:url" content="https://mufassir.net/" />
		<meta property="og:title" content="Mufassir Ahmad Chowdhury" />
		<meta property="og:description" content="Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
		<meta property="og:image" content="%sveltekit.assets%/logo.webp" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://mufassir.net/" />
		<meta property="twitter:title" content="Mufassir Ahmad Chowdhury" />
		<meta property="twitter:description" content="Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
		<meta property="twitter:image" content="%sveltekit.assets%/logo.webp" />
    <title>Mufassir Ahmad Chowdhury</title>
    <meta name="title" content="Mufassir Ahmad Chowdhury" />
    <meta name="description" content="Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
  </svelte:head>
    
    <!-- <div id="blob" class="hidden md:block"></div> -->

    <!-- <div id="background"></div> -->

    <main class="w-full h-full z-10 absolute">    
        
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
                <div class="mb-8 reveal">
                    <h2 class="text-3xl font-bold font-elmessiri my-8">
                        Research
                    </h2>
                    <div class="text-left lg:px-28 flex flex-col " >
                        <a href="https://aclanthology.org/2024.bucc-1.8/" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="grid grid-cols-4 mb-4 p-4 card animation lg:h-32 " >
                                <div class="text-center font-semibold text-sm text-gray-900">
                                    1. 2023
                                </div>
                                <div class="col-span-3 ">
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
                        <div class="p-4 card lg:h-16" use:reveal={{ transition: "slide" }}>
                            1. Clinical Natural Language Processing
                        </div>
                        <div class="p-4 card lg:h-16" use:reveal={{ transition: "slide" }}>
                            2. Natural Language Processing for Low Resource Languages
                        </div>
                
                    </div>
                </div>
                <div class="py-14"><WhiteProjects /></div>
                <div class="py-14"><Stack /></div>
                

                <!-- Experiences -->



                <div class="mb-8 reveal">
                    <h2 class="text-3xl font-bold font-elmessiri my-8" use:reveal={{ transition: "slide" }}>
                        Experiences
                    </h2>
                    <div class="text-left lg:px-28 flex flex-col " >
                        <!-- <div class="mb-4 p-4 card lg:h-48" use:reveal={{ transition: "slide" }}>
                            [REDACTED :) Check again later!]
                        </div> -->
                        <a href=" https://www.youtube.com/@Itihashjaan " target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="grid grid-cols-4 mb-4 p-4 card lg:h-32 border-animation">
                                <div class="text-center font-semibold text-sm text-gray-900">
                                    1. 2023-2024
                                </div>
                                <div class="col-span-3">
                                    <div class="font-semibold">
                                        Host at Itihashjaan (ইতিহাসযান) Podcast
                                    </div>
                                    <div class="text-gray-900">
                                        • Responsibilities include hosting, editing, and managing the podcast.
                                    </div>    
                                </div>
                            </div>
                        </a>
                        <div class="grid grid-cols-4 mb-4 p-4 card lg:h-48" use:reveal={{ transition: "slide" }}>
                            <div class="text-center font-semibold text-sm text-gray-900">
                                2. 2020-2024
                            </div>
                            <div class="col-span-3">
                                <div class="font-semibold">
                                    Assistant Director at KishorKantha Readers Forum, Sylhet City
                                </div>
                                <div class="text-gray-900">
                                    • Experiences include directing and managing the forum and organizing events. <br/>
                                    • Successfully organized KishorKantha Medhabritti Exam from 2020-2024 with an average of 4000 participants. <br/>
                                    • Other events include olympiads, regular sports and cultural events.
                                </div>    
                            </div>
                        </div>
                        <a href=" https://www.youtube.com/@রেনেসাঁ-ঢ৭র " target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="grid grid-cols-4 mb-4 p-4 card lg:h-32 border-animation">
                                <div class="text-center font-semibold text-sm text-gray-900">
                                    3. 2024
                                </div>
                                <div class="col-span-3">
                                    <div class="font-semibold">
                                        Host and Manager at Renaissance (রেনেসাঁ) Podcast
                                    </div>
                                    <div class="text-gray-900">
                                        • Responsibilities include hosting, editing, and managing the podcast. <br/>
                                        • Social media management.
                                    </div>    
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="py-14 reveal"><WhiteInterests /></div>
                <div class="py-14 reveal"><WhiteSkills /></div>

                <!-- Social Media -->



                <div class="mb-8 reveal">
                    <h2 class="text-3xl font-bold font-elmessiri my-8" use:reveal={{ transition: "slide" }}>
                        Social Media
                    </h2>
                    <div class="text-left lg:px-28 grid grid-cols-3 md:grid-cols-6" >
                        <a href=" https://www.facebook.com/mufassir.usama/" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16 md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/facebook.webp" alt="facebook" class="inline-block">
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/Mufassir-Chowdhury" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16 md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/github.webp" alt="github" class="inline-block">
                                </div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/mufassir-chowdhury/" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16  md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/linkedin.webp" alt="linkedin" class="inline-block">
                                </div>
                            </div>
                        </a>
                        <a href=" https://scholar.google.com/citations?hl=en&user=iAcSk2oAAAAJ" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16 md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/google_scholar.webp" alt="google_scholar" class="inline-block">
                                </div>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@this_is_mac" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16 md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/youtube.webp" alt="youtube" class="inline-block">
                                </div>
                            </div>
                        </a>
                        <a href="mailto:contact@mufassir.net" target="_blank" use:reveal={{ transition: "slide" }}>
                            <div class="mb-4 p-4 card h-16 md:h-32 flex justify-center">
                                <div class="flex justify-center items-center p-1 shadow-2xl sm:w-24 sm:h-24">
                                    <img src="social/gmail.webp" alt="gmail" class="inline-block">
                                </div>
                            </div>
                        </a>
                
                    </div>
                </div>
            </div>
        </div>
    </main>

  
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
        background: linear-gradient(to right, rgb(255, 236, 158), rgb(237, 148, 85));
        animation: rotate 20s infinite;
        z-index: -20;
        opacity: 0.5;
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