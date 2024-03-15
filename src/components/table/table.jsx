const url = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';

async function fetchJobs(url) {

    try {
        const response = await get(url);
    } catch (error) {
        console.error(error)
    }



}

fetchJobs()

function Table() {
    return (
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

export default Table