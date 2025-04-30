<script lang="ts">
    import {
        Sidebar,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper,
        Avatar,
        Button,
    } from "flowbite-svelte";
    import {
        HomeSolid,
        FileChartBarSolid,
        UserSettingsSolid,
        AngleDownOutline,
        ArrowRightToBracketOutline,
    } from "flowbite-svelte-icons"; // Import Flowbite Svelte Icons
    import { page } from "$app/stores"; // SvelteKit store for the current page
    import { derived } from "svelte/store";

    let spanClass = "flex-1 ms-3 whitespace-nowrap";
    let isOpen = false; // Toggle state for dropdown

    // Reactive derived store for current path
    const currentPath = derived(page, ($page) => $page.url.pathname);

    function handleLogout() {
        // Add your logout logic here, e.g., clearing session, redirecting
        window.location.href = "/login";
    }
</script>

<!-- Top Navigation Bar -->
<nav class="bg-blue-900 h-16 flex fixed w-full items-center z-10 top-0 left-0">
    <a
        href="/dashboard"
        class="flex items-center space-x-3 rtl:space-x-reverse"
    >
        <img src="/images/BTR_logo.png" class="h-11 m-3" alt="BTR Logo" />
    </a>
    <div class="flex flex-col leading-tight">
        <span
            class="self-center text-xl font-inter whitespace-nowrap dark:text-white"
        >
            BUREAU OF THE TREASURY
        </span>
        <span class="text-xs font-semibold whitespace-nowrap dark:text-white">
            REGIONAL OFFICE V
        </span>
    </div>
    <div class="flex items-center mr-3 ml-auto space-x-4">
        <img src="/images/DOF-logo.png" class="h-11" alt="DOF Logo" />
        <img
            src="/images/BagongPilipinas-logo.png"
            class="h-11"
            alt="Bagong Pilipinas Logo"
        />
    </div>
</nav>

