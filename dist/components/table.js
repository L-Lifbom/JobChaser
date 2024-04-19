import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
function Table({ filter }) {
    const [jobs, setJobs] = useState([]);
    const { heltid, deltid } = useSelector((state) => state.filter);
    async function fetchJobs() {
        const url = 'https://jobsearch.api.jobtechdev.se/search?q=utvecklare&offset=0&limit=100';
        try {
            const response = await axios.get(url);
            setJobs(response.data.hits);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchJobs();
    }, []);
    const filteredJobs = jobs.filter(job => {
        const searchMatch = job.employer.name.toLowerCase().includes(filter.toLowerCase()) || job.headline.toLowerCase().includes(filter.toLowerCase()) || job.workplace_address?.municipality?.toLowerCase().includes(filter.toLowerCase());
        const hoursType = job.working_hours_type?.label?.toLowerCase();
        const hoursMatch = (!heltid && !deltid) || (heltid && deltid) || (heltid && hoursType === 'heltid') || (deltid && hoursType === 'deltid');
        return searchMatch && hoursMatch;
    });
    return (_jsx("main", { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Logo" }), _jsx("th", { children: "Company" }), _jsx("th", { children: "Role" }), _jsx("th", { children: "Location" }), _jsx("th", { children: "Contract" }), _jsx("th", { children: "Work Hours" }), _jsx("th", { children: "Link" })] }) }), _jsx("tbody", { className: 'data-template', children: filteredJobs.map((job) => {
                        return (_jsx(JobRow, { logo: job.logo_url, company: job.employer.name, role: job.headline, location: job.workplace_address.municipality, contract: job.salary_description, workhours: job.working_hours_type.label, link: job.webpage_url }, job.id));
                    }) })] }) }));
}
function JobRow({ logo, company, role, location, contract, workhours, link }) {
    const verifyValue = (value) => value ? value : "-";
    const contactUrl = (url) => {
        if (url) {
            return _jsx("a", { href: url, target: "_blank", children: _jsx(FontAwesomeIcon, { icon: faLink, style: { color: 'white', fontSize: '1.7rem' } }) });
        }
        else {
            return "-";
        }
    };
    return (_jsxs("tr", { children: [_jsx("td", { children: _jsx("img", { src: logo, alt: "N/A" }) }), _jsx("td", { children: verifyValue(company) }), _jsx("td", { children: verifyValue(role) }), _jsx("td", { children: verifyValue(location) }), _jsx("td", { children: verifyValue(contract) }), _jsx("td", { children: verifyValue(workhours) }), _jsx("td", { children: contactUrl(link) })] }));
}
export default Table;
