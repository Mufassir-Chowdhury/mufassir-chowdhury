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
        "vuejs",
        "react",
        "flutter",
    ];
    const tools = [
        "git",
        "github",
        "cloudflare",
        "firebase",
        "docker"
    ]
    const learning = [
        "godot",
    ]
</script>

<div>
    <h2 class="text-3xl font-bold font-elmessiri my-8">
        My Favourite Stack
    </h2>
    <FadingCards />
    <div class="my-20">
        Other technologies that I have used in the past (but not necessarily expert in):<br/>
        
        <h3 class="text-xl font-bold mt-4">Languages:</h3>
        <div class="grid grid-cols-5 lg:flex justify-center gap-6 my-6">
            {#each languages as language}
                <Icon logo={language} />
            {/each}

        </div>
        <h3 class="text-xl font-bold">Frameworks:</h3>
        <div class="flex justify-center gap-6 my-6">
            {#each frameworks as framework}
                <Icon logo={framework} />
            {/each}
        </div>
        <h3 class="text-xl font-bold">Tools:</h3>
        <div class="flex justify-center gap-6 my-6">
            {#each tools as tool}
                <Icon logo={tool} />
            {/each}
        </div>

    </div>
    <div class="my-20">
        Navigating the waters of:<br/>
        
        <h3 class="text-xl font-bold mt-4">Tools:</h3>
        <div class="grid grid-cols-5 lg:flex justify-center gap-6 my-6">
            {#each learning as learning_tool}
                <Icon logo={learning_tool} />
            {/each}
        </div>

    </div>
</div>