import { describe } from 'node:test';
import useCounter from '../index';
import { act, renderHook } from '@testing-library/react';

describe('useCounter 测试', () => {
    test('num + 1', async () => {
        const { result } = renderHook(() => useCounter(7));
        expect(result?.current[0]).toBe(7);
        act(() => {
            result?.current[1]?.add();
        })
        expect(result?.current[0]).toBe(8);
    })
})
