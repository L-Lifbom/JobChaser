import { useState } from "react";
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {} from "../store/slices/filterSlice";

function FilterOperations() {
    

    const {balance, loan, isActive}= useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()
    return (
        <div>
            <button>sasdas</button>
        </div>
    )
}

export default FilterOperations;