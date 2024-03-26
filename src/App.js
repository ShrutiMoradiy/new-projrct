import logo from './logo.svg';
import './App.css';
import { FaArrowUp, FaCheckDouble, FaCrown, FaBolt, FaGift, FaPiggyBank, FaRocketchat, FaCoins  } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";

function App() {
  return (
     <>
      <div className='container mt-10'>
        <div className="bg-black w-96 rounded-t-3xl p-4">
          <div class="flex justify-between">
            <h3 className='text-xl leading-6 text-white font-semibold'><span className='font-thin'>Welcome</span> Manushri</h3> 
            <span className='text-white font-semibold text-xl'><CgClose /></span>
            
          </div>
          <p className='text-blue-700 flex pt-10'> <span className='p-1'> <FaCrown /> </span> Loyalty Program Name</p>
          <h2 className='text-white text-3xl uppercase '>Tier 1 Member</h2>
          <p className='text-sm text-white opacity-65 text-normal pt-3'>Member since Octomber, 2023</p>
          
          <div className="container flex justify-between pt-4">
            <div className='text-white'>
              <button className='bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2'> 
              <span className='text-blue-700 p-1'> <FaBolt /> </span>2024</button>
              <p className="text-xs tetx-normal text-center pt-1 opacity-95">Zen Coins</p>
            </div>

            <div className='text-white'>
              <button className='bg-gray-400 rounded-2xl min-w-20 h-9 bg-opacity-10 flex items-center justify-center p-2'> 
              <span className='text-blue-700 p-1'> <FaGift /> </span> 20</button>
              <p className="text-xs tetx-normal text-center pt-1 opacity-95">Available Rewards</p>
            </div>

            <div className='text-white'>
              <button className='bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2'> 
              <span className='text-blue-700 p-1'> <FaPiggyBank /> </span> $234</button>
              <p className="text-xs tetx-normal text-center pt-1 opacity-95">Your Savings</p>
            </div>
          
          </div>

          <div className='w-24 h-10 bg-white rounded-sm flex ml-16 mt-4 justify-center'>
            <p className='text-xs font-medium pt-2.5'>You are here
              <div className='bg-white origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2'></div>
            </p>           
          </div>

          <div className='bg-neutral-800 min-w-80 h-2 rounded mt-3 items-center justify-between flex'>
            <div className='bg-blue-700 w-6 h-6 rounded-full p-2'>
              <div className='bg-blue-700 w-20 h-2 rounded flex justify-between'>
                <div className='bg-white w-2 h-2 rounded'></div>
              </div>
            </div>
            <div className='bg-white w-2 h-2 rounded'></div>
            <div className='bg-white w-2 h-2 rounded'></div>
          </div>

        </div>
        <div className='container bg-blue-700 w-96 h-20 inline-block p-3.5'>
          <p className='text-white flex text-sm'> <span className='p-1'> <PiWarningCircleLight /> </span> Shop for $300 before 22nd Apr, 2024 to upgrade your benefits. Shop Now!</p>
        </div>
        
      </div>
      <div className='container'>
          <div className='bg-slate-50 w-96'>
            <div className='container bg-white con-frd'>
              <h4 className='sin-hadding'>Get $5 by inviting your friends</h4>
              <p className='sin-subhad'>Signup to get referral link</p>
              <div className='row'>
                <div className='col'>
                  <input type='text' className='form-con' placeholder='e.g. 975884823'></input>
                </div>
                <div className='col'>
                  <button type='button' className='btn-signup'>Sign Up</button>
                </div>
              </div>
            </div>

            <div className='container mt-20 bg-white con-work'>
              <h4 className='sin-hadding'>How it works?</h4>
              <p className='work-subhad mt-10'>Earn ZenCoins with every purchase.</p>
              <p className='work-subhad'>You can get up to 3 Zen coins for every $100 spent</p>
              <div class="message-box mt-30">
                <div class="my-message">
                  <p className='msg-2'>Start here</p>
                </div>
              </div>

              <div className='work-pro mt-10'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>
                  <div className='col-lg-1'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>
                  <div className='col-lg-4'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>
                  <div className='col-lg-1'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>
                  <div className='col-lg-1'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>
                  <div className='col-lg-1'>
                    <div className='work-icon'> <span> <FaBolt /> </span></div> 
                  </div>

                </div> 
              </div>

              <div className='row mt-20'>
                <div className='col-4'>
                   <label className="form-label-1">Tier 1 <span className='tier-1'>Shop for $50 to enroll</span></label> 
                </div>
                <div className='col-4'>
                  <label className="form-label-1">Tier 2 <span className='tier-1'>Shop for $50 + $10 to upgrade</span></label>
                </div>
                <div className='col-4'>
                  <label className="form-label-1">Tier 3 <span className='tier-1'>Shop for $50 + $25 to upgrade</span></label>
                </div>
              </div>
              <div className='shope-on mt-30'>
                <div className='row'>
                  <div className='col-1'> <span><FaArrowUp /></span> </div>
                  <div className='col-11'> <p>Shop on Techmonk to upgrade your Tier</p> </div>
                </div>
              </div>
          
            </div>

            <div className='container mt-20 bg-white con-join'>
              <h4 className='sin-hadding'>Why join us?</h4>
              <p className='join-us mt-10'>We are more than just a brand, we are a family!</p>
              <div className='join-fea mt-20'>
                <span><FaCheckDouble /> </span>
                <label> Get 50 Points for following us on Facebook </label>
              </div>
              <div className='join-fea mt-10'>
                <span><FaCheckDouble /> </span>
                <label> Access to exclusive discount and coupons </label>
              </div>
              <div className='join-fea mt-10'>
                <span><FaCheckDouble /> </span>
                <label> Be part of our loyalty program </label>
              </div>
            </div>

            <div className='container mt-20 bg-white con-respond'>
              <h4 className='sin-hadding'>Respond to a survey and earn 300 points</h4>
              <p className='join-us mt-10'>You can redeem these points on your purchase</p>
              
              <div className='respond mt-20'>
                <div className='row'>
                  <div className='col-lg-1'>
                    <span> <FaRocketchat /> </span>
                  </div>
                  <div className='col-8'>
                    <label> Which is your favorite speaker under ₹5,000 </label>
                  </div>
                  <div className='col-lg-3'>
                    <button type='button' className='btn-respond'>Start</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='container mt-20 bg-white con-point'>
              <h4 className='sin-hadding'>Points</h4>
              <p className='join-us mt-10'>Earn more Points for different actions, and turn those Points into awesome rewards!</p>
              <div className='join-fea mt-20'>
                <span><FaCoins /> </span>
                <label>Ways to earn</label>
              </div>
              <div className='join-fea mt-10'>
                <span><FaGift /> </span>
                <label> Ways to redeem </label>
              </div>
            </div>


          </div>
          
        </div>
        

    </>
  );
}

export default App;
