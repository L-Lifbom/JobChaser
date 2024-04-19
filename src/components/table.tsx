import React, { useEffect, useState } from "react";
import axios from "axios"
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import type { RootState } from '../store/store';

interface TableProps {
  filter: string;
}

interface Job {
  id: string;
  logo_url: string;
  employer: {
    name: string;
  };
  headline: string;
  workplace_address: {
    municipality: string;
  };
  salary_description: string;
  webpage_url: string;
  working_hours_type: {
    label: string;
  };
}


function Table({ filter }: TableProps): JSX.Element {
    const [jobs, setJobs] = useState<Job[]>([])
    const { heltid, deltid } = useSelector((state: RootState) => state.filter);

    async function fetchJobs() {
        const url = 'https://jobsearch.api.jobtechdev.se/search?q=utvecklare&offset=0&limit=100';
    
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

    const filteredJobs = jobs.filter(job => {
        const searchMatch = job.employer.name.toLowerCase().includes(filter.toLowerCase()) || job.headline.toLowerCase().includes(filter.toLowerCase()) || job.workplace_address?.municipality?.toLowerCase().includes(filter.toLowerCase());

        const hoursType = job.working_hours_type?.label?.toLowerCase();
        const hoursMatch = (!heltid && !deltid) || (heltid && deltid) || (heltid && hoursType === 'heltid') || (deltid && hoursType === 'deltid');

        return searchMatch && hoursMatch;
    });



    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Contract</th>
                        <th>Work Hours</th>
                        <th>Link</th>
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
                            location={job.workplace_address.municipality}
                            contract={job.salary_description}
                            workhours={job.working_hours_type.label}
                            link={job.webpage_url}
                            />
                        )
                        })}
                </tbody>
            </table>
        </main>
    )
}

interface JobRowProps {
    logo: string;
    company: string;
    role: string;
    location: string;
    contract: string;
    workhours: string;
    link: string;
}

function JobRow({ logo, company, role, location, contract, workhours, link }: JobRowProps): JSX.Element {
    const verifyValue = (value: string) => value ? value : "-";

    const contactUrl = (url: string) => {
        if (url) {
            return <a href={url} target="_blank"><FontAwesomeIcon icon={faLink} style={{ color: 'white', fontSize: '1.7rem' }} /></a>;
        } else {
            return "-"
        }
    }

    return (
        <tr>
        <td><img src={logo} alt="N/A"/></td>
        <td>{verifyValue(company)}</td>
        <td>{verifyValue(role)}</td>
        <td>{verifyValue(location)}</td>
        <td>{verifyValue(contract)}</td>
        <td>{verifyValue(workhours)}</td>
        <td>{contactUrl(link)}</td>
        </tr>
    )
}

export default Table