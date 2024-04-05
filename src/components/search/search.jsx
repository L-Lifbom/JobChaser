import styles from './search.module.css'

function Search({ filter, setFilter }) {
    return (
        <>
            <header>
                <button className='search-btn-1'>Filter</button>
                <button className='search-btn-2'>Clear</button>
                <input 
                type="text" 
                className='header-input' 
                placeholder='Search'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}/>
            </header>
        </>
    )
}

export default Search