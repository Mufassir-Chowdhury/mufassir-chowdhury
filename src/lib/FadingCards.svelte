<div id="cards">
    <div class="card shadow-2xl" data-color="blue">
      <img class="card-front-image card-image" src="surrealdb.webp" alt="surrealdb" />
      <div class="card-faders">
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
        <img class="card-fader card-image" src="surrealdb.webp" alt="surrealdb" />
      </div>
    </div>
    <div class="font-black  text-3xl">
        <div>+</div>
    </div>
    <div class="card shadow-2xl" data-color="green">
      <img class="card-front-image card-image" src="sveltekit.webp" alt="sveltekit" />
      <div class="card-faders">
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
        <img class="card-fader card-image" src="sveltekit.webp" alt="sveltekit" />
      </div>
    </div>
    <div class="font-black  text-3xl">
        <div>+</div>
    </div>

    <div class="card shadow-2xl" data-color="brown">
      <img class="card-front-image card-image" src="tailwindcss.webp" alt="tailwindcss" />
      <div class="card-faders">
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
        <img class="card-fader card-image" src="tailwindcss.webp" alt="tailwindcss" />
      </div>
    </div>
  </div>

<style>
    :root {
    --blue-rgb: 92 192 249;
    --green-rgb: 125 161 35;
    --brown-rgb: 127 46 23;
    }



    #cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }

    .card {
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: scale 100ms;
    }

    .card .card-front-image {
    position: relative;
    z-index: 2;
    }

    .card .card-image {
    width: clamp(200px, 10vw, 250px);
    aspect-ratio: 6 / 5;
    border-radius: clamp(0.5rem, 0.75vw, 2rem);
    }

    .card-faders {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    opacity: 0;
    transition: opacity 1500ms;
    pointer-events: none;
    }

    .card .card-faders {
    opacity: 1;
    }

    .card:active {
    scale: 0.98;
    }

    .card-fader {
    position: absolute;
    left: 0px;
    top: 0px;
    }

    .card-fader:nth-child(odd) {
    animation: fade-left 3s linear infinite;
    }

    .card-fader:nth-child(even) {
    animation: fade-right 3s linear infinite;
    }

    .card-fader:is(:nth-child(3), :nth-child(4)) {
    animation-delay: 750ms;
    }

    .card-fader:is(:nth-child(5), :nth-child(6)) {
    animation-delay: 1500ms;
    }

    .card-fader:is(:nth-child(7), :nth-child(8)) {
    animation-delay: 2250ms;
    }

    @media(max-width: 1200px) {
    
    #cards {
        flex-direction: column; 
        align-items: center;
        gap: 4rem;
        padding: 4rem;
    }
    
    .card .card-image {
        width: 400px;    
    }
    }

    @media(max-width: 600px) {
    #cards {
        gap: 2rem;
        padding: 2rem;
    }
    
    .card {
        width: 80%;    
    }
    
    .card .card-image {
        width: 100%;    
    }
    }

    @keyframes fade-left {
    from {
        scale: 1;
        translate: 0%;
        opacity: 1;
    }
    
    to {
        scale: 0.8;
        translate: -30%;
        opacity: 0;
    }
    }

    @keyframes fade-right {
    from {
        scale: 1;
        translate: 0%;
        opacity: 1;
    }
    
    to {
        scale: 0.8;
        translate: 30%;
        opacity: 0;
    }
    }
</style>