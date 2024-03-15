import styles from './header.module.css'

function Header() {
    return (
        <>
            <header>
                <input type="text" className='header-input' placeholder='Search'/>
            </header>
        </>
    )
}

export default Header