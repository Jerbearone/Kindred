export default function SearchBar() {
    return (

  <div className="bg-white p-2 w-96 rounded-md">
    <div className="mt-3 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
      <input className="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="Search Products" />
      <spa>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </spa>
    </div>
</div>
    )
}