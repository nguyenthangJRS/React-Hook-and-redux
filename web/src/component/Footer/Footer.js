import React from 'react';
import './Footer.scss';
import { FaFacebookF,FaGithubAlt,FaTelegramPlane } from 'react-icons/fa';
import { GiDiceEightFacesEight } from 'react-icons/gi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiMailSendFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer__title'>
                    <div className='footer__contact'>
                            <ul className='contact__list'>
                                <li className='contact__item'>
                                    Anime 
                                </li>
                            </ul>
                       
                    </div>
                    <div className='footer__login'>

                    <form action='' method='POST' className='footer__form'>
                            <input name ='gmail' placeholder=''/>
                            <button type='submit'>
                                <RiMailSendFill />
                            </button>
                        </form>


                        <div className='btn__footer'>
                                <Link to='/'>
                                    <button className='btn__login'>Login</button>
                                </Link>
                                <Link to='/'>
                                    <button className='btn__register'>Register</button>
                                </Link>
                        </div>

                      

                        <ul className='icon__item'>
                            <li  className='item facebook'>
                                <FaFacebookF className='social__icons '/>
                            </li>
                            <li className='item github' >
                                <FaGithubAlt className='social__icons '/>
                            </li>
                            <li className='item instagram'>
                                <AiOutlineInstagram className='social__icons '/>
                            </li>
                            <li className='item telegram'>
                                <FaTelegramPlane className='social__icons '/>
                            </li>
                            <li className='item dice'>
                                <GiDiceEightFacesEight className='social__icons '/>
                            </li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;