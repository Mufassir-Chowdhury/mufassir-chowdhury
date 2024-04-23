<script>
    export let logo;

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
    }
</script>

<div class="flex justify-center items-center p-1 rounded-full border shadow-2xl border-gray-500 sm:w-10 sm:h-10">
    <img src={source[logo]} alt={logo} class="h-6 w-6 inline-block">
</div>