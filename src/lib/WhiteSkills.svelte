<script>
    import GlassCard from "./GlassCard.svelte";
    import { reveal } from 'svelte-reveal';

</script>
<div>
    <h2 class="text-3xl font-bold font-elmessiri my-8" use:reveal={{ transition: "slide" }}>
        Skills
    </h2>
    <div class="cards">
        <GlassCard title="Basic Video Editing" className="h-32 lg:h-44"/>
        <GlassCard title="Microsoft Office Suite" className="h-32 lg:h-44"/>
    </div>
</div>