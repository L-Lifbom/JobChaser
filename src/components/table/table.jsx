import React, { useEffect, useState } from "react";
import axios from "axios"

function Table() {
    const [jobs, setJobs] = useState([])

    async function fetchJobs() {
        const url = 'https://jobsearch.api.jobtechdev.se/search?q=utvecklare';
    
        try {
            const response = await axios.get(url);
            setJobs(response.data.hits)
            Table(jobs)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJobs()
    }, []);

    return (
        <main>
            <table>
                <thead>
                <tr>
                    <th>Logo</th>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Level</th>
                    <th>Location</th>
                    <th>Contract</th>
                </tr>
                </thead>
                <tbody className='data-template'>
                {jobs.map((job) => {
                    return (
                        <JobRow
                        key={job.id}
                        logo={job.logo_url}
                        company={job.employer.name}
                        role={job.headline}
                        level={job.level}
                        location={job.workplace_address.municipality}
                        contract={job.salary_description}
                        />
                    )
                    })}
                </tbody>
            </table>
        </main>
    )
}


function JobRow({ logo, company, position, role, level, location, contract }) {
    return (
        <tr>
        <td><img src={logo} alt="N/A"/></td>
        <td>{company}</td>
        <td>{role}</td>
        <td>{level}</td>
        <td>{location}</td>
        <td>{contract}</td>
        </tr>
    )
}

export default Table