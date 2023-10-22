import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { GiSoccerBall } from 'react-icons/gi'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

function Navbar() {
    var user = useContext(UserContext);

    return (
        <div id={style.root} className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="my-0 mr-md-auto">
                <Link to="/" className={style.logo}>
                    <GiSoccerBall />
                    <span className='font-weight-normal'>LiveStats</span>
                </Link>
            </div>
            {
                user.id === undefined
                    ?
                    <>
                        <Link className={`btn btn-primary ${style.navBtn}`} to="/register" id={style.register}>Sign up</Link>
                        <Link className={`btn btn-outline-primary ${style.navBtn}`} to="/login" id={style.login}>Log in</Link>
                    </>
                    :
                    <div className={style.userSection}>
                        <Link className={style.logout} to="/logout">Log out</Link>
                        <img src={user.imageUrl} alt="" />
                        <span>{user.username}</span>
                    </div>
            }

        </div>
    )
}

export default Navbar
