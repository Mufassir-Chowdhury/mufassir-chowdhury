<script>
    import GlassCard from "./GlassCard.svelte";
    import Icon from "./Icon.svelte";

    const projects = [
        {
            title: "SUST APP",
            description: "All in one platform for SUST students",
            stacks: [
                {
                    name: "Desktop",
                    stack: [
                        "java"
                    ]
                },
                {
                    name: "Mobile",
                    stack: [
                        "flutter",
                        "surrealdb"
                    ]
                },
                {
                    name: "Web",
                    stack: [
                        "svelte",
                        "surrealdb",
                        "tailwindcss"
                    ]
                }
            ]
        },
        {
            title: "Blood Donor Manager",
            description: "Client",
            stacks: [
                {
                    name: "Web",
                    stack: [
                        "vuejs",
                        "tailwindcss",
                        "firebase"
                    ]
                }
            ]
        },
        {
            title: "SUST CSE Carnival",
            description: "Client",
            stacks: [
                {
                    name: "Web",
                    stack: [
                        "react",
                        "tailwindcss"
                    ]
                }
            ]
        },
        {
            title: "NMOSS",
            description: "Website for Cyber Security Research Club",
            stacks: [
                {
                    name: "Web",
                    stack: [
                        "svelte",
                        "tailwindcss"
                    ]
                }
            ]
        },
        {
            title: "AI_Support",
            description: "Discord bot for SUST CSE server",
            stacks: [
                {
                    name: "Language",
                    stack: [
                        "python"
                    ]
                }
            ]
        },
        {
            title: "CSP Justice",
            description: "Website for a research group with blogging capabilities for users",
            stacks: [
                {
                    name: "Web",
                    stack: [
                        "svelte",
                        "tailwindcss",
                        "firebase"
                    ]
                }
            ]
        }
    ]
</script>
<section>
    <h2 class="text-3xl font-bold font-dm my-8">
        Projects
    </h2>
    <div class="cards text-sm lg:text-base">
        {#each projects as project}
            <GlassCard className="h-52">
                <h3 class="lg:text-2xl text-xl font-bold">
                    {project.title}
                </h3>
                <div>
                    {project.description}
                </div>
                <ul>
                    {#each project.stacks as stack}
                        <li class="flex w-full whitespace-nowrap items-center gap-4">
                            •	{stack.name} stack –
                            {#each stack.stack as logo}
                                <Icon logo={logo} />
                            {/each}
                        </li>
                    {/each}
                </ul>
            </GlassCard>

        {/each}
    </div>
</section>
