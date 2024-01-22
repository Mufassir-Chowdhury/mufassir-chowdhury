<script>
    import FadingCards from '../lib/FadingCards.svelte';
    import Icon from './Icon.svelte';

    const languages = [
        "c",
        "c++",
        "dart",
        "javascript",
        "python",
        "java",
        "sql",
        "surrealdb",
        "html",
    ];
    const frameworks = [
        "svelte",
        "tailwindcss",
        "git",
        "github",
        "vuejs",
        "react",
        "cloudflare",
        "firebase",
        "flutter",
    ];
</script>

<div>
    <h2 class="text-3xl font-bold font-dm my-8">
        My Favourite Stack
    </h2>
    <FadingCards />
    <div class="my-20">
        Other technologies that I have used in the past:<br/>
        
        <h3 class="text-xl font-bold mt-4">Languages:</h3>
        <div class="flex justify-center gap-6 my-6">
            {#each languages as language}
                <Icon logo={language} />
            {/each}

        </div>
        <h3 class="text-xl font-bold">Frameworks and Tools:</h3>
        <div class="flex justify-center gap-6 my-6">
            {#each frameworks as framework}
                <Icon logo={framework} />
            {/each}
        </div>

    </div>
</div>