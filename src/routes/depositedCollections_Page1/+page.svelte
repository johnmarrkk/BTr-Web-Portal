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
    <img
      src="images/BagongPilipinas-logo.png"
      class="h-11"
      alt="Bagong Pilipinas Logo"
    />
  </div>
</nav>

<div
  class="min-h-screen flex justify-center px-6 py-8 bg-gray-100 overflow-y-scroll"
>
  <div class="w-280 h-265 mt-20 bg-white rounded-lg shadow dark:border">
    <h2 class=" text-base ml-10 mt-8 text-lg font-semibold">
      Request for Certification and Confirmation of Deposited National
      Collection
    </h2>
    <h4 class=" text-base ml-10 mt-3 text-lg font-semibold">Instructions:</h4>

    <p
      class="text-black text-xs ml-10 mt-2 font-extralight text-justify whitespace-pre-line dark:text-black"
    >
      • Use this form when requesting for Certification of Deposited National Collections covering periods from August 1, 2022 onward and Confirmation of Deposited Collections prior to August 1,2022. 
      • To ensure prompt processing, please provide ALL information requested below. 
      • Request for Certification CANNOT be processed if there are pending supporting documents/reports necessary for the validation of deposits.
    </p>
    <p></p>
    <h4 class=" text-base ml-10 mt-3 text-lg font-semibold">
      Mandatory Supporting Documents
    </h4>

    <p
      class="text-black text-xs ml-10 mt-2 font-extralight text-justify whitespace-pre-line dark:text-black"
    >
      1. Summary of Detailed Deposited Collection (in case two or more transactions). <br />
      Note: In case of unverified collections, copies of bank validated Deposit Slips and other necessary documents will be requested for further validation.
    </p>
    <p></p>
    <h4 class=" text-base ml-10 mt-8 text-lg font-semibold">
      Certification Requested
    </h4>

    <div class=" container mx-auto px-20 mt-5">
      <div class="grid grid-rows-3 grid-cols-3 gap-6">
        <div class="relative mt-3 w-80">
          <label
            for="provincialOffice"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Provincial Office
          </label>
          <select
            id="provincialOffice"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">Albay</option>
            <option value="camarinesNorte">Camarines Norte</option>
            <option value="camarinesSur">Camarines Sur</option>
            <option value="catanduanes">Catanduanes</option>
            <option value="masbate">Masbate</option>
            <option value="sorsogon">Sorsogon</option>
          </select>
        </div>

        <div class="relative mt-3 w-80">
          <label
            for="typeOfRequest"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Type of Request for Certification
          </label>
          <select
            id="typeOfRequest"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">National Collecting Officer (NCO)</option>
            <option value="camarinesNorte">Agency</option>
          </select>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="bankAccountNumber"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="bankAccountNumber"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Bank Account Number Requested
          </label>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="nameOfAgency"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="nameOfAgency"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name of Agency
          </label>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="nameOfCollectingOfficer"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="nameOfCollectingOfficer"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name Of Collecting Officer
          </label>
        </div>

        <div class="relative mt-3 w-80">
          <label
            for="purposeOfRequest"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Purpose Of Request
          </label>
          <select
            id="purposeOfRequest"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">COA Reconciliation</option>
            <option value="camarinesNorte"
              >Confirmation of Deposit/Agency Reconciliation</option
            >
            <option value="camarinesSur"
              >Attachment to DBM for request of NCA/refund. Please provide
              specific project details_____________________</option
            >
          </select>
        </div>
      </div>
    </div>

    <h4 class=" text-base ml-10 mt-[-45px] text-lg font-semibold">
      Deposited Collections Information
    </h4>

    <div
      id="date-range-picker"
      date-rangepicker
      class="flex items-center ml-20 mt-8"
    >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
            />
          </svg>
        </div>
        <input
          id="datepicker-range-start"
          name="start"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-white dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="mm/dd/yyyy"
        />
      </div>
      <span class="mx-4 text-gray-500">to</span>
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
            />
          </svg>
        </div>
        <input
          id="datepicker-range-end"
          name="end"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-white dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date end"
        />
      </div>
    </div>

    <div class=" container mx-auto px-20 mt-5 border-dashed border-2">
      <div class="grid grid-rows-3 grid-cols-3 gap-6">
        <div class="relative mt-3 w-80">
          <label
            for="provincialOffice"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Provincial Office
          </label>
          <select
            id="provincialOffice"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">Albay</option>
            <option value="camarinesNorte">Camarines Norte</option>
            <option value="camarinesSur">Camarines Sur</option>
            <option value="catanduanes">Catanduanes</option>
            <option value="masbate">Masbate</option>
            <option value="sorsogon">Sorsogon</option>
          </select>
        </div>

        <div class="relative mt-3 w-80">
          <label
            for="typeOfRequest"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Type of Request for Certification
          </label>
          <select
            id="typeOfRequest"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">National Collecting Officer (NCO)</option>
            <option value="camarinesNorte">Agency</option>
          </select>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="bankAccountNumber"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="bankAccountNumber"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Bank Account Number Requested
          </label>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="nameOfAgency"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="nameOfAgency"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name of Agency
          </label>
        </div>

        <div class="relative mt-2.5 w-80">
          <input
            type="text"
            id="nameOfCollectingOfficer"
            class="block px-2.5 pb-1.5 pt-5 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="nameOfCollectingOfficer"
            class="absolute text-xs text-black duration-300 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name Of Collecting Officer
          </label>
        </div>

        <div class="relative mt-3 w-80">
          <label
            for="purposeOfRequest"
            class="absolute left-3 top-1 text-black text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
          >
            Purpose Of Request
          </label>
          <select
            id="purposeOfRequest"
            class="peer block w-full px-3 pt-5 pb-2 text-xs text-gray-900 border border-black rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled selected hidden>- select -</option>
            <option value="albay">COA Reconciliation</option>
            <option value="camarinesNorte"
              >Confirmation of Deposit/Agency Reconciliation</option
            >
            <option value="camarinesSur"
              >Attachment to DBM for request of NCA/refund. Please provide
              specific project details_____________________</option
            >
          </select>
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-30 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Add</button
        >
      </div>
    </div>

    <div
      class=" ml-10 mt-5 mr-10 relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <table
        class="w-full text-sm text-left text-black bg-black border border-gray-200 border-separate"
      >
        <thead
          class="text-xs uppercase bg-blue-400 text-black border border-gray-200"
        >
          <tr class="border border-white">
            <th scope="col" class="px-6 py-3 border border-gray-200"
              >Product Name</th
            >
            <th scope="col" class="px-6 py-3 border border-gray-200">Color</th>
            <th scope="col" class="px-6 py-3 border border-gray-200"
              >Category</th
            >
            <th scope="col" class="px-6 py-3 border border-gray-200">Price</th>
            <th scope="col" class="px-6 py-3 border border-gray-200">Stock</th>
            <th scope="col" class="px-6 py-3 border border-gray-200">Brand</th>
            <th scope="col" class="px-6 py-3 border border-gray-200">Rating</th>
            <th scope="col" class="px-6 py-3 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border border-gray-700 text-center">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-black border border-gray-200"
              >Apple MacBook Pro 17"</th
            >
            <td class="px-6 py-4 border border-gray-200">Silver</td>
            <td class="px-6 py-4 border border-gray-200">Laptop</td>
            <td class="px-6 py-4 border border-gray-200">$2999</td>
            <td class="px-6 py-4 border border-gray-200">In Stock</td>
            <td class="px-6 py-4 border border-gray-200">Apple</td>
            <td class="px-6 py-4 border border-gray-200">4.5/5</td>
            <td class="px-6 py-4 border border-gray-200">
              <a href="#" class="font-medium text-blue-600 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mr-10 mt-10 flex justify-end space-x-4 mt-3">
      <button
        type="button"
        class="px-5 py-1.5 text-sm text-gray-700 bg-gray-300 rounded-lg"
        >Previous</button
      > 
      <button
        type="submit"
        class="px-5 py-1.5 text-sm text-white bg-blue-600 rounded-lg"
        >Next</button
      >
    </div>
  </div>
</div>
