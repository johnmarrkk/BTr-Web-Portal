<script></script>

<nav class="w-full h-16 p-2 bg-white border-b-4 border-b-yellow-300 flex fix">
  <img src="images/BTR-logo.png" class="h-12" alt="" />
  <h1 class=" items-center flex w-full font-bold m-2">
    BUREAU OF THE TREASURY - Region V
  </h1>

  <div class="w-full flex mr-4">
    <ul class="flex gap-10 items-center p-2 pr-5 ml-auto justify-between">
      <li class="hover:bg-amber-200 cursor-pointer p-3">Home</li>
      <li class="hover:bg-amber-200 cursor-pointer p-3">About Us</li>
      <li class="hover:bg-amber-200 cursor-pointer p-3">Contact Us</li>
    </ul>
  </div>

  <div class="ml-auto mr-2 w-50 flex items-center justify-center bg-yellow-200 hover:bg-amber-200 rounded-lg">
    <a href="/login" class="font-bold cursor-pointer p-3">Log in</a>
  </div>
</nav>

<div
  style="width: 100%; z-index: -1; background-image: url('images/BTR-Building2.png'); background-size: cover;"
  class="h-screen"
>
  <div>
    <h1
      class="text-6xl font-serif text-white font-extralight pt-20 pl-20 w-1/2 whitespace-pre-wrap"
    >
      Makabago, Maunlad at Mabisang Pamamahala ng Ingatang-yaman
    </h1>

    <button class="ml-100 p-3 bg-white rounded-lg mt-50">Get Started</button>
  </div>
</div>

<div
  style="width: 100%; z-index: -1; background-image: url('images/BTr-Treasury.jpg'); background-size: cover;"
  class="h-screen flex justify-center"
  
>
  <div class="w-200 h-100 mt-25">

    <button class="px-4 p-2 bg-amber-200 rounded-lg mt-5 mb-2 font-bold">FEATURED VIDEO</button>
    <!-- svelte-ignore a11y_media_has_caption -->

    <video width="800" height="450" autoplay muted loop controls class="rounded-2xl"> 
        <source src="/images/11_FinLit _v7_.mp4_en.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
      
  </div>
</div>

<footer class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src="images/BagongPilipinas-logo.png" class="h-13 me-3" alt="" />
          <img src="images/DOF-logo.png" class="h-13 me-3" alt="" />
          <img src="images/BTR-logo.png" class="h-13 me-3" alt="" />
          <span class="self-center text-3xl font-semibold whitespace-nowrap"
            >Bureau of the Treasury</span
          >
        </a>
      </div>
    </div>
  </div>
</footer>
