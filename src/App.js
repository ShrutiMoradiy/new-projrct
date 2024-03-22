import logo from './logo.svg';
import './App.css';
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
     <>
      <div className='container mt-10'>
        <div className="App App-header">
        <div class="row">
          <div className='col-lg-11'>
          <h3><span>Welcome</span> Manushri</h3> 
          git 
          </div>
          <div className='col-lg-1'>
            <h3><span>x</span></h3> 
          </div>
         </div>
         <p>Loyalty Program Name</p>
          <h2>Tier 1 Member</h2>
          <p className='tier'>Member since Octomber, 2023</p>
          
          <div className="container text-center fns">
            <div className="row">
              <div className="col"><button>2024</button>
                <div className="row">
                <div className="col cont">Zen Coins</div>
                </div>
              </div>
              
              <div className="col"><button>20</button>
                <div className="row">
                  <div className="col cont">Available Rewards</div>
                </div>
              </div>
              <div className="col"><button>$234</button>
                <div className="row">
                  <div className="col cont">Your Savings</div>
                </div>
              </div>
            </div>
        </div>

        <div className="container">
        <div class="message-box bg-white">
                <div class="my-message">
                  <p className='msg-1'>You are here</p>
                </div>
              </div>
          <input type="range" className="form-range" id="customRange1"></input>
          <label for="customRange1" className="form-label">Tier 1 </label> 
          <label for="customRange1" className="form-label">Tier 2 <span className='tier'>10000</span></label>
          <label for="customRange1" className="form-label">Tier 3 <span className='tier'>10000</span></label>
        </div>

        

        </div>
        <div className='container sub-cont'>
          <p className='shop-bene'>Shop for $300 before 22nd Apr, 2024 to upgrade your benefits. Shop Now!</p>
        </div>
        
      </div>
      <div className='container'>
          <div className='sin-in'>
            <div className='container bg-white con-frd'>
              <div className='sin-hadding'>Get $5 by inviting your friends</div>
              <div className='sin-subhad'>Signup to get referral link</div>
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
              <div className='sin-hadding'>How it works?</div>
              <div className='work-subhad mt-10'>Earn ZenCoins with every purchase.</div>
              <div className='work-subhad mt-10'>You can get up to 3 Zen coins for every $100 spent</div>
              <div class="message-box mt-30">
                <div class="my-message">
                  <p className='msg-2'>Hello world</p>
                </div>
              </div>

              <input type="range" className="form-range" id="customRange1"></input>

              <div className='row'>
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
              <div className='sin-hadding'>Why join us?</div>
              <div className='join-us mt-10'>We are more than just a brand, we are a family!</div>
              <div className='join-fea mt-20'>
                <img src='../icon-checks.jpg' />
                Get 50 Points for following us on Facebook</div>
              <div className='join-fea mt-10'>
                <img src='../icon-checks.jpg' />
                Access to exclusive discount and coupons</div>
              <div className='join-fea mt-10'>
                <img src='../icon-checks.jpg' />
                Be part of our loyalty program</div>
            </div>

            <div className='container mt-20 bg-white con-frd'>
              <div className='sin-hadding'>Get $5 by inviting your friends</div>
              <div className='sin-subhad'>Signup to get referral link</div>
              <div className='row'>
                <div className='col'>
                  <input type='text' className='form-con' placeholder='e.g. 975884823'></input>
                </div>
                <div className='col'>
                  <button type='button' className='btn-signup'>Sign Up</button>
                </div>
              </div>
            </div>

            <div className='container mt-20 bg-white con-frd'>
              <div className='sin-hadding'>Get $5 by inviting your friends</div>
              <div className='sin-subhad'>Signup to get referral link</div>
              <div className='row'>
                <div className='col'>
                  <input type='text' className='form-con' placeholder='e.g. 975884823'></input>
                </div>
                <div className='col'>
                  <button type='button' className='btn-signup'>Sign Up</button>
                </div>
              </div>
            </div>

            <div className='container mt-20 bg-white con-frd'>
              <div className='sin-hadding'>Get $5 by inviting your friends</div>
              <div className='sin-subhad'>Signup to get referral link</div>
              <div className='row'>
                <div className='col'>
                  <input type='text' className='form-con' placeholder='e.g. 975884823'></input>
                </div>
                <div className='col'>
                  <button type='button' className='btn-signup'>Sign Up</button>
                </div>
              </div>
            </div>

          </div>
          
        </div>
        

    </>
  );
}

export default App;
