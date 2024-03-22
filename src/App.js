import logo from './logo.svg';
import './App.css';
import { FaBeer } from "react-icons/fa";

function App() {
  return (
     <>
      <div className='container mt-10'>
        <div className="App App-header">
        <div class="row">
          <div className='col-lg-11'>
          <h3><span>Welcome</span> Manushri</h3> 
          
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
          <input type="range" className="form-range" id="customRange1"></input>
          <label for="customRange1" className="form-label">Tier 1 </label> 
          <label for="customRange1" className="form-label">Tier 2 <span className='tier'>10000</span></label>
          <label for="customRange1" className="form-label">Tier 3 <span className='tier'>10000</span></label>
        </div>

        

        </div>
        <div className='container sub-cont'>
          <p className='shop-bene'>Shop for $300 before 22nd Apr, 2024 to upgrade your benefits. Shop Now!</p>
        </div>
        <div className='container-flud sin-in'>
          <p>
          Get $5 by inviting your friends
          </p>
        </div>
      </div>
      

    </>
  );
}

export default App;
