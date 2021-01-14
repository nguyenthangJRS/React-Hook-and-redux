import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CloseSearch } from '../Store/Action/SearchAction';
import { AiFillCloseCircle } from 'react-icons/ai';


const FilmCard = () => {
    const dispatch = useDispatch();
     const state = useSelector(state => state.search.list.anime);
     const isSearch = useSelector(state => state.search.isSearch);
  
const closeSearch = ()=>{
    dispatch(CloseSearch(''))
}

    return (
        <>
        {state.length !== 0 ? (<>
            { state.map( item=>(
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
           
           
           
        </>
    );
};

export default FilmCard;