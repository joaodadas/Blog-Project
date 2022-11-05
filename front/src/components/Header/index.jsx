// import { Header, InputGroup } from "react-bootstrap"
import './styles.css'


function Header() {
    return(
        <>
            <header className='header-main'>
                <div className='header-inside'>
                    <div className='header-div'>
                        <div className='header-icon' />
                        <input placeholder='Explore'/>
                    </div>
                    <div className='header-div'>
                        <button className='header-home' >Home</button>
                        <div className='header-explor '/>
                        <div className='header-message'/>
                        <div className='header-notifications'/>
                        <button className='header-profile'/>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header  