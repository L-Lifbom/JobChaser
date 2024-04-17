var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const Table = ({ filter }) => {
    const [jobs, setJobs] = useState([]);
    function fetchJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://jobsearch.api.jobtechdev.se/search?q=utvecklare&offset=0&limit=100';
            try {
                const response = yield axios.get(url);
                setJobs(response.data.hits);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    useEffect(() => {
        fetchJobs();
    }, []);
    const filteredJobs = jobs.filter(job => {
        var _a, _b;
        return job.employer.name.toLowerCase().includes(filter.toLowerCase()) ||
            job.headline.toLowerCase().includes(filter.toLowerCase()) ||
            ((_b = (_a = job.working_hours_type) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(filter.toLowerCase())) ||
            (job.workplace_address && job.workplace_address.municipality && job.workplace_address.municipality.toLowerCase().includes(filter.toLowerCase()));
    });
    return (_jsx("main", { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Logo" }), _jsx("th", { children: "Company" }), _jsx("th", { children: "Role" }), _jsx("th", { children: "Location" }), _jsx("th", { children: "Contract" }), _jsx("th", { children: "Work Hours" }), _jsx("th", { children: "Link" })] }) }), _jsx("tbody", { className: 'data-template', children: filteredJobs.map((job) => {
                        return (_jsx(JobRow, { logo: job.logo_url, company: job.employer.name, role: job.headline, location: job.workplace_address.municipality, contract: job.salary_description, workhours: job.working_hours_type.label, link: job.webpage_url }, job.id));
                    }) })] }) }));
};
const JobRow = ({ logo, company, role, location, contract, workhours, link }) => {
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
};
export default Table;
