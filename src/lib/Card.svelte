<script>
    export let title = "";
    export let className = "";
</script>

<div class="card {className}">
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
    background-color: var(--card-color);
    border-radius: 0.75em;
    cursor: pointer;
    position: relative;
    }

    .card:hover:before {
    opacity: 1;
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
    background-color: var(--card-color);
    border-radius: inherit;
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
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
    }
    }
    @media(min-width: 640px) {
    .card-icon {
        color: rgba(255, 255, 255, 0.80);
        opacity: 0.4;

    }
    }
  </style>