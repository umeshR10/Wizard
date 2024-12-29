import './index.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () =>{
    
    const navigate = useNavigate()

    const onClickLogout = ()=>{

        const token = Cookies.remove("jwt_token")

        navigate("/login")

    }

    return(
        <header>

                <div className='big-screen-cont'>
                    <nav>
                        <ul className='ul-section-big'>
                            <li>
                                <Link className='first-li-big' to="/">
                                    𝓦𝓲𝔃𝓪𝓻𝓭
                                </Link>
                            </li>
                            <li className='second-li-big'>
                                <Link className='mid-sec-big' to="/">
                                    Home
                                </Link>
                                <Link to="/jobs">
                                    Jobs
                                </Link>
                            </li>
                            <li><button onClick={onClickLogout} className='btn btn-primary text-dark logbtn'>Logout</button></li>
                        </ul>
                    </nav>
                </div>

                <div className='small-screen-cont'>
                    <nav>
                        <ul className='ul-section-small'>
                            <li>
                                <Link className='first-li-small' to="/">
                                    𝓦𝓲𝔃𝓪𝓻𝓭
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/">
                                    <i className="fa-solid fa-house h-small"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobs">
                                    <i className="fa-solid fa-layer-group h-small"></i>
                                </Link>
                            </li>
                            <li><i onClick={onClickLogout} className="fa-solid fa-right-from-bracket"></i></li>
                            
                        </ul>
                    </nav>
                </div>

            </header>
    )
}

export default Header;