import React, { Suspense } from 'react';
import Categories from '../Categories';


const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={"Is Loading so wait"}>
                <Categories></Categories>
            </Suspense>

        </div>
    );
};

export default LeftAside;