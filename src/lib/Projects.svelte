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
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Desktop stack 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/java.svg" alt="java" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Mobile stack 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/flutter.svg" alt="flutter" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/SurrealDB-nobg.png" alt="surrealdb" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Web stack 
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
        <div>
            <h3>
                SUST APP
            </h3>
            <div>
                All in one platform for SUST students
            </div>
            <ul>
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Desktop stack 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/java.svg" alt="java" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Mobile stack 
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/flutter.svg" alt="flutter" class="h-6 w-6 inline-block">
                    </div>
                    <div class="p-1 rounded-full border border-gray-500 w-10 h-10">
                        <img src="logo/SurrealDB-nobg.png" alt="surrealdb" class="h-6 w-6 inline-block">
                    </div>
                </li>
                <li class="flex w-full whitespace-nowrap items-center gap-4">
                    •	Web stack 
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
        </div>
        <div>
            <h3>
                Blood Donor Manager
            </h3>
            <div>
                Client
            </div>
            <ul>
                <li>
                    •	Web stack – VueJS, TailwindCSS, Firebase
                </li>
            </ul>
        </div>
        <div>
            <h3>
                SUST CSE Carnival
            </h3>
            <div>
                Client
            </div>
            <ul>
                <li>
                    •	Web stack – ReactJS, TailwindCSS
                </li>
            </ul>
        </div>
        <div>
            <h3>
                NMOSS
            </h3>
            <div>
                Website for Cyber Security Research Club
            </div>
            <ul>
                <li>
                    •	Web stack – TailwindCSS, Svelte
                </li>
            </ul>
        </div>
        <div>
            <h3>
                AI_Support
            </h3>
            <div>
                Discord bot for SUST CSE server
            </div>
            <ul>
                <li>
                    •	Python
                </li>
            </ul>
        </div>
        <div>
            <h3>
                CSP Justice
            </h3>
            <div>
                Website for a research group with blogging capabilities for users
            </div>
            <ul>
                <li>
                    •	Web stack – Sveltekit, TailwindCSS, Firebase
                </li>
            </ul>
        </div>
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
</style>