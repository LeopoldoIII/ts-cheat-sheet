import { describe, it, expect } from "vitest";
import { add, subtract, clamp } from "./math";

describe("Math functions", () => {
    describe("add()", () => {
        it("should add two numbers correctly", () => {
            // Arrange
            const a = 2;
            const b = 3;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(5);
        });

        it("should handle negative numbers and zero", () => {
            expect(add(-5, 5)).toBe(0);
            expect(add(0, 0)).toBe(0);
        });
    });

    describe("subtract()", () => {
        it("should subtract two numbers correctly", () => {
            expect(subtract(5, 2)).toBe(3);
        });

        it("should yield negative results when minuend is smaller", () => {
            expect(subtract(2, 5)).toBe(-3);
        });
    });

    describe("clamp()", () => {
        it("should return the value when within bounds", () => {
            expect(clamp(5, 0, 10)).toBe(5);
        });

        it("should clamp values below the minimum boundary", () => {
            expect(clamp(-5, 0, 10)).toBe(0);
        });

        it("should clamp values above the maximum boundary", () => {
            expect(clamp(15, 0, 10)).toBe(10);
        });

        it("should handle exact boundary values", () => {
            expect(clamp(0, 0, 10)).toBe(0);
            expect(clamp(10, 0, 10)).toBe(10);
        });

        it("should throw an error when min > max", () => {
            expect(() => clamp(5, 10, 0)).toThrow("Invalid range");
        });
    });
});
