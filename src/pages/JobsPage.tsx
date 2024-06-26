import { useState } from 'react'
import Search from '../components/search'
import Table from '../components/table'
import FilterOperations from '../components/FIlterOperations';

function Main() {
    const [filter, setFilter] = useState('');

    return (
        <>
            <div className='main-container'>
                <Search filter={filter} setFilter={setFilter} />
                <FilterOperations/>
                <Table filter={filter} />
            </div>
        </>
    )
}


export default Main