import { Table } from "./data-components/Table"

export const Data = ()=> {
    return (
        <div className="flex flex-col justify-between  m-3 p-2 space-y-4"> 

            <h5 class="font-medium text-[#1A181E] text-xl">Transactions | This Month</h5>
            <div class="flex gap-3">
                <button class="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">Payouts (22)</button>
                <button class="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">Refunds (6)</button>
            </div>

            <div className="flex flex-col justify-between  bg-white rounded "> 
                <div class="m-4 flex justify-between">
                    {/* Add box border to the search bar */}
                    <div className="m-2 flex space-x-2 items-center w-[270px] h-[32px] pl-2 border border-gray-300"> 
                        <div className=" flex space-x-2 items-center w-[270px] h-[23px] bg-white rounded"> 
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
                            <input type="search"  placeholder="Order ID or transactions ID"  className="bg-white placeholder-text-xs" required></input>
                        </div>
                    </div>
                    <div  className="flex items-center  space-x-2 pr-4">
                        <button class="bg-white border border-gray-300 p-1 rounded"> Sort ||</button>
                        <button className="bg-white border border-gray-300  p-1 rounded"> Download </button>
                    </div>                    
                </div>
                <div className="m-2"> <Table /></div>
                {/* Insert a Table */}
                
            </div>

       
        </div>
    )
}