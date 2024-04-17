import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Search from '../components/search';
import Table from '../components/table';
import FilterOperations from '../components/FilterOperations';
function Main() {
    const [filter, setFilter] = useState('');
    const [locations, setLocations] = useState([]);
    const handleLocations = (newLocations) => {
        setLocations(newLocations);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'main-container', children: [_jsx(Search, { filter: filter, setFilter: setFilter }), _jsx(FilterOperations, { locations: locations }), _jsx(Table, { filter: filter })] }) }));
}
export default Main;
