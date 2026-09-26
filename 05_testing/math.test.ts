/**
 * Example of how tests look in JS/TS using Vitest/Jest
 * Note: To run this, you would install vitest (`npm i -D vitest`) and run `npx vitest`
 */
import { describe, it, expect } from 'vitest';
import { add, subtract } from './math';

describe('Math functions', () => {
    it('should add two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should subtract two numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3);
    });
});
