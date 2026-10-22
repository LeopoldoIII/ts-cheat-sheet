# Exercise Standards & Template

Every notebook or script that contains coding challenges or practice problems must strictly follow this mandatory 3-phase structure:

## 1. The 3-Phase Template

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

## 2. Quality Constraints

- **No Raw Code Dumps**: Notebooks must NEVER contain raw, uncaptioned code cells without Markdown context, type annotations, or test cases.
- **Edge Cases in Tests**: Automated asserts must cover standard inputs and at least one boundary/edge case (e.g., empty array `[]`, `0`, empty string `""`, or negative values).
- **Offline Reliability**: Use standard assertions (`import assert from "node:assert/strict";`) with `assert.strictEqual` for primitives and `assert.deepStrictEqual` for objects/arrays.
