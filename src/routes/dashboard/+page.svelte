<script>
    import { AngleLeftOutline, AngleRightOutline } from "flowbite-svelte-icons";
    let currentSlide = 0;

    const slides = [
        "/images/BTRV-Building.jpg",
        "/images/CarouselSlide1.png",
        "/images/CarouselSlide2.png",
        "/images/CarouselSlide3.png",
    ];

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    // Autoplay logic
    /**
     * @type {number | undefined}
     */
    let interval;
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
        // @ts-ignore
        interval = setInterval(nextSlide, 5000); // Change every 5 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>


<div>
    <div class="w-full h-[250px] grid grid-cols-[3fr_1fr]">
        <div class="">
            <div
                class="relative w-full mx-auto h-[250px] overflow-hidden rounded-lg shadow-lg"
            >
                {#each slides as slide, index}
                    <img
                        src={slide}
                        alt="Slide"
                        class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700"
                        class:opacity-100={index === currentSlide}
                        class:opacity-0={index !== currentSlide}
                    />
                {/each}

                <!-- Prev Button -->
                <button
                    on:click={prevSlide}
                    class="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-10"
                >
                    <AngleLeftOutline />
                </button>

                <!-- Next Button -->
                <button
                    on:click={nextSlide}
                    class="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-10"
                >
                    <AngleRightOutline />
                </button>

                <!-- Indicators -->
                <div
                    class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
                >
                    {#each slides as _, i}
                        <!-- svelte-ignore element_invalid_self_closing_tag -->
                        <div
                            class="w-3 h-3 rounded-full"
                            class:bg-white={i === currentSlide}
                            class:bg-gray-500={i !== currentSlide}
                        />
                    {/each}
                </div>
            </div>
        </div>
        <div class="w-full grid grid-rows-2 gap-2 ml-2">
            <img src="/images/BTR-Building2.png" alt="" class="h-30 w-100">
            <img src="/images/BTRV-Building.jpg" alt="" class="h-30 w-100">

          
        </div>
    </div>
</div>


<div>
    <h1 class = "mt-5 text-xl font-bold">Hello, Izyl Clemeña!</h1>
    <p class = "text-blue-500">How can we help you?</p>
    <p class = "text-center">Click on the Treasury services that you want to avail</p>
</div>

<div class="grid grid-cols-5  mt-5 ml-5">
  <div class="border rounded-lg h-auto w-60">
    <div class="flex justify-center p-2">
        <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="Document Icon" class="w-10 h-10">
      </div>
      <div class=" text-xs font-medium text-center">
        Certification and<br>
        Confirmation of Deposited<br>
        National Collections
      </div>
  </div>

  <div class="border rounded-lg h-auto w-60">
    <div class="flex justify-center p-2">
        <img src="/images/chequeIcon.png" alt="Document Icon" class="w-10 h-10 mb-3">
      </div>
      <div class="text-sm font-medium text-center">
        Re-order of MDS Checks
      </div>
  </div>
  <div class="border rounded-lg h-auto w-60">
    <div class="flex justify-center p-2">
        <img src="/images/bankIcon.png" alt="Document Icon" class="w-10 h-10 mb-3">
      </div>
      <div class="text-sm font-medium text-center">
        Opening of Bank Account
      </div>
  </div>
  <div class="border rounded-lg h-auto w-60">
    <div class="flex justify-center p-2">
        <img src="/images/Report.png" alt="Document Icon" class="w-10 h-10 mb-1.5">
      </div>
      <div class="text-sm font-medium text-center">
        Monthly Report of <br>
        Collections and Deposits
      </div>
  </div>
  <div class="border rounded-lg h-auto w-60">
    <div class="flex justify-center p-2">
        <img src="/images/paperIcon.png" alt="Document Icon" class="w-10 h-10 mb-3">
      </div>
      <div class="text-sm font-medium text-center">
        Financial Literacy
      </div>
  </div>

</div>
