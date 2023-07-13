import { useEffect, useRef } from 'react';

const useUnmountRef = () => {
    const flag = useRef<boolean>(false);
    useEffect(() => {
        flag.current = false;
        return () => {
            flag.current = true;
        }
    }, []);

    return flag;
};


export default useUnmountRef;