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
        <div class="w-200 h-200 bg-white rounded-lg shadow dark:border md:mt-30 border-gray-300">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="space-y-1 md:space-y-3" action="#">

                    <h2 class="text-base font-bold">Request for Re-Order of MDS Check</h2>
                    <h2 class="text-base font-bold">Instructions</h2>

                    <p class="text-black text-sm font-normal whitespace-pre-line dark:text-black">
                        • Use this form when requesting for Re-Order of MDS check Booklets in Region V.
                        • To ensure prompt processing, please provide <strong>ALL</strong> information requested below.
                        • Request for Re-Order <strong>CANNOT</strong> be processed if there is/are pending supporting documents/reports necessary in the approval of request.
                    <p>
                        <h3 class="font-bold">Mandatory Supporting Documents</h3>
                        <ol class="text-sm list-decimal pl-5">
                            <li>
                                Letter Request (Form 1)<br>
                                <a href="https://drive.google.com/file/d/17C72CRkDoq5qr0fSupelkElruDZYNkf5/view" 
                                   class="text-blue-600 text-xs underline" target="_blank">
                                   See attached TC 4-2022 for the revised format
                                </a>
                            </li>
                            <li>Monthly Estimate of Inventory/AP that cannot be paid thru ADA (Form 2)</li>
                            <li>Report of Accountability for Accountable Forms (RAAFs) for MDS (Latest 3 months)</li>
                        </ol>
                        <h2 class="text-base font-bold">Agency Information</h2>

                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <!-- Provincial Office Dropdown -->
                                <div class="relative w-full">
                                    <label for="provincialOffice" class="absolute left-3 top-0 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                                        Provincial Office
                                      </label>
                                    <select id="provincialOffice" class="block w-full px-2.5 py-3 text-sm text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                                        <option value="" disabled selected>- select -</option>
                                        <option value="albayPO">Albay</option>
                                        <option value="camarinesNortePO">Camarines Norte</option>
                                        <option value="camarinesSurPO">Camarines Sur</option>
                                        <option value="catanduanesPO">Catanduanes</option>
                                        <option value="sorsogonPO">Sorsogon</option>
                                        <option value="masbatePO">Masbate</option>
                                    </select>
                                </div>
                        
                                <div class="relative">
                                    <input type="agency_name" id="agency_name" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                    <label for="agency_name" class="absolute text-xs text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Name of Agency
                                    </label>
                                </div>

                                <div class="relative">
                                    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating filled</label>
                                </div>

                                <div class="relative">
                                    <input type="agency_name" id="agencyHead_name" class="block px-2.5 pb-2.5 pt-4 w-full text-xs text-black bg-transparent rounded-lg border-1 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                    <label for="agencyHead_name" class="absolute text-xs text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Name of Agency
                                    </label>
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