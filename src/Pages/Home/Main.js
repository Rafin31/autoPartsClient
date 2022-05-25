import React from 'react';
import './Home.css'
import Banner from './Banner';
import Categories from './Categories';
import Sale from './Sale';
import SaleOfTheMonth from './SaleOfTheMonth';
import BusinessSummery from './BusinessSummery';
import Review from './Review';
import Products from './Products';

const Main = () => {
    return (
        <div className="w-full mobile:px-5">
            <Banner />
            <Categories />
            <Sale />
            <SaleOfTheMonth />
            <Products />
            <BusinessSummery />
            <Review />
        </div>
    );
};

export default Main;