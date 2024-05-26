<script>
    export let title = "";
    export let className = "";
    import { reveal } from 'svelte-reveal';

</script>

<div class="card {className}"  use:reveal={{ transition: "slide" }}>
    <div class="card-content">
        <div class="card-icon text-xl md:text-2xl">
            {title}
        </div>
        <slot />
    </div>
  </div>

  <style>
    :root {
    --card-color: rgb(30, 30, 30, 0.90);
    }



    .card {
    cursor: pointer;
    position: relative;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px) saturate(180%);
    -webkit-backdrop-filter: blur(5.5px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card:hover:before {
    opacity: 1;
    transition: all 0.7s ease-in-out;
    } 

    .card:before {
    background: linear-gradient(
        45deg,
        transparent 5%,
        rgb(255, 215, 137) 50%,
        transparent 99%
    );
    border-radius: inherit;
    content: "";
    inset: 0px;
    opacity: 0;
    position: absolute;
    transition: opacity 400ms;
    z-index: 0;
    }

    .card-content {
        /* From https://css.glass */
        /* background: rgba(255, 255, 255, 0.44); */
        border-radius: 16px;
        /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.5px);
        -webkit-backdrop-filter: blur(5.5px); */
        /* border: 1px solid rgba(255, 255, 255, 0.44); */
        display: grid;
        inset: 1px;
        padding: 1em;
        position: absolute;
    }



    .card:hover > .card-content > .card-icon {
    opacity: 1;
    transform: scale(1.1) translateY(-5%);
    }

    .card-icon {
    place-self: center;
    transition: transform 250ms, opacity 250ms;
    }

    @media(max-width: 640px) {
    .card-icon {
        color: rgba(0, 0, 0, 1);
        opacity: 0.8;
    }
    }
    @media(min-width: 640px) {
    .card-icon {
        color: rgba(0, 0, 0, 1);
        opacity: 0.6;

    }
    }
  </style>