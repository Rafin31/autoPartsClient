import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';
import Sale from './Sale';

const Main = () => {
    return (
        <div className="max-w-7xl min-w-full max-auto">
            <Banner />
            <Categories />
            <Sale />
        </div>
    );
};

export default Main;