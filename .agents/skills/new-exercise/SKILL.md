---
name: new-exercise
description: >-
  Use this skill whenever the user asks to generate, scaffold, or format new exercises,
  challenges, or practice notebooks, OR to add/insert a new practice challenge or section
  into an existing notebook or test file in this repository. Enforces English code, objective markdown,
  code samples, and unanswered practice challenges with automated assert validations.
---

# New Exercise Generator & Challenge Insertion Skill

This skill enforces the official pedagogical standard for generating TypeScript/JavaScript exercises and inserting new challenges into existing notebooks in `ts-cheat-sheet`.

---

## Instructions for the Agent

Always adhere to the repository standards:
1. **Language**: Write all code, comments, docstrings, prompts, and markdown explanations strictly in **English**.
2. **Structure**: Follow the 3-phase layout:
   - **Phase 1 (Objective)**: Markdown header with `### 🎯 Objective`.
   - **Phase 2 (Sample)**: `### 📖 1. Code Sample` containing runnable demonstration code.
   - **Phase 3 (Challenge)**: `### 💻 Practice Challenge (Your Turn)` containing an uncompleted function with `// YOUR CODE HERE` and automated `assert` validation statements.
   - **Hint & Solution**: Collapsible `<details><summary>💡 Hint</summary>` and `<details><summary>🔍 Solution</summary>`.
3. **Type Annotations**: Include strict TypeScript annotations on function parameters and return types (no `any`).
4. **Auto-validation**: Provide at least 3 distinct test assertions using `node:assert/strict` (`assert.strictEqual` / `assert.deepStrictEqual`), including at least one edge case (e.g., empty collection, zero, empty string, negative number).

---

## Operating Modes

### Mode 1: Creating a New Notebook / Topic
When the user requests a new notebook or exercise file:
- Create the `.ipynb` with the standard notebook structure (Title $\rightarrow$ Objective $\rightarrow$ Code Sample $\rightarrow$ Practice Challenge with asserts $\rightarrow$ Collapsible Hint & Solution).
- Ensure the kernelspec is set to Deno:
  ```json
  "kernelspec": {
    "display_name": "Deno",
    "language": "typescript",
    "name": "deno"
  }
  ```

### Mode 2: Adding / Inserting a Challenge into an Existing Notebook
When the user asks to add an extra practice challenge to an existing section or notebook:
1. **Inspect Existing Cells**: Read the destination `.ipynb` JSON and locate the target section.
2. **Preserve Existing Content**: Do not overwrite or delete previous cells.
3. **Insert Challenge Cells**: Insert the 3-cell challenge block directly after the previous challenge's solution:
   - Cell 1 (Markdown): `### 💻 Practice Challenge N: [Title] (Your Turn)` with instructions and constraints.
   - Cell 2 (Code): Function boilerplate with type annotations, `// YOUR CODE HERE`, and automated `assert` test cases.
   - Cell 3 (Markdown): Collapsible `<details><summary>💡 Hint</summary>` and `<details><summary>🔍 Solution</summary>`.
4. **Validate**: Verify the assertions pass with the official solution using `deno eval` or `node -e`.

---

## Exercise Template Reference

````markdown
### 💻 Practice Challenge: [Title] (Your Turn)

**Instructions:**
Detailed problem statement with inputs, expected output, and edge case expectations.

```typescript
import assert from "node:assert/strict";

function solveProblem(param1: number, param2: string[]): boolean {
    /**
     * Brief explanation of expected behavior.
     */
    // ==========================================
    // YOUR CODE HERE
    // ==========================================
    throw new Error("Not implemented yet");
}

// 🧪 Automated Test Cases
assert.strictEqual(solveProblem(10, ["a"]), true);
assert.strictEqual(solveProblem(0, []), false); // Edge case
console.log("✅ All test cases passed successfully!");
```

<details>
<summary>💡 Hint</summary>
A brief clue to help the learner without giving away the direct solution.
</details>

<details>
<summary>🔍 Solution</summary>

```typescript
function solveProblem(param1: number, param2: string[]): boolean {
    // Official reference implementation
    return param1 > 0 && param2.length > 0;
}
```
</details>
````
