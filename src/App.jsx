import './style/index.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Table from './components/main/table'

function App() {
  return (
    <>
    <div className='main-container'>
        <div>
          <Nav/>
        </div>
        <div>
          <Header/>
          <Table/>
        </div>
      </div>
    </>
  )
}

export default App