import './App.css'

function App() {

  return (
    <>
      <Nav/>

      <main>

      </main>
    </>
  )
}

function Nav() {
  return (
    <nav>
      <div>
        <input type="text" />
        <button className='nav-btn-1'>Filter</button>
        <button className='nav-btn-2'>Clear</button>
      </div>
    </nav>
  )
}

export default App
