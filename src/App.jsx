import './style/index.css'
import Nav from './components/nav/nav'
import Main from './components/main/main'

function App() {
  return (
    <>
    <div className='main-container'>
        <div>
          <Nav/>
        </div>
        <div>
          <Main/>
        </div>
      </div>
    </>
  )
}

export default App