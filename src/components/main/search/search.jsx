import styles from './search.module.css'

function Search({ filter, setFilter }) {
    return (
        <>
            <header>
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