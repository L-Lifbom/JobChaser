import { useState } from "react";
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import {openAccount, closeAccount, withdraw, deposit, requestLoan, payLoan } from "../store/slices/filterSlice"

function FilterOperations() {


    const {balance, loan, isActive}= useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()
    return (
        <div></div>
    )
}

export default FilterOperations;