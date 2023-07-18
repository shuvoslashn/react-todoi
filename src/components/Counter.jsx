import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                {count}{' '}
                <span className='px-3 pb-1 text-sm mb-4 inline-block bg-yellow-300 rounded-full'>
                    {count % 2 === 0 ? (count === 0 ? 'zero' : 'even') : 'odd'}
                </span>
            </h1>
            <div className='flex gap-2'>
                <button
                    className='px-4 py-2 bg-yellow-400'
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    ++
                </button>
                <button
                    className='px-4 py-2 bg-blue-400'
                    onClick={() => {
                        setCount(count > 0 ? count - 1 : count);
                    }}
                >
                    - -
                </button>
            </div>
        </div>
    );
};

export default Counter;
