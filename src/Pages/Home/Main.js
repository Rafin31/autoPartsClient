import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';
import Sale from './Sale';
import SaleOfTheMonth from './SaleOfTheMonth';

const Main = () => {
    return (
        <div className="w-full mobile:px-5">
            <Banner />
            <Categories />
            <Sale />
            <SaleOfTheMonth />
        </div>
    );
};

export default Main;