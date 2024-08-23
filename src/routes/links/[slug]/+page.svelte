<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    export let data;
    let item = null;
    onMount(() => {
        item = data.links.find(link => link.slug === $page.params.slug);
    });
</script>

<svelte:head>
    {#if item}
        <meta property="og:type" content="website" />
		<meta property="og:url" content="https://mufassir.net/links/" />
		<meta property="og:title" content="{item.title} | Curated Links - Mufassir Ahmad Chowdhury" />
		<meta property="og:description" content="{item.subtitle} | Curated list of interesting contents | Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
		<meta property="og:image" content="%sveltekit.assets%/logo.webp" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://mufassir.net/links/" />
		<meta property="twitter:title" content="{item.title} | Curated Links - Mufassir Ahmad Chowdhury" />
		<meta property="twitter:description" content="{item.subtitle} | Curated list of interesting contents | Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
		<meta property="twitter:image" content="%sveltekit.assets%/logo.webp" />
        <title>{item.title} | Mufassir's Links</title>
        <meta name="title" content="{item.title} | Curated Links - Mufassir Ahmad Chowdhury" />
        <meta name="description" content="{item.subtitle} | Curated list of interesting contents | Mufassir Ahmad Chowdhury | Computer Science | Shahjalal University of Science and Technology" />
    {/if}
</svelte:head>
<a href="/links">
    <div class="p-8 text-lg font-elmessiri">
        ← All links
    </div>
</a>
<main class="w-full flex justify-center mb-8">
    {#if item}
        <article class="p-4 w-full max-w-xl border-2 border-dashed border-amber-400 min-h-96 rounded-xl">
            <h1 class="text-xl font-elmessiri font-semibold text-center my-2">{item.title}</h1>
            <p class="text-sm text-center text-gray-900 my-4">{item.date}</p>
            <div class="w-full flex flex-col gap-4">
                {#each item.links as link}
                    <div class="w-full">
                        {#if link.description}
                            <h2 class="">{link.description}</h2>
                        {/if}
                        <div class="w-full flex justify-center mt-2">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" class="bg-amber-400 p-2 rounded-md shadow-xl">{link.title}</a>
                        </div>
                    </div>
                {/each}

            </div>
            <p class="text-lg text-justify my-4 border-t-2 mt-8">{@html item.content}</p>
        </article>
    {/if}
</main>