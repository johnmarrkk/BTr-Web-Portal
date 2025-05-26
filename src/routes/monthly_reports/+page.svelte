<!-- Navbar -->
<nav class="bg-blue-900 h-16 flex fixed w-full items-center z-10">
    <a href="/" class="flex items-center space-x-3">
        <img src="images/BTR_logo.png" class="h-11 m-3" alt="BTR Logo" />
    </a>
    <div class="flex flex-col leading-tight">
        <span class="text-xl font-inter text-white">BUREAU OF THE TREASURY</span>
        <span class="text-xs font-semibold text-white">REGIONAL OFFICE V</span>
    </div>
    <div class="flex items-center ml-auto mr-3 space-x-4">
        <img src="images/DOF-logo.png" class="h-11" alt="DOF Logo" />
        <img src="images/BagongPilipinas-logo.png" class="h-11" alt="Bagong Pilipinas Logo" />
    </div>
</nav>

<!-- Main Content -->
<main class="pt-24 max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl mt-6">
    <h1 class="text-xl font-bold mb-4">
        Submission of Monthly Reports of Collections and Deposits
    </h1>

    <!-- Instructions -->
    <div class="mb-6 space-y-2 text-sm text-gray-700">
        <p><strong>Instructions:</strong></p>
        <ul class="list-disc list-inside space-y-1">
            <li>
                Use this template in accomplishing the Report on a monthly basis:
                <a href="http://bit.ly/3HTf4dY" class="text-blue-700 underline">http://bit.ly/3HTf4dY</a>
            </li>
            <li>
                Use the form when submitting <strong>Monthly Reports</strong> of Collections and Deposits covering periods <strong>from</strong> August 1, 2022 onward.
            </li>
            <li>
                Accomplish and submit separate report per funding source (e.g., Regular, Trust, etc.)
            </li>
            <li>
                All files must be in PDF format. Ensure readability.
    <li class="mb-2">
    <span class="text-black">
        <strong>Note:</strong> Use this file name when uploading the file:
    </span><br />
    <span class="block font-bold text-black ml-4">
        [Agency_Name of Collecting Officer_Reporting Period]
    </span>
    <span class="block text-black ml-4">
        Sample: DPWH-2nd DEO_Maria Clara Cervantes_October 2022
    </span>
</li>

            
            
            <li>
                Note: Kindly merge all the requirements in one single PDF file.
            </li>
        </ul>
    </div>

    <!-- Form -->
    <form class="space-y-4">
        <h2 class="text-lg font-semibold">Submission Details</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Name of Agency -->
            <div>
                <label for="agency" class="block text-sm font-semibold text-gray-700">Name of Agency</label>
                <input
                    id="agency"
                    type="text"
                    placeholder="Bonga National High School"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm focus:ring-black focus:border-black"
                />
            </div>

            <!-- Name of Collecting Officer -->
            <div>
                <label for="nco" class="block text-sm font-semibold text-gray-700">Name of Collecting Officer (NCO) / Local Treasurer (LT)</label>
                <input
                    id="nco"
                    type="text"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- NCOLLT Code -->
            <div>
                <label for="code" class="block text-sm font-semibold text-gray-700">NCO/LT Code</label>
                <input
                    id="code"
                    type="text"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- Contact No. -->
            <div>
                <label for="contact" class="block text-sm font-semibold text-gray-700">Contact No. of the NCO/LT</label>
                <input
                    id="contact"
                    type="text"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- Reporting Period -->
            <div>
                <label for="period" class="block text-sm font-semibold text-gray-700">Reporting Period Covered</label>
                <input
                    id="period"
                    type="text"
                    placeholder="Month and year only (e.g. July 2022)"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- Collections -->
            <div>
                <label for="collections" class="block text-sm font-semibold text-gray-700">Total Amount of Collections in the Submitted Report</label>
                <input
                    id="collections"
                    type="number"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- Deposits -->
            <div>
                <label for="deposits" class="block text-sm font-semibold text-gray-700">Total Amount of Deposits in the Submitted Report</label>
                <input
                    id="deposits"
                    type="number"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>

            <!-- Cash on Hand -->
            <div>
                <label for="cash" class="block text-sm font-semibold text-gray-700">Cash on Hand as of Reporting Date, if any</label>
                <input
                    id="cash"
                    type="number"
                    class="mt-1 block w-full border border-gray-400 rounded shadow-sm"
                />
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-end space-x-2 pt-4">
            <button
                type="button"
                class="px-6 py-2 bg-gray-300 rounded text-sm font-semibold"
            >
                Previous
            </button>
            <button
                type="submit"
                class="px-6 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700"
            >
                Next
            </button>
        </div>
    </form>
</main>
