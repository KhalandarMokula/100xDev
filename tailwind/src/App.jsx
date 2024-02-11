import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // Import your Tailwind CSS file
import { RevenueCard } from './components/RevenueCard';
import { TitleBar } from './components/TitleBar';
import { SideNavBar } from './components/SideNavBar';
import { Overview } from './components/OverView';
import { Data } from './components/Data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> 

      {/* The following component should have flex-none */}
      {/* <div className="hidden  md:block h-full  transition delay-1500 ease-in-out bg-gray-800 flex flex-col justify-between"> 
        <SideNavBar/> 
      </div> */}
      
      <SideNavBar className="fixed"/> 
      {/* The following component should have flex-wrap */}
      <div className='flex-none w-full md:pl-[224px]' > 
        <TitleBar className="w-fill"/> 
        <div className='bg-gray-100'>
          <Overview ></Overview>
          <div className='flex flex-wrap gap-5' style={{padding:'10px', paddingRight:'0px'}}> 

            <RevenueCard className="w-full sm: 1/2 md: 1/3" title={"Next Payout"} amount={"2,312.23"} orderCount={23} showOrders={true} showReminder={true} time ={"4:00PM"}> </RevenueCard>
            <RevenueCard className="w-full sm: 1/2 md:1/3" title={"Amount Pending"} amount={"91,000"} orderCount={15} showOrders={true}> </RevenueCard>
            <RevenueCard className="sm: 1/2 md: 1/3" title={"Amount Processed"} amount={"23,92,312.19"} showOrders={false}> </RevenueCard>
          </div>
          <Data/>
        </div>
      </div>
     
    
    </div>
    </>
  )
}

export default App
