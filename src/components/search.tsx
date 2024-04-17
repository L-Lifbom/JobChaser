interface SearchProps {
  filter: string;
  setFilter: (value: string) => void;
}

function Search({ filter, setFilter }: SearchProps) {
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