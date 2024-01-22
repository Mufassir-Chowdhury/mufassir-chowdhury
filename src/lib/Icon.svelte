<script>
    export let logo;

    const source = {
        "java": "logo/java.svg",
        "flutter": "logo/flutter.svg",
        "surrealdb": "logo/SurrealDB-nobg.png",
        "svelte": "logo/svelte.svg",
        "tailwindcss": "logo/tailwindCSS.svg",
        "vuejs": "logo/vueJS.svg",
        "firebase": "logo/firebase.svg",
        "react": "logo/reactJS.svg",
        "c": "logo/c.svg",
        "c++": "logo/C++.png",
        "python": "logo/python.png",
        "javascript": "logo/JS.png",
        "html": "logo/html.png",
        "cloudflare": "logo/cloudflare.svg",
        "dart": "logo/Dart.png",
        "git": "logo/git.svg",
        "github": "logo/github.svg",
        "sql": "logo/sql.svg",
    }
</script>

<div class="p-1 rounded-full border border-gray-500 w-10 h-10">
    <img src={source[logo]} alt={logo} class="h-6 w-6 inline-block">
</div>