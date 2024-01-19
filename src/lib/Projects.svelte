<script>
    import Card from "./Card.svelte";

</script>
<section>
    <h2 class="text-3xl font-bold font-dm my-8">
        Projects
    </h2>
    <div class="grid grid-cols-2 gap-2">
        <Card >
            <h3>
                SUST APP
            </h3>
            <div>
                All in one platform for SUST students
            </div>
            <ul>
                <li>
                    •	Desktop stack –
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/java.svg" alt="java" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li>
                    •	Mobile stack –
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/flutter.svg" alt="flutter" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/SurrealDB-nobg.png" alt="surrealdb" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li>
                    •	Web stack –
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/svelte.svg" alt="svelte" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/SurrealDB-nobg.png" alt="SurrealDB-nobg" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/tailwindCSS.svg" alt="tailwindCSS" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
        
        <Card>
            <h3>
                Blood Donor Manager
            </h3>
            <div>
                Client
            </div>
            <ul>
                <li>
                    •	Web stack – 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/vueJS.svg" alt="vueJS" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/tailwindCSS.svg" alt="tailwindCSS" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/firebase.svg" alt="firebase" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
        <Card>
            <h3>
                SUST CSE Carnival
            </h3>
            <div>
                Client
            </div>
            <ul>
                <li>
                    •	Web stack – 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/reactJS.svg" alt="reactJS" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/tailwindCSS.svg" alt="tailwindCSS" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
        <Card>
            <h3>
                NMOSS
            </h3>
            <div>
                Website for Cyber Security Research Club
            </div>
            <ul>
                <li>
                    •	Web stack – 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/svelte.svg" alt="svelte" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/tailwindCSS.svg" alt="tailwindCSS" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
        <Card>
            <h3>
                AI_Support
            </h3>
            <div>
                Discord bot for SUST CSE server
            </div>
            <ul>
                <li>
                    •	Lanugae – 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/python.png" alt="python" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
        <Card>
            <h3>
                CSP Justice
            </h3>
            <div>
                Website for a research group with blogging capabilities for users
            </div>
            <ul>
                <li>
                    •	Web stack – 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/svelte.svg" alt="svelte" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/tailwindCSS.svg" alt="tailwindCSS" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/firebase.svg" alt="firebase" class="h-6 w-6 inline-block">
                    </div>
                </li>
            </ul>
        </Card>
    </div>
</section>

<style lang="postcss">
    section > div > div {
        @apply rounded-lg bg-gray-800 bg-opacity-75 h-48 grid place-items-center text-white border border-gray-950 px-4;
    }
    h3 {
        @apply text-2xl font-bold;
    }
    section > div > div > div {
        @apply text-sm;
    }
    li {
        @apply flex w-full whitespace-nowrap items-center gap-4;
    }
</style>