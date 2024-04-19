import { useState } from "react";
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {toggleHeltid, toggleDeltid} from "../store/slices/filterSlice";

function FilterOperations() {
    

    const {heltid, deltid}= useSelector((state: RootState) => state.filter)
    console.log(heltid, deltid)
    const dispatch = useDispatch()

    const handleHeltid = () => {
        dispatch(toggleHeltid())
    }

    const handleDeltid = () => {
        dispatch(toggleDeltid())
    }

    return (
        <div>
            <div className="checkbox-container">
                <div>
                    <input
                        type="checkbox"
                        id="Heltid"
                        name="Heltid"
                        checked={heltid}
                        onChange={handleHeltid}
                        />
                    <label htmlFor="Heltid">Heltid</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Deltid"
                        name="Deltid" 
                        checked={deltid}
                        onChange={handleDeltid}
                    />
                    <label htmlFor="Deltid">Deltid</label>
                </div>
            </div>
        </div>
    )
}

export default FilterOperations;