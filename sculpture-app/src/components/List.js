import React, { useState } from 'react';
import { sculptureList } from '../data/data';

const List = () => {
    const [index, setIndex] = useState(0);

    const nextSculpture = () => {
        setIndex((index + 1) % sculptureList.length);
    };

    const previousSculpture = () => {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    };

    return (
        <div>
            <h2>{sculptureList[index].name}</h2>
            <button onClick={previousSculpture}>Previous</button>
            <button onClick={nextSculpture}>Next</button>
        </div>
    );
};

export default List;
