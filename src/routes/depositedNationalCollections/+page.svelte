<script>
    // @ts-nocheck
    import PrivacyAct from '../dataPrivacyAct/privacyAct.svelte';
import privacyAct from '../dataPrivacyAct/privacyAct.svelte';
    </script>
    
    <nav class="bg-blue-900 h-16 flex fixed w-full items-center ">
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
    
  
    <div class="m w-full pt-5 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-280 h-140 bg-white rounded-lg shadow dark:border dark:bg-white dark:border-gray-300">

            <h2 class=" text-base ml-10 mt-8  text-lg font-semibold">Request for Certification and Confirmation of Deposited National Collection</h2>
            <h2 class=" text-base ml-10 mt-3 text-lg font-semibold">Concent to collect, use, share and store information.</h2>

            <p class=" text-xs ml-10 mt-3 text-sm text-gray-600 mt-2">
                BTr requires your consent before it collects personal and sensitive personal information. <br>
                By submitting this form, you are agreeing & giving BTr consent to collect, use, share and store these informations.
              </p>

              <PrivacyAct />
              
            <div class="flex items-center ml-10 mt-5 mb-5">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-800">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
            </div>

            <div class="mr-10 flex justify-end space-x-2 p-3">
              <button class="text-sm px-5 py-1.5 bg-gray-300 text-black rounded-lg">Cancel</button>
              <button class="text-sm px-5 py-1.5 bg-blue-600 text-white rounded-lg">Next</button>
            </div>

              
        </div>
    </div>
    
        
       
    
      