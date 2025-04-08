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
        <div class="w-200 h-130  bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-white dark:border-gray-300">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="space-y-1 md:space-y-3" action="#">

                    <h2 class="text-base font-bold">Request for Deposited National Collections</h2>
                    <h2 class="text-base font-bold">Mandatory Supporting Documents</h2>
                    <h2 class="text-sm font-normal">1. Summary of Detailed Deposited Collection (in case two or more transactions).</h2>
                    <h2 class="text-xs font-normal">Note: In case of unverified collections, copies of bank validated Deposit Slips and other necessary documents will be requested for further validation.</h2>
                    <h2 class="text-base font-bold">Please take note of the following in uploading the file:</h2>
                    
                    <p class="text-black text-xs font-normal whitespace-pre-line dark:text-black">
                     • All files to be uploaded as attachments must be in <strong>.PDF</strong> format.
                     • Please ensure to upload a clear/readable version of the file attachment.
                     • Use the prescribed file name: [Agency_Name of Collecting Officer_Period Covered_Document Name]
                    <p>

                        <h2 class="text-xs font-bold">Summary of Detailed Deposited Collections</h2>
                        <h2 class="text-sm font-normal">Use the prescribed file name: [Agency_Name of Collecting Officer_Period Covered_Document Name]</h2>
                        <h2 class="text-xs font-normal">Select PDF file</h2>

                        
                        <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload File</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none" 
                            id="file_input" type="file" accept="application/pdf">
                        <p class="mt-1 text-xs text-gray-500" id="file_input_help">File format accepted: PDF (Max. file size 100 mb)</p>
                        
                        <div class="flex justify-end space-x-4 mt-3">
                            <button type="button" class="px-5 py-1.5 text-sm text-gray-700 bg-gray-300 rounded-lg">Previous</button>
                            <button type="submit" class="px-5 py-1.5 text-sm text-white bg-blue-600 rounded-lg">Next</button>
                        </div>

                </form>
            </div>
        </div>
      </div>