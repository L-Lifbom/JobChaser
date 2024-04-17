import { useState } from "react";
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {} from "../store/slices/filterSlice";

function FilterOperations() {
    

    const {balance, loan, isActive}= useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="Heltid"
                    name="Heltid" />
                <label for="Heltid">Heltid</label>
                <input
                    type="checkbox"
                    id="Deltid"
                    name="Heltid" />
                <label for="Deltid">Deltid</label>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default FilterOperations;