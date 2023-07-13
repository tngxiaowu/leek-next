import { useEffect } from 'react';
import useLatest from '../useLatest';

const useUnmount = (fn: () => void) => {
    const fnRef = useLatest(fn);
    useEffect(() => () => {
        // 这边函数需要拿到最新值
        fnRef?.current();
    } );
}

export default useUnmount;