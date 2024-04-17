import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from 'react-redux';
function FilterOperations() {
    const { balance, loan, isActive } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    return (_jsxs("div", { children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "Heltid", name: "Heltid" }), _jsx("label", { for: "Heltid", children: "Heltid" }), _jsx("input", { type: "checkbox", id: "Deltid", name: "Heltid" }), _jsx("label", { for: "Deltid", children: "Deltid" })] }), _jsx("div", {})] }));
}
export default FilterOperations;
