import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';
import Sale from './Sale';

const Main = () => {
    return (
        <div className="w-full max-auto mobile:px-5">
            <Banner />
            <Categories />
            <Sale />
        </div>
    );
};

export default Main;