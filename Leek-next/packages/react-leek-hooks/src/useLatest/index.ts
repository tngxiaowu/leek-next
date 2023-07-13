import { useRef } from 'react';

// 返回最新的值
const useLatest = <T,>(value: T): { readonly current: T } => {
    const ref = useRef(value);
    ref.current = value;
    
    return ref;
}

export default useLatest;