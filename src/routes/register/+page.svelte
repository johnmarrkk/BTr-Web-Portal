<script>
    import { fly } from "svelte/transition";
    import { Radio } from "flowbite-svelte";
    import { AngleRightOutline} from "flowbite-svelte-icons";

    let selectedSex = "";

    let step = 1;
    let formData = {
        name: "",
        email: "",
        age: "",
    };

    function nextStep() {
        if (step < 4) {
            step += 1;
        }
    }

    function prevStep() {
        if (step > 1) {
            step -= 1;
        }
    }

    function submitForm() {
        console.log(formData);
        alert("Form submitted successfully!");
    }

    // @ts-ignore
    function stepClass(stepNumber) {
        return step === stepNumber
            ? "bg-blue-500 text-white"
            : step > stepNumber
              ? "bg-blue-500 text-white" // Color for completed steps
              : "bg-gray-300 text-gray-700";
    }

    // @ts-ignore
    function stepContent(stepNumber) {
        return step > stepNumber ? "✓" : stepNumber; // Show checkmark if step is completed, else show number
    }

    // @ts-ignore
    function lineClass(stepNumber) {
        return step > stepNumber ? "border-blue-500" : "border-gray-300";
    }
</script>

<nav class="bg-blue-900 h-16 flex fixed w-full"></nav>

<div class="grid grid-cols-4 h-fit">
    <div
        class=" bg-gray-100 p-20 border-1 border-gray-400 flex flex-col items-center"
    >
        <div>
            <img src="images/BTR-logo.png" class="h-40 mt-20 mb-10" alt="" />
        </div>

        <div class="flex flex-col space-y-2 mb-6">
            <!-- Step 1 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(1)} transition-all duration-500 ease-in-out`}
                >
                    {stepContent(1)}
                </div>
                <div class="text-lg font-medium text-gray-800">Information</div>
            </div>
            <div
                class={`h-5 border-l-2 ${lineClass(1)} transition-all duration-500 ease-in-out ml-4`}
            ></div>

            <!-- Step 2 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(2)} transition-all duration-500 ease-in-out`}
                >
                    {stepContent(2)}
                </div>
                <div class="text-lg font-medium text-gray-800">
                    Organization
                </div>
            </div>
            <div
                class={`h-5 border-l-2 ${lineClass(2)} transition-all duration-500 ease-in-out ml-4`}
            ></div>

            <!-- Step 3 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(3)} transition-all duration-500 ease-in-out`}
                >
                    {stepContent(3)}
                </div>
                <div class="text-lg font-medium text-gray-800">Password</div>
            </div>
            <div
                class={`h-5 border-l-2 ${lineClass(3)} transition-all duration-500 ease-in-out ml-4`}
            ></div>

            <!-- Step 4 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(4)} transition-all duration-500 ease-in-out`}
                >
                    {stepContent(4)}
                </div>
                <div class="text-lg font-medium text-gray-800">Review</div>
            </div>
        </div>
    </div>

    <div class="bg-white p-5">
        <div
            class="w-full pt-5 flex flex-col items-center justify-center px-130 py-8 mx-auto md:h-screen lg:py-0"
        >
            <div
                class="w-120 h-auto p-10 bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-white dark:border-gray-300"
            >
                <div class="space-y-6">
                    {#if step === 1}
                        <h1 class="font-bold text-lg">Personal Information</h1>
                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="relative"
                        >
                            <input
                                type="email"
                                id="email"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none  focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                for="email"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >Email</label
                            >
                        </div>

                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="relative"
                        >
                            <input
                                type="text"
                                id="first_name"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                for="first_name"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >First Name</label
                            >
                        </div>

                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="relative"
                        >
                            <input
                                type="text"
                                id="middle_name"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                for="middle_name"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >Middle Name</label
                            >
                        </div>

                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="relative"
                        >
                            <input
                                type="text"
                                id="last_name"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                for="last_name"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >Last Name</label
                            >
                        </div>

                        <div transition:fly={{ x: 200, duration: 300 }}>
                            <p class=" text-sm text-gray-600">Select Gender</p>
                            <div class="grid grid-cols-2 gap-6">
                                <div class="rounded-sm border h-12 border-gray-200">
                                    <Radio
                                        name="bordered"
                                        value="male"
                                        bind:group={selectedSex}
                                        class="w-full p-3 text-gray-600">Male</Radio
                                    >
                                </div>
                                <div class="rounded-sm border h-12 border-gray-200">
                                    <Radio
                                        name="bordered"
                                        value="female"
                                        bind:group={selectedSex}
                                        class="w-full p-3 text-gray-600">Female</Radio
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="relative"
                        >
                            <input
                                type="text"
                                id="mobile_number"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                for="mobile_number"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >Mobile Number</label
                            >
                        </div>
                    {/if}

                    {#if step === 2}
                         <h1 class="font-bold text-lg">Organization</h1>
                        <div class="relative" transition:fly={{ x: 200, duration: 300 }}>
                            <label for="clientType" class="block text-sm text-gray-500">Client Type</label>
                            <select id="clientType" class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                <option value="" disabled selected>- select -</option>
                                <option value="LGU">LGU</option>
                                <option value="NGA">NGA</option>
                                <option value="GOCC">GOCC</option>
                            </select>
                        </div>
                        <div
                        transition:fly={{ x: 200, duration: 300 }}
                        class="relative"
                    >
                        <input
                            type="text"
                            id="positionTitle"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                        />
                        <label
                            for="positionTitle"
                            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >Position Title</label
                        >
                    </div>
                    {/if}

                    {#if step === 3}
                        <div transition:fly={{ x: 200, duration: 300 }}>
                            <label
                                for="age"
                                class="block text-sm font-medium text-gray-700"
                                >Age:</label
                            >
                            <input
                                id="age"
                                type="number"
                                bind:value={formData.age}
                                class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your age"
                            />
                        </div>
                    {/if}

                    {#if step === 4}
                        <div
                            transition:fly={{ x: 200, duration: 300 }}
                            class="mb-4"
                        >
                            <h3 class="text-xl font-semibold text-gray-700">
                                Review Your Information
                            </h3>
                            <div class="mt-4">
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Age:</strong> {formData.age}</p>
                            </div>
                            <div class="flex justify-between mt-6">
                                <button
                                    type="button"
                                    on:click={prevStep}
                                    class="bg-gray-300 px-6 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >Edit</button
                                >
                                <button
                                    type="button"
                                    on:click={submitForm}
                                    class="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >Submit</button
                                >
                            </div>
                        </div>
                    {/if}
                </div>

                {#if step < 4}
                    <div class="flex justify-end mt-6">
                        {#if step > 1}
                            <button
                                type="button"
                                on:click={prevStep}
                                class="bg-gray-300 px-6 py-2 mr-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >Back</button
                            >
                        {/if}
                        <button
                            type="button"
                            on:click={nextStep}
                            class="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm flex items-center text-center font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >Next
                            <AngleRightOutline size="sm"/></button
                        >
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
