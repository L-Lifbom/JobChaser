import React, { useEffect, useState } from "react";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './table.module.css'


function Table({ filter }) {
    const [jobs, setJobs] = useState([])

    async function fetchJobs() {
        const url = 'https://jobsearch.api.jobtechdev.se/search?q=utvecklare';
    
        try {
            const response = await axios.get(url);
            setJobs(response.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJobs()
    }, []);

    const filteredJobs = jobs.filter(job => 
        job.employer.name.toLowerCase().includes(filter.toLowerCase()) ||
        job.headline.toLowerCase().includes(filter.toLowerCase()) ||
        (job.workplace_address && job.workplace_address.municipality && job.workplace_address.municipality.toLowerCase().includes(filter.toLowerCase()))
    );

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
                    {filteredJobs.map((job) => {
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


function JobRow({ logo, company, role, level, location, contract }) {
    const verifyValue = (value) => value ? value : "-";

    return (
        <tr>
        <td><img src={logo} alt="N/A"/></td>
        <td>{verifyValue(company)}</td>
        <td>{verifyValue(role)}</td>
        <td>{verifyValue(level)}</td>
        <td>{verifyValue(location)}</td>
        <td>{verifyValue(contract)}</td>
        </tr>
    )
}

export default Table