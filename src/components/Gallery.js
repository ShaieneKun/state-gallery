import { useState } from 'react';
import { sculptureList } from '../data/data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index + 1 === sculptureList.length) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        if (index === 0) {
            setIndex(sculptureList.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <section>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <button onClick={handlePreviousClick}>
                Previous
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </section>
    );
}
