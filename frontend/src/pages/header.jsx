import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <nav className='full'>
            <div className='app-nav-container main-layout'>
                <div className='app-nav-inner-container flex align-center'>
                    <h2 className='site-logo'>DigiTrack</h2>
                    <ul className='nav-list'>
                        <li>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/aboutus'}>About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}