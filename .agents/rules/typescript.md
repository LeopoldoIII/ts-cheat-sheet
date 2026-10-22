# Reglas de TypeScript

- **Configuración Estricta**: Respetar las opciones de `tsconfig.json` (`strict: true`, `noImplicitAny: true`, etc.).
- **Prohibido `any`**: Utilizar tipos explícitos, genéricos con restricciones o `unknown` con type narrowing (usando `typeof`, `instanceof` o type guards).
- **Tipos e Interfaces**:
  - Preferir `interface` para definir modelos de datos y APIs públicas extensibles.
  - Usar `type` para uniones (`type Status = 'idle' | 'loading' | 'success'`), tuplas e intersecciones complejas.
- **Inmutabilidad y Buenas Prácticas**:
  - Favorecer `readonly` en propiedades cuando aplique y `const` sobre `let`.
  - No usar `var`.
