# Inmobiliaria

Aplicación web para una inmobiliaria desarrollada con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- Interfaz moderna y responsiva
- Navegación fluida entre secciones
- Diseño atractivo con imágenes de propiedades
- Componentes reutilizables
- Tipado estático con TypeScript
- Estilos con Tailwind CSS

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI accesibles

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Inmobiliaria
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   # o
   yarn dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
Inmobiliaria/
├── app/                  # Rutas y páginas de la aplicación
├── components/           # Componentes reutilizables
│   └── ui/               # Componentes de UI personalizados
├── public/               # Archivos estáticos
│   └── images/           # Imágenes del sitio
├── styles/               # Estilos globales
├── .gitignore
├── next.config.js        # Configuración de Next.js
├── package.json
├── tailwind.config.ts    # Configuración de Tailwind CSS
└── tsconfig.json        # Configuración de TypeScript
```

## 🌐 Despliegue

El proyecto está configurado para desplegarse en Vercel. Realiza un push a la rama `main` para desplegar automáticamente.

