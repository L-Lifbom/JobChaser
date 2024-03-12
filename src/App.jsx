import './App.css'



function App() {
  return (
    <>
      <Nav/>
      <main>
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Company</th>
              <th>Position</th>
              <th>Role</th>
              <th>Level</th>
              <th>Location</th>
              <th>Contract</th>
            </tr>
          </thead>
          {data.map((job) => {
            return (
              <Form
                key={job.id}
                logo={job.logo}
                company={job.company}
                position={job.position}
                role={job.role}
                level={job.level}
                location={job.location}
                contract={job.contract}
              />
            )
          })}
        </table>
      </main>
    </>
  )
}

function Nav() {
  return (
    <div className='nav-bar'>
      <input type="text" className='nav-input' placeholder='Search'/>
      <button className='nav-btn-1'>Filter</button>
      <button className='nav-btn-2'>Clear</button>
    </div>
  )
}

function Form({ logo, company, position, role, level, location, contract }) {
  return (
      <tbody className='data-template'>
        <tr>
          <td><img src={logo} alt="N/A"/></td>
          <td>{company}</td>
          <td>{position}</td>
          <td>{role}</td>
          <td>{level}</td>
          <td>{location}</td>
          <td>{contract}</td>
        </tr>
      </tbody>
  )
}

export default App
