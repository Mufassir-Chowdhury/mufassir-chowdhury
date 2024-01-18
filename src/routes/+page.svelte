<script>
    import { onMount } from 'svelte';
    import FadingCards from '../lib/FadingCards.svelte';
    
    let h1;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const title = 'Mufassir A. Chowdhury';
    onMount(() => {
        const blob = document.getElementById("blob");

        window.onpointermove = event => { 
        const { pageX, pageY } = event;

        blob.animate({
            left: `${pageX}px`,
            top: `${pageY}px`
        }, { duration: 3000, fill: "forwards" });
        };
        setInterval(() => {
            let iterations = 0;
            const interval = setInterval(() => {
                h1.innerText = h1.innerText.split('').map((letter, index) => {
                    if (index < iterations){
                        return title[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                }).join('');
                if (iterations >= title.length) {
                    clearInterval(interval);
                };
                iterations += 1/3;
            }, 30);
        }, 10000);
    });
    

</script>
<body>
    
    <div id="blob"></div>
    <div id="blur"></div>
    <main>

    
        <div class="w-screen h-screen p-24 text-center text-white">
            <h1 bind:this={h1}  class="text-3xl font-bold font-major ">
                Mufassir A. Chowdhury
            </h1>
            <h3 class="xl font-semibold">
                MAC in short.
            </h3>
            <p class="my-8">
                Computer Science and Engineering student at <a href="https://www.sust.edu/" class="underline text-emerald-300">Shahjalal University of Science and Technology</a>.
            </p>
            <div>
                <h2 class="text-3xl font-bold  my-8">
                    Research
                </h2>
                <div>
                    1.	BnPC: A Gold Standard Corpus for Paraphrase Detection in Bangla, and its Evaluation
                        •	Under Review
                </div>
                <div>
                    2.	Advancing Conversational Search: User Simulation, Open-Ended Retrieval, and Domain Discovery (Literature Review)
                        •	Ongoing
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold  my-8">
                    Projects
                </h2>
                <div>
                    •	SUST APP – all in one platform for SUST students.
                    •	Desktop stack – Java Swing
                    •	Mobile stack – Flutter, SurrealDB
                    •	Web stack – SvelteKit, SurrealDB, TailwindCSS
                </div>
                <div>
                    •	Blood Donor Manager (Client)
                    •	Web stack – VueJS, TailwindCSS, Firebase
                </div>
                <div>
                    •	SUST CSE Carnival (Client)
                    •	Web stack – ReactJS, TailwindCSS
                </div>
                <div>
                    •	NMOSS (Website for Cyber Security Research Club)
                    •	Web stack – TailwindCSS, Svelte
                </div>
                <div>
                    •	AI_Support (Discord bot for SUST CSE server)
                    •	Python
                </div>
                <div>
                    •	CSP Justice (Website for a research group with blogging capabilities for users)
                    •	Web stack – Sveltekit, TailwindCSS, Firebase
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold  my-8">
                    My Favourite Stack
                </h2>
                <FadingCards />
                <div>
                    SvelteKit
                </div>
                <div>
                    TailwindCSS
                </div>
                <div>
                    SurrealDB
                </div>
                <div>
                    Other technologies that I have used in the past:
                    Languages:
                        •	C
                        •	C++
                        •	Dart
                        •	JavaScript 
                        •	Python
                        •	Java
                        •	SQL
                        •	SurrealDB
                        •	HTML
        
                    Frameworks and Tools:
                        •	SvelteKit
                        •	TailwindCSS
                        •	Git/Github
                        •	VueJS
                        •	ReactJS
                        •	Flutter
                        •	Firebase
                        •	Java Swing
        
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold  my-8">
                    Interests
                </h2>
                <div>
                    Podcasts
                </div>
                <div>
                    Books
                </div>
                <div>
                    Philosophy
                </div>
                <div>
                    Economics
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold  my-8">
                    Skills
                </h2>
                <div>
                    Basic Video Editing
                </div>
                <div>
                    Microsoft Office Suite
                </div>
            </div>
            <h2 class="text-3xl font-bold underline text-center my-8">
                Which one suits better?
            </h2>
            <div class="w-full flex justify-around">
                <div >
                    <img src="DP.png" alt="dp" class="h-96">
                </div>
                <div>
                    <img src="Mufassir.png" alt="Mufassir" class="h-96">
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
        background-color: rgb(11, 20, 44);
        height: 100%;
        margin: 0rem;
    }
    main {
        height: 100%;
        width: 100%;
        position: absolute;

        z-index: 10;
    }
</style>