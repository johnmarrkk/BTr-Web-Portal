<script lang="ts">
    import { fly } from "svelte/transition";
    import { Radio } from "flowbite-svelte";
    import { ArrowRightOutline, EditOutline } from "flowbite-svelte-icons";

    import {
        data,
        getUniqueAgencies,
        getDepartmentAndUacsByAgency,
    } from "$lib/agencyData.js";

    let agencies: string[] = getUniqueAgencies();
    let selectedAgency = "";
    let departments: string[] = [];
    let uacsCodes: string[] = [];
    let selectedDepartment = "";
    let selectedUacs = "";

    let searchTerm = "";
    let showDropdown = false;

    $: if (selectedAgency) {
        const filtered = getDepartmentAndUacsByAgency(selectedAgency);
        departments = filtered.map((item) => item.department);
        uacsCodes = filtered.map((item) => item.uacs);

        if (departments.length === 1) {
            selectedDepartment = departments[0];
        }
        if (uacsCodes.length === 1) {
            selectedUacs = uacsCodes[0];
        }
    }

    $: filteredAgencies = agencies.filter((agency) =>
        agency.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    function handleBlur(event: FocusEvent) {
        const relatedTarget = event.relatedTarget as HTMLElement;
        if (!relatedTarget || !relatedTarget.closest(".dropdown-item")) {
            showDropdown = false;
        }
    }

    let email = '';
    let firstName = '';
    let middleName = '';
    let agency = selectedAgency;
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

    function editStep() {
        if (step > 1) {
            step -= 3;
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

<div class="grid grid-cols-4 h-screen">
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
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(1)}`}
                >
                    {stepContent(1)}
                </div>
                <div class="text-lg font-medium text-gray-800">Information</div>
            </div>
            <div class={`h-5 border-l-2 ${lineClass(1)}  ml-4`}></div>

            <!-- Step 2 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(2)} `}
                >
                    {stepContent(2)}
                </div>
                <div class="text-lg font-medium text-gray-800">
                    Organization
                </div>
            </div>
            <div class={`h-5 border-l-2 ${lineClass(2)}  ml-4`}></div>

            <!-- Step 3 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(3)} `}
                >
                    {stepContent(3)}
                </div>
                <div class="text-lg font-medium text-gray-800">Password</div>
            </div>
            <div class={`h-5 border-l-2 ${lineClass(3)}  ml-4`}></div>

            <!-- Step 4 -->
            <div class="flex items-center space-x-2">
                <div
                    class={`w-8 h-8 rounded-full flex items-center justify-center ${stepClass(4)} `}
                >
                    {stepContent(4)}
                </div>
                <div class="text-lg font-medium text-gray-800">Review</div>
            </div>
        </div>
    </div>

    <div class="bg-white p-5">
        <div
            class="w-full flex flex-col items-center justify-center px-130 py-8 mx-auto md:h-screen lg:py-0"
        >
            <div
                class="w-120 h-auto p-10 border bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-white dark:border-gray-300"
            >
                <div class="space-y-6">
                    {#if step === 1}
                        <h1 class="font-bold text-lg">Personal Information</h1>
                        <h1 class="text-xs -mt-5"> <span class="text-red-600">*</span> important fields</h1>
                        <div class="relative">
                            <input
                                type="email"
                                id="email"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
                                placeholder=""
                                bind:value={email}
                            />
                            <label
                                for="email"
                                class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >Email <span class="text-red-600">*</span>
                            </label>
                        </div>

                        <div class="relative">
                            <input
                                type="text"
                                id="first_name"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                bind:value={firstName}
                                on:input={() => {
                                    firstName = firstName.toUpperCase();
                                }}
                            />
                            <label
                                for="first_name"
                                class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >First Name <span class="text-red-600">*</span
                                ></label
                            >
                        </div>

                        <div class="relative space-y-2">
                            <div class="relative">
                                <input
                                    type="text"
                                    id="middle_name"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm uppercase text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    bind:value={middleName}
                                    on:input={() => {
                                        middleName = middleName.toUpperCase();
                                    }}
                                />
                                <label
                                    for="middle_name"
                                    class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                    Middle Name
                                </label>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <div class="relative w-full">
                                <input
                                    type="text"
                                    id="last_name"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    for="last_name"
                                    class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >Last Name <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                            </div>
                            <div class="relative w-30">
                                <input
                                    type="text"
                                    id="last_name"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    for="last_name"
                                    class="absolute text-xs text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >Suffix</label
                                >
                            </div>
                        </div>

                        <div>
                            <p class=" text-sm text-gray-600">
                                Select Gender <span class="text-red-600">*</span
                                >
                            </p>
                            <div class="grid grid-cols-2 gap-6">
                                <div
                                    class="rounded-sm border h-12 border-gray-200"
                                >
                                    <Radio
                                        name="bordered"
                                        value="male"
                                        bind:group={selectedSex}
                                        class="w-full p-3 text-gray-600"
                                        >Male</Radio
                                    >
                                </div>
                                <div
                                    class="rounded-sm border h-12 border-gray-200"
                                >
                                    <Radio
                                        name="bordered"
                                        value="female"
                                        bind:group={selectedSex}
                                        class="w-full p-3 text-gray-600"
                                        >Female</Radio
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <div class="relative">
                                <input
                                    type="text"
                                    id="mobile_number"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    for="mobile_number"
                                    class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >Mobile Number <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                            </div>

                            <p class="text-xs pl-2 text-gray-500">
                                11 digit mobile number (09XXXXXXXXX)
                            </p>
                        </div>
                    {/if}

                    {#if step === 2}
                        <h1 class="font-bold text-lg">Organization</h1>
                        <div class="flex flex-col space-y-4">
                            <div class="relative">
                                <label
                                    for="clientType"
                                    class="block text-sm text-gray-900"
                                    >Client Type <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                                <select
                                    id="clientType"
                                    class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                >
                                    <option value="" disabled selected
                                        >- select -</option
                                    >
                                    <option value="LGU">LGU</option>
                                    <option value="NGA">NGA</option>
                                    <option value="GOCC">GOCC</option>
                                </select>
                            </div>

                            <div class="relative">
                                <input
                                    type="text"
                                    id="positionTitle"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    for="positionTitle"
                                    class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >Position Title <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                            </div>

                            <div class="relative">
                                <label
                                    for="PO"
                                    class="block text-sm text-gray-900"
                                    >BTR Provincial Office <span
                                        class="text-red-600">*</span
                                    ></label
                                >
                                <select
                                    id="PO"
                                    class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                >
                                    <option value="" disabled selected
                                        >- select -</option
                                    >
                                    <option value="Albay PO">Albay PO</option>
                                    <option value="Catanduanes PO"
                                        >Catanduanes PO</option
                                    >
                                    <option value="Camarines Norte PO"
                                        >Camarines Norte PO</option
                                    >
                                    <option value="Camarines Sur PO"
                                        >Camarines Sur PO</option
                                    >
                                    <option value="Masbate PO"
                                        >Masbate PO</option
                                    >
                                    <option value="Sorsogon PO"
                                        >Sorsogon PO</option
                                    >
                                </select>
                            </div>

                            <div class="relative">
                                <label
                                    for="agency"
                                    class="block text-sm text-gray-900"
                                    >Agency <span class="text-red-600">*</span
                                    ></label
                                >

                                <input
                                    id="agency"
                                    type="text"
                                    class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                    autocomplete="off"
                                    bind:value={searchTerm}
                                    on:focus={() => (showDropdown = true)}
                                    on:blur={handleBlur}
                                    placeholder="Enter agency"
                                />

                                {#if showDropdown && searchTerm}
                                    <ul
                                        class="absolute z-10 w-full bg-gray-200 shadow-2xl border border-black rounded-md mt-1 max-h-60 overflow-auto"
                                    >
                                        {#each filteredAgencies as agency}
                                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                                            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
                                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                                            <li
                                                tabindex="0"
                                                class="dropdown-item px-4 py-2 hover:bg-blue-300 cursor-pointer"
                                                on:click={() => {
                                                    selectedAgency = agency;
                                                    searchTerm = agency;
                                                    showDropdown = false;
                                                }}
                                                on:blur={handleBlur}
                                            >
                                                {agency}
                                            </li>
                                        {/each}

                                        {#if filteredAgencies.length === 0}
                                            <li class="px-4 py-2 text-gray-900 flex justify-center">
                                                No agencies found
                                            </li>
                                        {/if}
                                    </ul>
                                {/if}
                            </div>

                            <div class="relative">
                                <label
                                    for="department"
                                    class="block text-sm text-gray-900"
                                    >Department <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                                <select
                                    id="department"
                                    class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                    bind:value={selectedDepartment}
                                    disabled={departments.length === 0}
                                >
                                    <option value="" disabled selected></option>
                                    {#each departments as department}
                                        <option value={department}
                                            >{department}</option
                                        >
                                    {/each}
                                </select>
                            </div>

                            <div class="relative">
                                <label
                                    for="UACScode"
                                    class="block text-sm text-gray-900"
                                    >UACS Code <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                                <select
                                    id="UACScode"
                                    class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                    bind:value={selectedUacs}
                                    disabled={uacsCodes.length === 0}
                                >
                                    <option value="" disabled selected></option>
                                    {#each uacsCodes as uacs}
                                        <option value={uacs}>{uacs}</option>
                                    {/each}
                                </select>
                            </div>

                            <div class="relative">
                                <input
                                    type="text"
                                    id="positionTitle"
                                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    for="positionTitle"
                                    class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >Office Address <span class="text-red-600"
                                        >*</span
                                    ></label
                                >
                            </div>
                        </div>
                    {/if}

                    {#if step === 3}
                        <div>
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
                        <div class="-m-2">
                            <h3 class="text-xl font-semibold text-gray-700">
                                Review Your Information
                            </h3>
                            <div class="mt-4">
                                <p>Email:  <strong class="pl-2">{email}</strong></p> 
                                <p>First Name:  <strong class="pl-2">{firstName}</strong></p>   
                                <p>Middle Name:  <strong class="pl-2">{middleName}</strong></p>    
                                <p>Agency:  <strong class="pl-2 max-w-3/4">{selectedAgency}</strong></p>
                            </div>
                            <div class="flex justify-between gap-2 mt-6">
                                <button
                                    type="button"
                                    on:click={editStep}
                                    class="bg-gray-300 w-1/2 px-6 py-3 flex justify-center rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                    <EditOutline/>Edit</button
                                >
                                <button
                                    type="button"
                                    on:click={submitForm}
                                    class="bg-blue-500 w-1/2 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                class="bg-gray-300 w-1/4 px-6 py-2 mr-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >Back</button
                            >
                        {/if}
                        <button
                            type="button"
                            on:click={nextStep}
                            class="bg-blue-500 text-white w-1/4 px-6 py-2 rounded-lg text-sm flex items-center text-center font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >Next
                            <ArrowRightOutline size="lg" /></button
                        >
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
