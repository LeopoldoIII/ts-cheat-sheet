# TypeScript / JavaScript Cheat Sheet

This repository is a practical and structured guide to mastering TypeScript and JavaScript, replicating concepts through a step-by-step learning approach (ideal if you are transitioning from languages like Python).

The unique feature of this repository is that it uses **Interactive Jupyter Notebooks (`.ipynb`) powered by Deno**. This allows you to directly execute and test TypeScript and JavaScript code cell-by-cell in an interactive environment. For topics that require standard project structures (like Testing), we use standard `.ts` files.

## 🗂️ Repository Structure

The repository is organized by logical topics and concepts to facilitate studying and interview preparation:

* **`01_basic_concepts`:** Variables (`let`, `const`), control flow, loops, arrow functions, and basic differences between JS and TS.
* **`02_data_structures`:** Built-in data structures (`Arrays`, `Objects`, `Maps`, `Sets`) and how to type them in TS.
* **`03_functional_programming`:** Higher-order functions (`map`, `filter`, `reduce`), promises, `async/await`, and callbacks.
* **`04_advanced_concepts`:** Advanced concepts like `Generics`, `Utility Types`, decorators, closures, and the Event Loop.
* **`05_testing`:** Unit testing in the JS/TS ecosystem (usually with tools like Vitest or Jest).
* **`06_integrations_and_apis`:** Working with JSON, using native `fetch` for HTTP requests, and external libraries.
* **`07_best_practices`:** Best practices, SOLID principles applied to TS, strict compiler configurations, and ESLint/Prettier.
* **`08_algorithms_and_interviews`:** Common practical exercises in interviews (finding duplicates, counters, two-sum, etc.) solved in TS.
* **`09_oop`:** Object-Oriented Programming fundamentals: classes, interfaces (TS only), inheritance, polymorphism, and access modifiers.
* **`scripts`:** External utility scripts.

## 🛠️ Environment Setup (Installation)

Unlike Python, where we use `pyenv` and `venv`, in the JavaScript/TypeScript world we use **Node.js** and a package manager like `npm`.

### 1. Prerequisites
Make sure you have **Node.js** installed (preferably the current LTS version, v18 or v20+). You can install it using `nvm` (Node Version Manager) or by downloading it directly.

```bash
# If using nvm
nvm install --lts
nvm use --lts
```

### 2. Clone and Install Dependencies
Clone the repository and install the necessary tools (TypeScript and runners).

```bash
cd ts-cheat-sheet
npm install
```
This will install `typescript`, `tsx` (to execute files directly), and Node types.

## 🚀 How to Run the Code

This repository provides multiple ways to run your TypeScript and JavaScript code, depending on your preferred learning style.

### Option 1: Running from the terminal (tsx / Deno)

You can run individual `.ts` or `.js` files directly from your terminal without manually compiling them.

**Using `tsx` (Node.js ecosystem):**
```bash
# Run a JavaScript file
npx tsx 03_functional_programming/01_hof.js

# Run a TypeScript file
npx tsx 03_functional_programming/01_hof.ts
```

**Using `deno run` (Deno ecosystem):**
```bash
deno run 03_functional_programming/01_hof.ts
```

### Option 2: Interactive Notebooks (Jupyter)

For a fully interactive, cell-by-cell execution experience (identical to Python's Jupyter notebooks), we use **Deno** as the kernel. Some folders in this repository (like `01_basic_concepts`) have `.ipynb` files that combine Markdown and interactive TypeScript.

**How to set up Jupyter for TypeScript:**

1. **Install Deno**: 
   On macOS, use Homebrew to install the Deno runtime:
   ```bash
   brew install deno
   ```
2. **Install the Jupyter Kernel**: 
   Register Deno as a kernel for Jupyter by running this command in your terminal:
   ```bash
   deno jupyter --unstable --install
   ```
3. **Configure VS Code**:
   - Install the official **Jupyter** extension from the VS Code marketplace.
   - Open any `.ipynb` file in this repository.
   - Click on the Kernel selection in the top right corner (it might say "Python" or "Select Kernel").
   - Choose **Jupyter Kernel** -> **Deno**.
   
You can now write and execute fully typed TypeScript natively in your notebook cells!

### Option 3: Running Unit Tests (Vitest)

For modules that represent real-world project structures (like the `05_testing` module), we use `vitest`. The testing framework is included in the project's dependencies.

1. Ensure all dependencies are installed (which includes `vitest`):
   ```bash
   npm install
   ```
2. Run the tests using the configured npm script:
   ```bash
   npm test
   ```

---

*Happy Coding!* 🚀