<!-- Main Layout with Sidebar -->
<div class="flex h-fit mt-16">
    <!-- Sidebar -->
    <aside
        class="w-64 h-full bg-gray-200 text-black fixed top-16 left-0 z-20 flex flex-col justify-between"
    >
        <Sidebar class="h-full flex flex-col">
            <SidebarWrapper class="flex-grow">
                <SidebarGroup>
                    <div class="flex items-center pb-4 w-full">
                        <div class="m-2">
                            <Avatar
                                size="md"
                                class="w-10"
                                src="https://scontent.flgp1-1.fna.fbcdn.net/v/t1.15752-9/482976062_1430274171713516_5341466999846490455_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF9Uua0YxpkI7hO_IiETk-oU8bmkzqpBcNTxuaTOqkFw8c4D32vqNzGqdTYtxQVa_d1I_DMNFSKTyylxZUInGGC&_nc_ohc=u2kCu89sneoQ7kNvgGiKmsP&_nc_oc=Adlytu9TfD-E5R3t6HyWW_-VGIK3KyESeaLrQdtNnsGp3TWggj5CsfhELD5t1HSNoIE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flgp1-1.fna&oh=03_Q7cD1wGnNZnb7jpVnkZVoAOhOshJo_ZLYujcLgWUB1wAzk9oSA&oe=6814383F"
                            ></Avatar>
                        </div>
                        <div>
                            <h5 class="text-m font-bold text-black">
                                Izyl Clemeña
                            </h5>
                            <h1 class="text-sm text-gray-500">
                                Princess
                            </h1>
                        </div>
                    </div>
                </SidebarGroup>

                <!-- Sidebar Navigation -->
                <SidebarGroup class="space-y-1">
                    <SidebarItem
                        href="/dashboard"
                        label="Dashboard"
                        class={$currentPath === "/dashboard"
                            ? "bg-blue-500 text-white hover:bg-blue-500"
                            : "!text-black hover:bg-blue-200"}
                    >
                        <svelte:fragment slot="icon">
                            <HomeSolid
                                class={"w-6 h-6 " +
                                    ($currentPath === "/dashboard"
                                        ? "text-white"
                                        : "text-black group-hover:text-white")}
                            />
                        </svelte:fragment>
                    </SidebarItem>

                    <SidebarItem
                        href="/dashboard/account"
                        label="Account"
                        class={$currentPath === "/dashboard/account"
                            ? "bg-blue-500 text-white hover:bg-blue-500"
                            : "!text-black hover:bg-blue-200"}
                    >
                        <svelte:fragment slot="icon">
                            <UserSettingsSolid
                                class={"w-6 h-6 " +
                                    ($currentPath === "/dashboard/account"
                                        ? "text-white"
                                        : "text-black group-hover:text-white")}
                            />
                        </svelte:fragment>
                    </SidebarItem>

                    <!-- Settings Dropdown -->
                    <div class="relative">
                        <button
                            class={"flex items-center w-full p-2 rounded-lg transition duration-200 " +
                                ($currentPath.startsWith(
                                    "/dashboard/transactions",
                                )
                                    ? " text-black"
                                    : "text-black hover:bg-blue-200")}
                            on:click={() => (isOpen = !isOpen)}
                        >
                            <FileChartBarSolid
                                class={"w-6 h-6 mr-3 " +
                                    ($currentPath.startsWith(
                                        "/dashboard/transactions",
                                    )
                                        ? "text-black "
                                        : "text-black group-hover:text-white")}
                            />
                            <span>Transactions</span>
                            <AngleDownOutline
                                class={"w-5 h-5 ml-auto transition-transform text-black " +
                                    (isOpen ? "rotate-180" : "rotate-0")}
                            />
                        </button>

                        {#if isOpen}
                            <div class="ml-9 mt-2 space-y-1">
                                <SidebarItem
                                    href="/dashboard/transactions/depositedcollections"
                                    label="Deposited Collections"
                                    class={$currentPath ===
                                    "/dashboard/transactions/depositedcollections"
                                        ? "bg-blue-500 text-white hover:bg-blue-500"
                                        : "!text-black hover:bg-blue-200"}
                                />
                                <SidebarItem
                                    href="/dashboard/transactions/mdschecks"
                                    label="MDS Checks"
                                    class={$currentPath ===
                                    "/dashboard/transactions/mdschecks"
                                        ? "bg-blue-500 text-white hover:bg-blue-500"
                                        : "!text-black hover:bg-blue-200"}
                                />
                                <SidebarItem
                                    href="/dashboard/transactions/bankaccount"
                                    label="Bank Account"
                                    class={$currentPath ===
                                    "/dashboard/transactions/bankaccount"
                                        ? "bg-blue-500 text-white hover:bg-blue-500"
                                        : "!text-black hover:bg-blue-200"}
                                />
                                <SidebarItem
                                    href="/dashboard/transactions/monthlyreports"
                                    label="Monthly Reports"
                                    class={$currentPath ===
                                    "/dashboard/transactions/monthlyreports"
                                        ? "bg-blue-500 text-white hover:bg-blue-500"
                                        : "!text-black hover:bg-blue-200"}
                                />
                            </div>
                        {/if}
                    </div>

                    <SidebarItem
                        label="Logout"
                        class={$currentPath === "/"
                            ? "bg-blue-500 text-white hover:bg-blue-500"
                            : "!text-black hover:bg-blue-200"}
                    >
                        <svelte:fragment slot="icon">
                            <ArrowRightToBracketOutline
                                class={"w-6 h-6 " +
                                    ($currentPath === "/dashboard"
                                        ? "text-black"
                                        : "text-black group-hover:text-white")}
                            />
                        </svelte:fragment>
                    </SidebarItem>
                </SidebarGroup>
            </SidebarWrapper>
        </Sidebar>
    </aside>
    <!-- Main Content Area -->
    <main class="flex-1 p-6 ml-64 h-fit">
        <slot />
    </main>
</div>
