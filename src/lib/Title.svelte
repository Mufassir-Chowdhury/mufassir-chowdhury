<script>
    import { onMount } from 'svelte';
    
    
    let h1;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    export let title;
    onMount(() => {
        setInterval(() => {
            let iterations = 0;
            const interval = setInterval(() => {
                h1.innerText = h1.innerText.split('').map((letter, index) => {
                    if (index < iterations){
                        return title[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                }).join('');
                if (iterations >= title.length) {
                    clearInterval(interval);
                };
                iterations += 1/3;
            }, 30);
        }, 12000);
    });
</script>

<h1 bind:this={h1}  class="text-3xl font-bold font-major ">
    {title}
</h1>