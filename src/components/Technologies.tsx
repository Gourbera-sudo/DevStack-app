import React, { use } from 'react';
import type { Itechnology } from '../type';

const Technologies = ({ techPromise }: { techPromise: Promise<Itechnology[]>}) => {
    const technologies = use(techPromise);
    console.log(technologies)
    return (
        <div>

            
        </div>
    );
};

export default Technologies;