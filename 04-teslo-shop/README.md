# Teslo Shop

## Correr en dev
1. Clonar el respositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Limpiar el local storage del navegador web
8. Correr el proyecto ```npm run dev```

## Correr en prod


### Notas
Dependencias para tailwind -> Condicionales en Tailwind para NextJS
```
npm install clsx
```