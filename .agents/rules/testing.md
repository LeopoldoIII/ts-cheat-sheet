# Reglas de Testing (Vitest)

- **Framework**: Vitest (`npm test`).
- **Convención de Nombres**: Los archivos de prueba deben terminar en `.test.ts` o `.spec.ts` y ubicarse junto al código fuente o en `05_testing/`.
- **Estructura**:
  - Usar `describe()` para agrupar funcionalidades coherentes.
  - Usar `it()` o `test()` con descripciones en tercera persona en presente o imperativo (ej. `"should add two numbers correctly"`).
  - Seguir el patrón AAA (*Arrange, Act, Assert*).
- **Verificación**: Ejecutar siempre `npm test -- --run` para verificar que todas las pruebas pasen antes de finalizar tareas de código.
