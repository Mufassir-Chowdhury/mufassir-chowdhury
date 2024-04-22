<script>
    import { onMount } from 'svelte';
    
    
    let h1;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    export let title;
    onMount(() => {
        const outerInterval = window.setInterval(() => {
            let iterations = 0;
            const interval = window.setInterval(() => {
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
            }, 60);
            clearInterval(outerInterval);
            setInterval(outerInterval);
        }, 9000);
    });
</script>

<h1 bind:this={h1}  class="sm:text-3xl text-lg font-bold font-major ">
    {title}
</h1>