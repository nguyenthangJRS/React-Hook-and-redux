import React from 'react';
import { filmItem } from '../MainPage/Data';
import { Link } from 'react-router-dom';
import './Manga.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CloseSearch } from '../Store/Action/SearchAction';


const Manga = () => {
    const  dispatch = useDispatch();
    const manga = useSelector(state => state.search.list.manga);
    const isSearch = useSelector(state => state.search.isSearch);

    
    const closeSearch =()=>{
        dispatch(CloseSearch());
    }



    return (
        <>
          <div className='content'>
               <div className='row'>
               {manga.length !== 0 ? (<>
                { manga.map( item=>(
                <div className ='col' key={item.id} style={{ backgroundImage : `url(${item.url})`}}>
                        <p className='film__episode'>{item.episode}</p>
                        <p className='film__evaluate'>{item.evaluate}</p>
                        <Link to={`/${item.urlFilm}`}>
                            <h4 className='film__name'>{item.name}</h4>
                        </Link>
                       
                </div>
                    )) } 
                    {isSearch ? (<AiFillCloseCircle  onClick={closeSearch} className='btnClose'/>) : ''}
        </>) : (<div className ='col__err'>
                        <p className='err__message'>Not Found</p>
                        <button onClick={closeSearch}>Close</button>
                </div>) }
           
               </div>
           </div>
        </>
    );
};

export default Manga;