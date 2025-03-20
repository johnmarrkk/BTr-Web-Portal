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
  <div class="w-100 h-100  bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-white dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                  <input type="email" name="email" id="email" placeholder="name@gmail.com" class=" border border-gray-300 w-full p-2.5 rounded-md" required="">
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class=" border border-gray-300 w-full p-2.5 rounded-md" required="">
              </div>
              <div class="flex items-center justify-between">
                 
                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-blue-600 ">Forgot password?</a>
              </div>
              
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-blue-600">Create Account</a>
              </p>
          </form>
      </div>
  </div>
</div>