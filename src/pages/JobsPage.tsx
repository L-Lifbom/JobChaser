import { useState } from 'react'
import Search from '../components/search'
import Table from '../components/table'
import FilterOperations from '../components/FilterOperations'

function Main() {
    const [filter, setFilter] = useState('');
    const [locations, setLocations] = useState([]);

    const handleLocations = (newLocations) => {
        setLocations(newLocations);
    }

    return (
        <>
            <div className='main-container'>
                <Search filter={filter} setFilter={setFilter} />
                <FilterOperations locations={locations}/>
                <Table filter={filter} />
            </div>
        </>
    )
}


export default Main