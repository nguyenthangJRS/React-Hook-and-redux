import React from 'react';
import PropTypes from 'prop-types';
import filmItem from '../MainPage/Data';
import FilmCard from './FilmCard';
import './Content.scss';

Content.propTypes = {
    filmItem : PropTypes.object,
};
Content.defaultProps = {
    filmItem : null
}

function Content(props) {
    return (
        <>
            <div className='content'>
                <div className='row'>
                        <FilmCard />
                </div>
            </div>
        </>
    );
}

export default Content;