<script>
    import GlassCard from "./GlassCard.svelte";
    import { reveal } from 'svelte-reveal';

</script>
<div>
    <h2 class="text-3xl font-bold font-elmessiri my-8 " use:reveal={{ transition: "slide" }}>
        Interests
    </h2>

</div>

<div class="cards">
    <GlassCard title="Books" className="h-32 lg:h-44"/>
    <GlassCard title="Philosophy" className="h-32 lg:h-44"/>
    <GlassCard title="AI" className="h-32 lg:h-44"/>
    <GlassCard title="Podcasts" className="h-32 lg:h-44"/>
</div>


<style lang="postcss">
    

    
</style>