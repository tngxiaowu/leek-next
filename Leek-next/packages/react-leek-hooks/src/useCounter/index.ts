import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const add = (number = 1) => setCounter((v) => v + number);
    const dec = (number = 1) => setCounter((v) => v - number);
    const set = (number = 1) => setCounter(number);

    return [
        counter,
        {
            add,
            dec,
            set
        }
    ]
}

export default useCounter;