export const Table = ()=> {
    return (
        <div> 
            <table class="min-w-full">
                <thead  class="text-[#4D4D4D]">
                    <tr class="bg-[#F2F2F2]">
                        <th >Order ID</th>
                        <th>Status</th>
                        <th>Transaction ID</th>
                        <th>Refund Date</th>
                        <th>Order Amount</th>
                    </tr>
                </thead>

                    <tbody class="bg-white divide-[#E6E6E6]">
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281209</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX123456</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 8:45 PM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281210</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing
                            </td><td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX789012</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 10:00 AM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281211</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX345678</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 3:30 PM</td><td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹750.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281212</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                                <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX901234</td>
                                <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 11:20 AM</td>
                                <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹2000.00</td>
                                <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281213</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                                Processing</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX567890</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 9:00 AM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1800.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281214</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                                Processing
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX098765</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 2:00 PM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹500.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281215</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX456789</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 10:30 AM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹3000.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281216</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX987654</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 11:30 AM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1200.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281217</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX654321</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 4:00 PM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹900.00</td>
                            <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                        </tr>
                        <tr class="text-sm relative">
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281218</td>
                            <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful
                            </td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX234567</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 9:45 AM</td>
                            <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1500.00</td>
                        </tr>
                    </tbody>
                <tbody>
            
                </tbody>
        </table>
      </div>
    )
}