<script>
    import "../app.css";
  </script>
 <body class="h-full bg-[#F9EFDF] ">
   <div id="pattern"></div>
    <div id="blur"></div>
    <a href="/">
      <div class="fixed w-full z-20 top-0 lg:p-8 py-4 text-center text-black backdrop-blur-lg border-double border-b-8 border-amber-400 border-opacity-20">
        <h1 class="sm:text-3xl text-2xl font-bold font-elmessiri ">
            Mufassir Ahmad Chowdhury
        </h1>
      </div>
    </a>
  <div class=" z-10 absolute w-full h-full mt-32 min-h-screen">
    <slot/>
  </div>
</body>

<style lang="postcss">
  body {
        background-color: #F9EFDF;
    }
  #pattern {
        
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f9efdf;
        background-image: url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%23b8ac99' fill-opacity='0.32' fill-rule='evenodd'/%3E%3C/svg%3E");
        z-index: 3;
        opacity: 0.3;
    }
  #blur {
      
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      backdrop-filter: blur(120vmax) brightness(1.1);
  }
  body {
      background-color: #F9EFDF;
  }
  
  #background {
  background-image: url("https://images.unsplash.com/photo-1565896311009-382b9e813b19?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987");
  background-position: center;
  background-size: cover;
  filter: blur(1.25em);
  height: 100%;
  left: 0px;
  opacity: 0.15;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
  }

</style>