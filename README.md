# IMA Abogados & Asociados — Sitio Web

Sitio web profesional para IMA Abogados & Asociados. Construido con React + Vite.

## 🚀 Cómo desplegar en Vercel

### Opción 1: Subir el ZIP directamente
1. Ve a [vercel.com](https://vercel.com) e inicia sesión (o crea cuenta gratuita)
2. Haz clic en **"Add New Project"**
3. Selecciona **"Import Third-Party Git Repository"** o usa **"Deploy from CLI"**

### Opción 2: Usar Vercel CLI (recomendado)
```bash
# 1. Instala Node.js si no lo tienes: https://nodejs.org

# 2. En la carpeta del proyecto, instala dependencias:
npm install

# 3. Instala Vercel CLI:
npm install -g vercel

# 4. Despliega:
vercel

# 5. Sigue las instrucciones en pantalla
```

### Opción 3: GitHub + Vercel (más sencillo a largo plazo)
1. Sube el proyecto a GitHub
2. Ve a vercel.com y conecta tu cuenta de GitHub
3. Selecciona el repositorio → ¡deploy automático!

## 🛠️ Desarrollo local

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

## 📁 Estructura

```
ima-abogados/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .module.css
│   │   ├── Hero.jsx + .module.css
│   │   ├── Services.jsx + .module.css
│   │   ├── About.jsx + .module.css
│   │   ├── Contact.jsx + .module.css
│   │   ├── Footer.jsx + .module.css
│   │   └── WhatsAppFloat.jsx + .module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## ✏️ Personalización

- **WhatsApp**: El número `3150595839` está en todos los componentes. Para cambiarlo, busca `573150595839` en los archivos.
- **Colores**: Edita las variables en `src/styles/global.css`
- **Contenido**: Edita los arrays de servicios en `Services.jsx` y la información en `About.jsx`, `Contact.jsx`
