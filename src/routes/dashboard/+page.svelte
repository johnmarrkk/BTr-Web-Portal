<script>
    import { AngleLeftOutline, AngleRightOutline } from "flowbite-svelte-icons";
    let currentSlide = 0;

    const slides = [
        "/images/BTRV-Building.jpg",
        "https://source.unsplash.com/800x400/?city,night",
        "https://source.unsplash.com/800x400/?technology",
        "https://source.unsplash.com/800x400/?forest",
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
            <div class="bg-blue-200">

            </div>
            <div class="bg-green-200">

            </div>
        </div>
    </div>
</div>
