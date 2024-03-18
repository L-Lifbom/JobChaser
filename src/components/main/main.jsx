import { useState } from 'react'
import Search from './search/search'
import Table from './table/table'

function Main() {
    const [filter, setFilter] = useState('');

    return 
        <>
            <Search filter={filter} setFilter={setFilter} />
            <Table filter={filter} />
        </>
}


export default Main