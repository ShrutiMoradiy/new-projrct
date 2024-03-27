import logo from './logo.svg';


function App() {
  return (
    <>
      <section>
        <nav className='bg-black'>
          <div className='flex justify-center'>
            <a className='text-lg font-medium text-white p-3' href='./'>Home</a>
            <a className='text-lg font-medium text-white p-3' href='./tier-1.js'>Tier 1</a>
            <a className='text-lg font-medium text-white p-3' href='./tier-2.js'> Tier 2</a>
          </div>
        </nav>
      </section>

      <section className='relative'>
        <div className='flex flex-col text-center px-5 py-28'>
          <h1 className='text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black'> Welcome...! </h1>
        </div>
      </section>

    </>  
  );
}

export default App;
