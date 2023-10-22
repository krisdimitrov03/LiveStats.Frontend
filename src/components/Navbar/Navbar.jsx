import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {GiSoccerBall} from 'react-icons/gi'

function Navbar() {
    return (
        <div id={style.root} className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="my-0 mr-md-auto">
                <Link to="/" className={style.logo}>
                    <GiSoccerBall />
                    <span className='font-weight-normal'>LiveStats</span>
                </Link>
            </div>
            <Link className={`btn btn-primary ${style.navBtn}`} to="#" id={style.register}>Sign up</Link>
            <Link className={`btn btn-outline-primary ${style.navBtn}`} to="#"  id={style.login}>Log in</Link>
        </div>
    )
}

export default Navbar
