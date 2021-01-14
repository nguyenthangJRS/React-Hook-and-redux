

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { GiFilmSpool } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';


import './Navbar.scss';
import Button from '../Button/Button';
import { Search } from '../Store/Action/SearchAction';


         

const Navbar = () => {

        const [ value,setValue ] = useState('');
        const [ click,setClick ] = useState(false);
        const [ tablet,setTablet ] = useState(true);

        const dispatch = useDispatch();
        


        const handleMenu = () => setClick(!click);
        const showTablet = () =>{
            if(window.innerWidth <= 769){
                setTablet(true);
            }else{
                setTablet(false);
            }
        }

        useEffect(()=>{
            showTablet();
        },[])

       window.addEventListener('resize',showTablet);

       //search
       const onSubmit = (e)=>{
            e.preventDefault();
            const newValue = {
                value : value,
            }
            if(newValue.value===''){
                return;
            }else{
                dispatch(Search(newValue));

            }
            
            setValue('') 

       }

       const handleChance = (e) =>{
            const value = e.target.value;
            setValue(value);
           
       }

       const hancleClick = ()=>{

       }

    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <Link to ='/' className="navbar__brand">
                        <GiFilmSpool />
                    </Link>
                    <div className="navbar__menu">
                        <span onClick = { handleMenu } className={tablet ? 'navbar__btn' : 'navbar__btn hide'}>
                            { click ? <AiOutlineClose className="btn__menu"/> :  <GoThreeBars className="btn__menu"/> }
                        </span>  
                        <ul className={tablet === false ? "navbar__nav " : click  ? "navbar__nav nav fade" : 'navbar__nav nav hide'}>
                            <li className ="nav__item"  onClick = { handleMenu }>
                                <Link to='/' className ="nav__link">ANIME</Link>
                            </li>
                            <li className ="nav__item"  onClick = { handleMenu }>
                                <Link to='/film' className ="nav__link">FILM</Link>
                            </li>
                            {/* <li className ="nav__item"  onClick = { handleMenu }>
                                <Link to='/' className ="nav__link">ANIME</Link>
                            </li> */}
                            <li className ="nav__item"  onClick = { handleMenu }>
                                <Link to='/manga' className ="nav__link">MANGA</Link>
                            </li>
                            <li className ="nav__item"  onClick = { handleMenu }>
                            {
                                tablet ? (<Link to='/' className ="nav__link">
                                   <Button className='btn btn-tablet' size='md' color ='blue' onClick = {hancleClick}>Sign Up</Button>
                               </Link>) : (
                                   <form action='' className='form' onSubmit= {onSubmit}>
                                       <input  type='text' name=' search' placeholder='Search Item' className='form__input'
                                            value = {value}
                                            onChange = { handleChance }
                                       />
                                       <button type='submit'><AiOutlineSearch className='search__icon'/></button>
                                   </form>
                               )
                            }
                               
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;