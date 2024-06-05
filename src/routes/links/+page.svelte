<script>
    export let data;
    import { reveal } from 'svelte-reveal';

</script>
<svelte:head>
    <title>Curated Links - Mufassir Ahmad Chowdhury</title>
    <meta name="title" content="Curated Links - Mufassir Ahmad Chowdhury" />
    <meta name="description" content="Curated list of interesting contents | Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
</svelte:head>
<main class="py-8">
        <section class="container mx-auto">
            <div class="gap-6 w-full">
                <h2 class="text-3xl text-center font-bold font-elmessiri">
                    Links
                </h2>
                <h1 class="text-xl font-bold text-center mb-4">Discover Something New</h1>
                <p class="text-lg text-center mb-8">A collection of interesting links curated just for you.</p>
                <div class="text-left lg:px-28 flex flex-col " >
                    {#each data.links as link, index}
                        <a href="/links/{link.slug}" use:reveal={{ transition: "slide" }}>
                            <div class="grid grid-cols-4 mb-4 p-4 card animation lg:h-32 " >
                                <div class="text-center font-semibold text-sm text-gray-900">
                                    {index + 1}. {link.date}
                                </div>
                                <div class="col-span-3 ">
                                    <div class="font-semibold">
                                        {link.title}
                                    </div>
                                    <div class="text-gray-900">
                                        {link.subtitle}
                                    </div>    
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    </main>
    
