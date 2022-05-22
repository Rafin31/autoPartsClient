import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';
import Sale from './Sale';

const Main = () => {
    return (
        <div className="max-w-7xl min-w-full max-auto mobile:px-5 laptop:px-14 desktop:px-14">
            <Banner />
            <Categories />
            <Sale />
        </div>
    );
};

export default Main;