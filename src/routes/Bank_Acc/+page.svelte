<script>
    // @ts-nocheck
    </script>
    
    <nav class="bg-blue-900 h-16 flex fixed w-full items-center">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="images/BTR_logo.png" class="h-11 m-3" alt="BTR Logo" />
      </a>
      <div class="flex flex-col leading-tight">
        <span
          class="self-center text-xl font- inter whitespace-nowrap dark:text-white"
          >BUREAU OF THE TREASURY</span
        >
        <span class=" text-xs font-semibold whitespace-nowrap dark:text-white">
          REGIONAL OFFICE V</span
        >
      </div>
    
      <div class="flex items-center mr-3 ml-auto space-x-4">
        <img src="images/DOF-logo.png" class="h-11" alt="DOF Logo" />
        <img src="images/BagongPilipinas-logo.png" class="h-11" alt="Bagong Pilipinas Logo" />
      </div>
    </nav>
 <div class="w-full pt-5 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-200 h-180 bg-white rounded-lg shadow dark:border md:mt-20 border-gray-300">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="space-y-1 md:space-y-3" action="#">

                    <h2 class="text-base font-bold">Request for Opening  Bank Account</h2>
                    <h2 class="text-base font-bold">Instructions</h2>

                    <p class="text-black text-sm font-normal whitespace-pre-line dark:text-black">
                        • Use this form when requesting for Opening of Bank Account in BTr Albay.
                        • To ensure prompt processing, please provide <strong>ALL</strong> information requested below.
                        • Request for Opening Bank Account <strong>CANNOT</strong> be processed if there is/are pending supporting documents/reports necessary in the approval of request.
                    <p>
                       <h3 class="font-bold">Mandatory Supporting Documents</h3>
                    <ol class="text-sm list-decimal pl-5 space-y-1">
                    <li>Letter Request from Agency</li>
                    <li>Request for Authority to Open Bank Account (Form 1)</li>
                    <li>Undertaking (Form 2)</li>
                    <li>
                        Waiver of Confidentiality (Form 3)
                        <ol class="list-[lower-alpha] pl-6 space-y-1">
                        <li>
                            <a href="#" class="text-blue-700 hover:underline">BTr Form 3-A for MDS sub-accounts</a>
                        </li>
                        <li>
                            <a href="#" class="text-blue-700 hover:underline">BTr Form 3-B for Other accounts</a>
                        </li>
                        </ol>
                    </li>
                    <li>Legal Basis to support the opening of bank account</li>
                    <li>
                        See attached 
                        <a href="#" class="text-blue-700 hover:underline">TC 5-2022 for the enhanced BTr Form 1 and 3</a>
                    </li>
                    </ol>
                       <h2 class="text-base font-bold">Agency Information</h2>

<div class="space-y-4">
  <div class="grid grid-cols-2 gap-4">

    <!-- Name of Agency -->
    <div class="relative">
      <input type="text" id="agencyName" value="Bonga National High School"
        class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" />
      <label for="agencyName"
        class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        Name of Agency
      </label>
    </div>

    <!-- Volume of Request -->
    <div class="relative w-full">
      <label for="volumeOfRequest"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Volume of Request
      </label>
      <select id="volumeOfRequest"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Type of Bank Account -->
    <div class="relative w-full">
      <label for="bankAccountType"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Type of Bank Account
      </label>
      <select id="bankAccountType"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Purpose/Legal Basis -->
    <div class="relative">
      <input type="text" id="purpose"
        class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" />
      <label for="purpose"
        class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        Purpose/Legal Basis
      </label>
    </div>

    <!-- Period of Implementation -->
    <div class="relative">
      <input type="text" id="period"
        class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="dd/mm/yyyy" />
      <label for="period"
        class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        Period of Implementation
      </label>
    </div>

    <!-- Funding Source -->
    <div class="relative w-full">
      <label for="fundingSource"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Funding Source
      </label>
      <select id="fundingSource"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Funding Source Code -->
    <div class="relative w-full">
      <label for="fundingSourceCode"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Funding Source Code
      </label>
      <select id="fundingSourceCode"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Bank Name -->
    <div class="relative w-full">
      <label for="bankName"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Bank Name
      </label>
      <select id="bankName"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Bank Branch -->
    <div class="relative w-full">
      <label for="bankBranch"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Bank Branch
      </label>
      <select id="bankBranch"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Authorized Signatory/s -->
    <div class="relative">
      <input type="text" id="authorizedSignatories"
        class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" />
      <label for="authorizedSignatories"
        class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        Authorized/ Signatory/s
      </label>
    </div>

    <!-- Fidelity Bond Risk Number -->
    <div class="relative w-full">
      <label for="fidelityNumber"
        class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
        Fidelity Bond Risk Number of the Authorized Signatory/s
      </label>
      <select id="fidelityNumber"
        class="peer block w-full px-2.5 py-2 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        <option value="" disabled selected>-select-</option>
      </select>
    </div>

    <!-- Validity of Fidelity Bond -->
    <div class="relative">
      <input type="text" id="bondValidity"
        class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" />
      <label for="bondValidity"
        class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        Validity of Fidelity Bond
      </label>
    </div>

  </div>
</div>

                        
                        
                    <div class="flex justify-end space-x-2 p-3">
                        <button class="text-sm px-5 py-1.5 bg-gray-300 text-black rounded-lg">Previous</button>
                        <button class="text-sm px-5 py-1.5 bg-blue-600 text-white rounded-lg">Submit</button>
                    </div>

                </form>
            </div>
        </div>
      </div>
    