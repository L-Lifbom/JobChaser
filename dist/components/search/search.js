import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function Search({ filter, setFilter }) {
    return (_jsx(_Fragment, { children: _jsxs("header", { children: [_jsx("button", { className: 'search-btn-1', children: "Filter" }), _jsx("button", { className: 'search-btn-2', children: "Clear" }), _jsx("input", { type: "text", className: 'header-input', placeholder: 'Search', value: filter, onChange: (e) => setFilter(e.target.value) })] }) }));
}
export default Search;
