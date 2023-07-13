import { useReducer } from 'react';

// 强制组件更新
const useUpdate = () => {
    const [, update] = useReducer((num: number) : number => num + 1, 0);
    
    return update;
}

export default useUpdate;