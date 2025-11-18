<script>
    import Tooltip from "sv-tooltip"
    export let logo;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const source = {
        "java": "logo/java.svg",
        "flutter": "logo/flutter.svg",
        "surrealdb": "logo/SurrealDB-nobg.webp",
        "svelte": "logo/svelte.svg",
        "tailwindcss": "logo/tailwindCSS.svg",
        "vuejs": "logo/vueJS.svg",
        "firebase": "logo/firebase.svg",
        "react": "logo/reactJS.svg",
        "c": "logo/c.svg",
        "c++": "logo/C++.webp",
        "python": "logo/python.webp",
        "javascript": "logo/JS.webp",
        "html": "logo/html.webp",
        "cloudflare": "logo/cloudflare.svg",
        "dart": "logo/Dart.webp",
        "git": "logo/git.svg",
        "github": "logo/github.svg",
        "sql": "logo/sql.svg",
        "docker": "logo/docker.webp",
        "godot": "logo/godot.svg",
        "langchain": "logo/langchain.svg",
        "fastapi": "logo/fastapi.svg",
        "postgresql": "logo/postgresql.png",
        "go": "logo/go.png",
        "pytorch": "logo/pytorch.png",
        "aws": "logo/aws.webp",
        "azure": "logo/azure.svg"
    }
</script>

<Tooltip tip={capitalizeFirstLetter(logo)} bottom>
    <!-- <button>Hello</button> -->
    <div class="flex justify-center items-center p-1 rounded-full border shadow-2xl border-gray-300 sm:w-10 sm:h-10">
        <img src={source[logo]} alt={logo} class="h-6 w-6 inline-block">
    </div>
</Tooltip>