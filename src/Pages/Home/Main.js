import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';

const Main = () => {
    return (
        <div className="max-w-7xl min-w-full max-auto">
            <Banner />
            <Categories />
        </div>
    );
};

export default Main;