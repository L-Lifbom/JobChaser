import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
function Search({ filter, setFilter }) {
    return (_jsx(_Fragment, { children: _jsx("header", { children: _jsx("input", { type: "text", className: 'header-input', placeholder: 'Search', value: filter, onChange: (e) => setFilter(e.target.value) }) }) }));
}
export default Search;
