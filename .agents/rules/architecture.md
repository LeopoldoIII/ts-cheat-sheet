# Repository Architecture & Hierarchy

## 1. Directory Taxonomy by Level
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

## 2. Naming Conventions
- Folders: `XX_snake_case` (e.g., `04_advanced_concepts`).
- TypeScript files: `camelCase.ts` or `kebab-case.ts`.
- Concept notebooks: `XX_<topic>.ipynb` (e.g., `01_basic_concepts.ipynb`).
- Functions & Variables: `camelCase`.
- Classes, Interfaces & Type Aliases: `PascalCase`.
- Constants: `UPPER_SNAKE_CASE`.

## 3. Environment & Tools
- **Node.js**: v18+ (LTS).
- **TypeScript**: Strict compiler configuration (`"strict": true` in `tsconfig.json`).
- **Jupyter Kernel**: Deno (`deno jupyter --unstable --install`).
- **Test Runner**: Vitest (`npm test -- --run`).
- **Direct Execution**: `npx tsx <file.ts>` or `deno run <file.ts>`.
