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
        <div class="w-120 h-150  bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-white dark:border-gray-300">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" >
                        
                    <h2 class="text-lg font-bold">Password & Security</h2>
                    <div class="border-b mt-4">
                        <nav class="flex space-x-10">
                            <button class="text-gray-500 text-sm pb-2">Account</button>
                            <button class="text-blue-600 text-sm font-bold border-b-2 border-blue-600 pb-2">Change Password</button>
                        </nav>
                    </div>
                        <p class="text-sm text-gray-700">Create a new password that is at least 8 characters long.</p>
                        
                        <!-- Current Password -->
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block mt-4 text-sm font-medium">Type your current password <span class="text-red-500">*</span></label>
                        <div class="relative">
                            <input type="password" class="w-full border border-black rounded p-2 pr-10">
                            <span class="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">

                            </span>
                        </div>
                
                        <!-- New Password -->
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block mt-4 text-sm font-medium">Type your new password <span class="text-red-500">*</span></label>
                        <div class="relative">
                            <input type="password" class="w-full border border-black rounded p-2 pr-10">
                            <span class="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                                
                            </span>
                        </div>
                
                        <!-- Retype Password -->
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block mt-4 text-sm font-medium">Retype your new password <span class="text-red-500">*</span></label>
                        <div class="relative">
                            <input type="password" class="w-full border border-black rounded p-2 pr-10">
                            <span class="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                                
                            </span>
                        </div>
                
                        <!-- Buttons -->
                        <div class="flex justify-end space-x-4 mt-6">
                            <button type="button" class="px-5 py-2.5 text-gray-700 bg-gray-300 rounded-lg">Cancel</button>
                            <button type="submit" class="px-5 py-2.5 text-white bg-blue-600 rounded-lg">Save Password</button>
                        </div>

                </form>
            </div>
        </div>
      </div>

        
       
    
    