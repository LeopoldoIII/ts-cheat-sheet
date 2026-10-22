# Code Style & Quality Standards

## 0. Mandatory Language Standard
- **ALL Code in English**: All source code, class names, function names, variable names, constants, docstrings, inline comments, log messages, and error messages MUST be written strictly in **English**.
- **Exercise Descriptions & Asserts in English**: All markdown instructions, task descriptions, and test assertions in notebooks MUST be written in **English**.
- **User Prompt Independence**: Even when user instructions, requests, or questions are in Spanish (or any other language), **all generated or modified code and documentation in the repository must be strictly in English**. Explanations in the chat can be in the user's preferred language, but project files must remain 100% English.

## TypeScript Conventions

1. **Naming Conventions**:
   - **Functions & Variables**: `camelCase` (e.g., `calculateMinBits`, `totalSeconds`).
   - **Classes, Interfaces, Types**: `PascalCase` (e.g., `EmployeeManager`, `DataProcessor`, `UserProfile`).
   - **Constants**: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_BUFFER_SIZE`).
   - **Files**: `camelCase.ts` or `kebab-case.ts`.

2. **Strict Typing**:
   - Always adhere to `"strict": true`.
   - Never use `any`. Use `unknown` when input is truly uncertain, followed by type narrowing (e.g., `typeof`, `instanceof`, or custom type guards).
   - Use `interface` for object shapes, class contracts, and public APIs that may be extended.
   - Use `type` for unions (`type Status = 'idle' | 'loading' | 'success'`), intersections, and tuples.

3. **Clean Code & Modern JavaScript/TypeScript**:
   - Prefer `const` over `let`. Never use `var`.
   - Use optional chaining (`obj?.prop`) and nullish coalescing (`val ?? defaultVal`).
   - Use guard clauses to exit early and avoid deep nesting.
   - Avoid mutating function parameters; prefer pure functions and immutability (e.g., `readonly`, spread operators `[...arr]`, `{...obj}`).
