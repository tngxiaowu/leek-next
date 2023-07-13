import { useCallback, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import useUnmountRef from '../useUnmountRef';

// 使用方法与 useState 一致 
// 但是优化点是: 在组件卸载后异步回调内的 setState 不再执行 避免因为组件卸载后更新状态而导致的内存泄露
function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>]
function useSafeState<S>(initialState?: S | (() => S)) {
    const unmountRef: { current: boolean } = useUnmountRef();
    const [state, setState] = useState(initialState);
    const setCurrentValue = useCallback((newValue) => {
        if(unmountRef.current) return;
        setState(newValue);
    });
    return [state, setCurrentValue];
}

export default useSafeState;