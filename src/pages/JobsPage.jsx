import { useState } from 'react'
import Search from '../components/search/search'
import Table from '../components/table/table'

function Main() {
    const [filter, setFilter] = useState('');

    return (
        <>
            <div>
                <Search filter={filter} setFilter={setFilter} />
                <Table filter={filter} />
            </div>
        </>
    )
}


export default Main