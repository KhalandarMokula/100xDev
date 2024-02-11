import { AvailableCredits } from "./AvailableCredits"
import { InfoItem } from "./InfoItem"
import { SideBarListItem } from "./SideBarListItem"

export const  SideNavBar =() => {
    var MenuList = ["Home", "Orders", "Products", "Delivery", "Marketing", "Analytics", "Payouts", "Discounts", 
    "Audience", "Appearance", "Plugins"]
    return (
        <div className="hidden md:block bg-gray-800 w-[224px] flex justify-around flex-col min-h-screen fixed">   
            <div> 
                <InfoItem></InfoItem>
            </div>  
           
            <div> 
                <aside id="default-sidebar" class="w-48 pt-2px flex-none ">
                    <ul className='mt-0 pt-5' >
                        {
                        MenuList.map((item,index)=> (
                            <li key={index} class="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                                <SideBarListItem title={item}/>
                            </li>
                        ))
                        }
                    </ul>
                </aside>
            </div>
            <div className="pt-20 m-4"> 
                <AvailableCredits /> 
            </div>
        </div>
    )
}