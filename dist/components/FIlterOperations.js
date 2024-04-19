import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from 'react-redux';
import { toggleHeltid, toggleDeltid } from "../store/slices/filterSlice";
function FilterOperations() {
    const { heltid, deltid } = useSelector((state) => state.filter);
    console.log(heltid, deltid);
    const dispatch = useDispatch();
    const handleHeltid = () => {
        dispatch(toggleHeltid());
    };
    const handleDeltid = () => {
        dispatch(toggleDeltid());
    };
    return (_jsx("div", { children: _jsxs("div", { className: "checkbox-container", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "Heltid", name: "Heltid", checked: heltid, onChange: handleHeltid }), _jsx("label", { htmlFor: "Heltid", children: "Heltid" })] }), _jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "Deltid", name: "Deltid", checked: deltid, onChange: handleDeltid }), _jsx("label", { htmlFor: "Deltid", children: "Deltid" })] })] }) }));
}
export default FilterOperations;
