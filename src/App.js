import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <>
      <div className='container mt-10'>
        <div className="App App-header">
          <h3><span>Welcome</span> Manushri </h3>
          <p>Loyalty Program Name</p>
          <h2>Tier 1 Member</h2>
          <p className='tier'>Member since Octomber, 2023</p>
          
          <div class="container text-center">
            <div class="row">
              <div class="col">2024
                <div class="row">
                <div class="col">Zen Coins</div>
                </div>
              </div>
              
              <div class="col">20
                <div class="row">
                  <div class="col">Available Rewards</div>
                </div>
              </div>
              <div class="col">$234s
                <div class="row">
                  <div class="col">Your Savings</div>
                </div>
              </div>
            </div>
        </div>

        <div class="container">
          <input type="range" class="form-range" id="customRange1"></input>
          <label for="customRange1" class="form-label">Tier 1 </label> 
          <label for="customRange1" class="form-label">Tier 2 <span className='tier'>10000</span></label>
          <label for="customRange1" class="form-label">Tier 3 <span className='tier'>10000</span></label>
        </div>

        </div>
      </div>
      
    </>
  );
}

export default App;
