# ApiConsola1.1

ApiConsola1.1 es un proyecto desarrollado en Node.js que proporciona una API interactiva para gestionar información desde la consola. Este proyecto puede ser utilizado como base para aplicaciones que necesitan interactuar con datos mediante comandos en la línea de comandos y una API REST.

---

## Características

- **Interacción mediante consola**: La aplicación permite gestionar datos directamente desde la consola.
- **API REST**: Proporciona un endpoint REST para integraciones externas.
- **Configuración sencilla**: Variables de entorno configurables para mayor flexibilidad.

---

## Requisitos Previos

1. **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Git**: Necesario para clonar el repositorio.

---


## Uso

1. **Iniciar la aplicación**:
   ```bash
   node src/index.js
   ```

2. **Interacción con la API**:
   - Por defecto, la API estará disponible en `http://localhost:3000/`. Puedes usar herramientas como Postman  para probarla.

---

## Estructura del Proyecto

```
ApiConsola1.1/
├── src/
│   ├── index.js        # Punto de entrada de la aplicación
│   └── ...             # Otros archivos relacionados con la lógica del proyecto
├── .env                # Variables de entorno
├── package.json        # Configuración del proyecto y dependencias
├── README.md           # Documentación
└── ...
```

