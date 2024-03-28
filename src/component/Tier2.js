
import { FaArrowUp, FaCheckDouble, FaCrown, FaBolt, FaGift, FaPiggyBank, FaRocketchat, FaCoins  } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiOutlineBolt,HiBolt } from "react-icons/hi2";
import { BsArrowUpShort,BsArrowRight } from "react-icons/bs";
import { RiCouponLine,RiCheckDoubleFill } from "react-icons/ri";
import { IoChatbubbleOutline,IoCopyOutline,IoChevronBack } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";


function Tier2() {
  return (
     <>
      <section className="grid grid-col-2 place-content-center">
      <div className="col-start-1 m-10">
        <div className='container items-center'>
          <div className="bg-black w-[475px] rounded-t-3xl p-4">
            <div class="flex justify-between">
              <h3 className='text-xl leading-6 text-white font-semibold'><span className='font-thin'>Welcome</span> Manushri</h3> 
              <span className='text-white font-semibold text-xl'><CgClose /></span>
              
            </div>
            <p className='text-[#D4A000] flex pt-3'> <span className='p-1'> <FaCrown /> </span> Loyalty Program Name</p>
            <h2 className='text-white text-3xl uppercase '>Tier 1 Member</h2>
            <p className='text-sm text-white opacity-65 text-normal pt-2'>Member since Octomber, 2023</p>
            
            

            <div className='w-24 h-10 bg-white rounded-sm flex ml-16 mt-4 justify-center'>
              <p className='text-xs font-medium pt-2.5'>You are here
                <div className='bg-white origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2'></div>
              </p>           
            </div>

           
            <div className='bg-neutral-800 min-w-80 h-2 rounded mt-3 items-center justify-between flex'>
              <div className='bg-[#D4A000] w-6 h-6 rounded-full p-2'>
                <div className='bg-[#D4A000] w-[115px] h-2 rounded-e -ml-8 flex justify-between'>
                  <div className='bg-white w-2 h-2 ml-8 rounded'></div>
                  
                </div>
              </div>
              <div className='bg-white w-2 h-2 rounded'></div>
              <div className='bg-white w-2 h-2 rounded'></div>
            </div>
            <div className='flex justify-between pt-3'>
              <p className='text-white text-sm font-semibold grid'> Tier 3 <span className='text-sm font-normal opacity-50'>₹10000</span> </p>
              <p className='text-white text-sm font-semibold grid'> Tier 4 <span className='text-sm font-normal opacity-50'>₹10000</span> </p>
              <p className='text-white text-sm font-semibold grid'> Tier 5 <span className='text-sm font-normal opacity-50'>₹10000</span> </p>
            </div>

            <div className="container flex justify-between pt-4">
              <div className='text-white text-sm font-medium'>
                <button className='bg-[#FFFFFF38] rounded-2xl w-[169px] h-[37px] bg-opacity-[22%] teaxt-center flex items-center justify-around p-[12px]'> 
                <span className='text-white p-[2px] border rounded-full'> <HiOutlineBolt /> </span>20221 Zen Coins</button>
              </div>

              <div className='text-[#F0F0F0] text-center'>
                <a href="" className="text-base font-medium underline underline-offset-2"> View History </a>
              </div>
            
            </div>

          </div>
          <div className='container bg-blue-600 w-[475px] h-[90px] inline-block p-4'>
            <p className='text-white flex text-sm font-medium'> <span className='text-xl p-1'> <PiWarningCircleLight /> </span> Shop for $300 before 22nd Apr, 2024 to upgrade your benefits. Shop Now!</p>
          </div>  
          
        </div>
        <div className='container'>
            <div className='bg-[#F0F0F0] w-[475px] rounded-b-3xl p-[35px]'>
              
              <div className='bg-white h-[91px] shadow rounded-xl flex justify-between'>
                <div className="flex justify-between pt-[20px]">
                  <span className="text-[#364BFF] text-xl p-3"> <RiCouponLine /> </span>
                  <h4 className='text-base font-medium'>₹50 off coupon
                    <p className='text-sm font-normal opacity-55 pt-1'>5000 Points</p>
                  </h4>
                </div>
                <div className="grid grid-rows-3">
                  <div className="bg-[#FF5352] w-[56px] h-[30px] rounded-tr-xl rounded-bl-xl">
                    <span className="text-white text-center p-2.5">New</span>
                  </div>
                  <span className="text-[#364BFF] text-lg row-end-3 p-[5px]"> <BsArrowRight /> </span>
                </div>
              </div>

              <div className='bg-white shadow rounded-xl p-3 mt-3'>
                <h4 className='text-xl font-medium'>Points</h4>
                <p className='text-base font-medium opacity-65 mt-1.5'>Earn more Points for different actions, and turn those Points into awesome rewards!</p>
                <div className='bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex'>
                  <span className='text-blue-600 p-1'><FaCoins /> </span>
                  <label className='text-base font-notmal pl-2'>Ways to earn</label>
                </div>
                <div className='bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex'>
                  <span className='text-blue-600 p-1'><FaGift /> </span>
                  <label className='text-base font-notmal pl-2'> Ways to redeem </label>
                </div>
              </div>


              <div className='bg-white shadow rounded-xl p-3 mt-3'>
                <h4 className='text-xl font-medium'>Respond to a survey and earn 300 points</h4>
                <p className='text-base font-medium opacity-65 mt-1.5'>You can redeem these points on your purchase</p>
                
                <div className='bg-gray-100 bg-opacity-70 h-16 p-2.5 mt-3 rounded-lg flex items-center'>
                  <span className='text-blue-700 text-xl font-medium pr-1.5'> <IoChatbubbleOutline  /> </span>
                  <label className='text-base font-normal'> Which is your favorite speaker under ₹5,000 </label>
                  <button type='button' className='bg-blue-600 text-white w-[70px] h-[37px] rounded-md'>Start</button>
                    
                  
                </div>
              </div>

              <div className='bg-white shadow rounded-xl p-3.5 mt-3'>
                <div className="flex justify-between">
                  <div className="text-center">
                    <h4 className='text-xl font-medium'>Refer your friends</h4>
                    <p className='text-[#647381] text-base font-normal opacity-65 mt-1'>0 referrals selected</p>
                  </div>
                  <div className="p-3.5"> <span className="text-[#364BFF] text-xl"> <BsArrowRight /> </span> </div>
                </div>

                <div className='bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-4 rounded-lg flex justify-between'>
                  <p className='text-base font-normal pl-2'>referral.link/user/harmit</p> 
                  <span className='text-blue-600 text-base p-1.5'><IoCopyOutline /></span> 
                </div>
                
                <div className='flex justify-between mt-3'>
                  <p className='text-sm font-normal opacity-[50%] text-left'>Share your link on</p>
                </div>

                <div className='flex justify-between'>
                  <p className='text-slate-950 text-base font-normal flex items-center'> <span className='text-base font-normal p-2'><LuTwitter /></span> Twitter </p>
                  <p className='text-slate-950 text-base font-normal flex items-center'> <span className='text-base font-normal p-2'> <FiFacebook /></span> Facebook </p>
                  <p className='text-slate-950 text-base font-normal flex items-center'> <span className="text-base font-normal p-2"> <MdOutlineMailOutline /></span> Email </p>
                </div>

            
              </div>

              <div className='bg-white h-[106px] shadow rounded-xl mt-4 p-4'>
                <div className="flex justify-between items-center">
                  <h4 className='text-xl font-medium'>₹50 off coupon
                    <p className='text-base font-medium opacity-55 pt-1'>5000 Points</p>
                  </h4>
                  <span className="text-[#364BFF] text-lg"> <BsArrowRight /> </span>
                </div>
                
              </div>

            </div>
            
        </div>
      </div>

      <div className="col-start-2">
        <div className='container m-10'>
            <div className='bg-white shadow w-[475px] h-auto rounded-3xl p-[35px]'>
              <div className='grid items-center'>
                <p className='text-[#858395] text-xl font-normal'><IoChevronBack /></p>
                <h4 className='text-xl font-medium col-start-2'>Your Points History</h4>
              </div>

              <div className='p-3 mt-3'>
                <div className="-space-x-2.5">
                  <button className="w-[140px] h-[30px] bg-[#f8f6fb] shadow-md border-2 border-gray-400 text-gray-400 items-center rounded-3xl mix-blend-normal"> Earned </button>
                  <button className="w-[240px] h-[30px] border-r-2 border-t-2 border-b-2 border-gray-200 rounded-r-3xl mix-blend-normal"> Used </button>
                </div>

                <div className='flex justify-between'>
                  <div className='mt-[27px]'>
                    <p className='text-base font-medium opacity-[80%] pr-2'>Innisfree Jeju Volcanic Pore Toner 2X</p>
                    <p className='text-[#d18cab] text-sm font-medium pt-2.5'>Order #NYK-188512151-4559319</p>
                    <p className='text-gray-500 text-sm font-normal pt-2.5 flex'>1x Platinum 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> Qty 1 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> 23 Jan 2024</p>
                  </div>

                  <div className='mt-4'>
                    <span className='text-[#6b7280b8] text-xl font-medium'> +1337 </span>  
                  </div>
                </div>
                <div className="border-gray-400 opacity-[70%] h-[2px] mt-3"> <hr /> </div>

                <div className='flex justify-between'>
                  <div className='mt-[20px]'>
                    <p className='text-base font-medium opacity-[78%] pr-2'>Innisfree Hyaluronic Acid Green Tea Seed Serum</p>
                    <p className='text-[#d18cab] text-sm font-medium pt-2.5'>Order #NYK-188512151-4559319</p>
                    <p className='text-gray-500 text-sm font-normal pt-2.5 flex'>1x Platinum 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> Qty 1 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> 23 Jan 2024</p>
                  </div>

                  <div className='mt-3'>
                    <span className='text-[#6b7280b8] text-xl font-medium'> +1977 </span>  
                  </div>
                </div>
                <div className="border-gray-400 opacity-[70%] h-[2px] mt-3"> <hr /> </div>

                <div className='flex justify-between'>
                  <div className='mt-[20px]'>
                    <p className='text-base font-medium opacity-[78%] pr-2'>Plum 15% Vitamin C Glow Face Serum - DErmat Tested To Fight Dark Spots, Pigmentation & Dull Skin</p>
                    <p className='text-[#d18cab] text-sm font-medium pt-2.5'>Order #NYK-188512151-4559319</p>
                    <p className='text-gray-500 text-sm font-normal pt-2.5 flex'>1x Platinum 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> Qty 1 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> 23 Jan 2024</p>
                  </div>

                  <div className='mt-3'>
                    <span className='text-[#6b7280b8] text-xl font-medium'> +694 </span>  
                  </div>
                </div>
                <div className="border-gray-400 opacity-[70%] h-[2px] mt-3"> <hr /> </div>

                <div className='flex justify-between'>
                  <div className='mt-[20px]'>
                    <p className='text-base font-medium opacity-[78%] pr-2'>Plum Bodylovin' Vanilla Vibes Body Oil</p>
                    <p className='text-[#d18cab] text-sm font-medium pt-2.5'>Order #NYK-188512151-4559319</p>
                    <p className='text-gray-500 text-sm font-normal pt-2.5 flex'>1x Platinum 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> Qty 1 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> 23 Jan 2024</p>
                  </div>

                  <div className='mt-3'>
                    <span className='text-[#6b7280b8] text-xl font-medium'> +284 </span>  
                  </div>
                </div>
                <div className="border-gray-400 opacity-[70%] h-[2px] mt-3"> <hr /> </div>

                <div className='flex justify-between'>
                  <div className='mt-[20px]'>
                    <p className='text-base font-medium opacity-[78%] pr-2'>Dot & Key Strawberry Dew SPF 50 Sunscreen Stick On-THe-Go</p>
                    <p className='text-[#d18cab] text-sm font-medium pt-2.5'>Order #NYK-188512151-4559319</p>
                    <p className='text-gray-500 text-sm font-normal pt-2.5 flex'>1x Platinum 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> Qty 1 
                    <div className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></div> 23 Jan 2024</p>
                  </div>

                  <div className='mt-3'>
                    <span className='text-[#6b7280b8] text-xl font-medium'> +564 </span>  
                  </div>
                </div>
                <div className="border-gray-400 opacity-[70%] h-[2px] mt-3"> <hr /> </div>

                <div className='flex justify-between'>
                  <div className='mt-[20px]'>
                    <p className='text-base font-medium opacity-[78%] pr-2'>Plum BodyLovin' Hawaiian Rumba DEodorant Roll-On Controls Underarm Odor</p>

                  </div>

                  <div className='mt-3'>
                    <span className='text-gray-500 text-xl font-medium'> +269 </span>  
                  </div>
                </div>
                
              </div>

              

            </div>
            
        </div>
      </div>
      </section>
    </>
  );
}

export default Tier2;
