<script>
    import GlassCard from "./GlassCard.svelte";
    import Icon from "./Icon.svelte";
    import { reveal } from 'svelte-reveal';

    const projects = [
        {
            title: "Intelligent Systems",
            description: "AI powered personal assistant with RAG capabilities.",
            stacks: [
                {
                    name: "Web",
                    stack: [
                        "react",
                        "langchain",
                        "fastapi",
                        "postgresql"
                    ]
                }
            ]
        },
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
            title: "SUST CSE Carnival",
            description: "Official website for SUST CSE Carnival 2024 event.",
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
            title: "KKRF Sylhet",
            description: "Organisation website with custom admin panel with advanced management pipelines.",
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
    <h2 class="text-3xl font-bold font-elmessiri my-8"  use:reveal={{ transition: "slide" }}>
        Projects
    </h2>
    <div class="cards text-sm lg:text-base">
        {#each projects as project}
            <GlassCard title={project.title} className="h-52">
                <!-- <h3 class="lg:text-2xl text-xl font-bold">
                    {project.title}
                </h3> -->
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
