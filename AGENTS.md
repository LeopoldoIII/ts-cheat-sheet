# Repository Guidelines & Agent Instructions: ts-cheat-sheet

This document establishes the architectural, pedagogical, and coding rules for the `ts-cheat-sheet` repository. All AI agents (Gemini, Antigravity, Claude, Copilot, Cursor) and human contributors must strictly adhere to these instructions.

---

## 1. Repository Purpose & Scope

`ts-cheat-sheet` is an educational, hands-on repository designed to guide developers from foundational TypeScript and JavaScript knowledge toward intermediate and advanced mastery (especially useful for developers transitioning from languages like Python). It focuses on:
- Writing idiomatic, strictly-typed TypeScript and modern ECMAScript (ES2022+).
- Interactive, cell-by-cell experimentation using **Jupyter Notebooks powered by the Deno kernel**.
- Mastering data structures, functional programming, OOP, generics, and asynchronous programming.
- Software design, best practices (SOLID, strict compiler rules), and unit testing with **Vitest**.
- Technical coding interview preparation (algorithms, data structures, complexity analysis).

---

## 2. Universal Language Rule: English Only in Code & Content

> **CRITICAL RULE:** All code, comments, docstrings, variable names, function names, file names, exercise descriptions, and test assertions must be written in **ENGLISH**.
>
> - Regardless of the language used to chat with the agent (e.g., if the user prompts in Spanish, French, etc.), any code produced, edited, or added to files must be in **English**.
> - Conversational explanations in the chat may follow the user's preferred language, but repository files must maintain 100% English consistency.

---

## 3. Directory Taxonomy by Level

The repository follows a two-digit ascending numeric prefix (`XX_`) to enforce pedagogical ordering:

| Directory | Level | Description |
| :--- | :---: | :--- |
| `01_basic_concepts/` | 1 | Variables (`let`, `const`), dynamic vs static typing, primitives, control flow, arrow functions. |
| `02_data_structures/` | 2 | Built-in structures (`Array`, `Object`, `Map`, `Set`), `Tuple`, type modeling and iteration. |
| `03_functional_programming/` | 3 | First-class functions, Higher-Order Functions (`map`, `filter`, `reduce`), immutability, closures. |
| `04_advanced_concepts/` | 4 | Generics (`<T>`), Utility Types (`Partial`, `Pick`, `Omit`, `Record`), type narrowing, discriminators. |
| `05_testing/` | 5 | Unit testing with **Vitest**, AAA pattern, assertions, edge cases. |
| `06_integrations_and_apis/` | 6 | Promises, `async/await`, HTTP `fetch`, JSON response typing with interfaces, error handling. |
| `07_best_practices/` | 7 | Clean code, SOLID principles in TS, strict compiler settings, guard clauses. |
| `08_algorithms_and_interviews/` | 8 | LeetCode-style technical interview problems (two sum, anagrams, frequency counters, two pointers). |
| `09_oop/` | 9 | Classes, interfaces, access modifiers (`public`, `private`, `protected`), inheritance, polymorphism. |

---

## 4. Exercise Standard: The 3-Phase Template

Every notebook or exercise file that contains coding challenges or practice problems must strictly follow this mandatory 3-phase structure:

### Phase 1: Objective & Context (Markdown Header)
Explain clearly in English:
- What concept is being covered.
- Why it is useful in real-world / professional TypeScript development.
- What the expected learning outcome is.

### Phase 2: Working Code Sample (Demonstration)
Provide a clear, self-contained, and runnable demonstration showing the idiomatic syntax or pattern in action.

### Phase 3: Practice Challenge (Unanswered with Validation)
- State the problem clearly with input/output constraints.
- Provide a boilerplate function with explicit TypeScript type annotations and `// YOUR CODE HERE` or `throw new Error("Not implemented yet");`.
- **Must include automated test cases (`assert`)** using the standard library `node:assert/strict` (which runs offline natively in both Deno and Node.js) so the user receives immediate validation.
- Provide a collapsible hint and official solution using:
  ```html
  <details><summary>💡 Hint</summary>...</details>
  <details><summary>🔍 Solution</summary>...</details>
  ```

> [!CAUTION]
> **No Raw Code Dumps**: Notebooks must NEVER contain raw, uncaptioned code cells without Markdown context, type annotations, or test assertions. When auditing or refactoring a level, agents must inspect **all** `.ipynb` files in that directory.

---

## 5. Development Environment & Conventions

- **Runtime & Tooling**:
  - **Node.js**: v18+ (LTS).
  - **TypeScript**: Strict mode enabled (`"strict": true` in `tsconfig.json`).
  - **Deno**: Used as the Jupyter kernel (`deno jupyter --unstable --install`) and direct runner (`deno run`).
  - **Vitest**: Unit testing framework (`npm test -- --run`).
  - **Execution**: `npx tsx <file.ts>` or `deno run <file.ts>`.
- **Naming Conventions**:
  - Folders: `XX_snake_case` (e.g., `04_advanced_concepts`).
  - TypeScript files: `camelCase.ts` or `kebab-case.ts`.
  - Concept notebooks: `XX_<topic>.ipynb`.
  - Functions & Variables: `camelCase`.
  - Classes, Interfaces & Types: `PascalCase`.
  - Constants: `UPPER_SNAKE_CASE`.
- **Type Annotations**:
  - Always strictly type function parameters and return types.
  - Avoid `any` under all circumstances; prefer `unknown`, generics, or discriminated unions.
