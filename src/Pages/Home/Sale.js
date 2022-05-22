import React from 'react';

const Sale = () => {
    return (
        <div className=' h-[30vh] flex justify-center items-center grid gap-10 mobile:px-10 laptop:px-20 desktop:px-20 mobile:grid-cols-1 desktop:grid-cols-3 laptop:grid-cols-3'>
            <div className="saleBox saleBox-1 justify-center">
                <div className="card rounded-none lg:max-w-lg ">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum vel delectus provident eligendi molestias id perspiciatis qui a similique accusantium.
                    </div>
                </div>
            </div>
            <div className="saleBox saleBox-2">
                <div className="card rounded-none lg:max-w-lg ">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="saleBox saleBox-3 grid gap-5 grid-cols-1 grid-rows-2 ">
                <div className="subBox subBox-1">
                    <div className="card rounded-none lg:max-w-lg ">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className="subBox subBox-2">
                    <div className="card rounded-none lg:max-w-lg ">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;