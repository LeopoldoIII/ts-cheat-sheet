/**
 * Mathematical utility functions to demonstrate unit testing with Vitest.
 * All functions follow strict TypeScript typing and defensive constraints.
 */

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Clamps a numerical value within the inclusive range [min, max].
 * 
 * @param value The input number to clamp.
 * @param min The lower bound of the clamp range.
 * @param max The upper bound of the clamp range.
 * @throws Error if min > max.
 */
export function clamp(value: number, min: number, max: number): number {
    if (min > max) {
        throw new Error("Invalid range: min cannot be greater than max");
    }
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
