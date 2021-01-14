import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../carousel/Card';
import Content from '../Content/Content';


const imgArr = ['../img/1.jfif','../img/2.jfif','../img/3.jpg','../img/4.jfif','../img/5.jpg','../img/6.png'];

const Page = () => {

    const BreakPoints = [
        {width : 500, itemsToShow : 1},
        {width : 768, itemsToShow : 3},
        {width : 1200, itemsToShow : 3},
        {width : 1500, itemsToShow : 4},
    ]

      

    return (
        <>
            <Carousel style={{ marginTop : `${50}px`}} breakPoints={BreakPoints} className='carousel'>
                <Card src={imgArr[0]}/>
                <Card src={imgArr[1]}/>
                <Card src={imgArr[2]}/>
                <Card src={imgArr[3]}/>
                <Card src={imgArr[4]}/>
                <Card src={imgArr[5]}/>
            </Carousel>

            <Content />
            
            
        </>
    );
};

export default Page;