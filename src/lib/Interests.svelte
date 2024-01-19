<script>
    import Card from "./Card.svelte";

</script>
<div>
    <h2 class="text-3xl font-bold font-dm my-8">
        Interests
    </h2>

</div>

<div id="cards">
    <Card title="Books"/>
    <Card title="Philosophy"/>
    <Card title="Economics"/>
    <Card title="Podcasts"/>
</div>


<style lang="postcss">
    

    #cards {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    padding: 10em 0em;
    place-self: center;
    position: relative;
    width: calc(100% - 2em);
    z-index: 2;
    }

    @media(max-width: 1100px) {
    #cards {
        grid-template-columns: repeat(2, 1fr);
    }
    }

    @media(max-width: 600px) {
    #cards {
        grid-template-columns: 1fr;
    }
    }
</style>