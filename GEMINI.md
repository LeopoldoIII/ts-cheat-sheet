# Gemini Agent Configuration - TypeScript / JavaScript Cheat Sheet

Este repositorio es una guía práctica e interactiva para dominar TypeScript y JavaScript, diseñada con fines didácticos, estudio estructurado y preparación para entrevistas técnicas.

---

## 📌 Contexto del Proyecto

- **Objetivo**: Proporcionar explicaciones claras, comparaciones conceptuales (especialmente para personas con experiencia previa en Python u otros lenguajes) y ejemplos ejecutables con rigor profesional.
- **Formato Híbrido**:
  - **Notebooks interactivos (`.ipynb`)**: Ejecutados con el kernel de **Deno** para experimentar celda por celda.
  - **Archivos TypeScript/JavaScript estándar (`.ts`, `.js`)**: Para pruebas unitarias con **Vitest**, scripts y módulos convencionales.

---

## 🗂️ Estructura de Directorios

- `01_basic_concepts/`: Variables (`let`, `const`), tipos primitivos, control de flujo, funciones flecha.
- `02_data_structures/`: Arrays, Tuplas, Objects, Maps, Sets, tipado e iteración.
- `03_functional_programming/`: Métodos de orden superior (`map`, `filter`, `reduce`), asincronía, closures.
- `04_advanced_concepts/`: Genéricos, Utility Types (`Partial`, `Pick`, `Omit`, `Record`), discriminators.
- `05_testing/`: Pruebas unitarias utilizando **Vitest** con el patrón AAA.
- `06_integrations_and_apis/`: Consumo de APIs con `fetch`, manejo de JSON y tipos estrictos para respuestas.
- `07_best_practices/`: Principios SOLID en TS, configuración estricta del compilador, guard clauses.
- `08_algorithms_and_interviews/`: Problemas comunes de entrevistas (two-sum, anagramas, hashing) resueltos y tipados en TS.
- `09_oop/`: Clases, interfaces, modificadores de acceso, herencia y polimorfismo.

---

## 🛠️ Tecnologías y Entorno

- **Runtime principal**: Node.js (LTS) & Deno (para Jupyter kernel).
- **TypeScript**: Configurado en modo estricto (`"strict": true`, CommonJS / ES2022 en `tsconfig.json`).
- **Testing**: [Vitest](https://vitest.dev/) (`^5.0.2`).
- **Ejecución directa**: `npx tsx <archivo.ts>` o `deno run <archivo.ts>`.
- **Notebooks**: Jupyter con kernel Deno (`deno jupyter --unstable --install`).

---

## ⚡ Comandos Frecuentes

```bash
# Ejecutar todas las pruebas unitarias
npm test -- --run

# Ejecutar pruebas en modo observador (watch)
npm test

# Ejecutar un archivo TypeScript directamente con tsx
npx tsx 05_testing/math.ts

# Comprobar tipos con el compilador de TypeScript
npx tsc --noEmit
```

---

## 📐 Convenciones Críticas

1. **Idioma Estricto**: Todo el código, comentarios, docstrings, markdown de notebooks y aserciones de prueba en el repositorio deben estar en **INGLÉS**.
2. **Plantilla de 3 Fases**: Todo notebook o ejercicio interactivo debe seguir:
   - **Phase 1**: Objective & Context.
   - **Phase 2**: Working Code Sample.
   - **Phase 3**: Practice Challenge (función con tipado estricto, `// YOUR CODE HERE`, validaciones automáticas con `import assert from "node:assert/strict";` y pistas/soluciones colapsables).
3. **Tipado Estricto**: Prohibido el uso de `any`; favorecer `unknown`, genéricos o tipos específicos.
4. **Verificación**: Siempre ejecutar `npm test -- --run` y comprobar tipos antes de dar una tarea por concluida.
