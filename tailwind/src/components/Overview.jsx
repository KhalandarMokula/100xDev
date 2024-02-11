export const Overview = ()=> {
    return (
        <div className="flex items-center justify-between p-2">
            <h2 className="font-medium"> Overview</h2>
           <button className=" flex items-center  border rounded px-[14x] py-[16x] bg-white text-[#4D4D4D]">
                <div className=" flex flex-wrap items-center justify-between space-x-2 pl-3 pr-3"> 
                <div> This Month</div> 
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                </div> 
            </button>

        </div>
    )
}