import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <nav className='app-nav-container flex  align-center full'>
            <h2 className='site-logo'>DigiTrack</h2>
            <ul className='nav-list'>
                <li>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/aboutus'}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}