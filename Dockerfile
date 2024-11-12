# Etapa de construcción: construye la aplicación Angular
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod  # Asegúrate de usar la construcción de producción

# Etapa de producción:  Nginx para  los archivos estáticos
FROM nginx:alpine

# Copiado de los archivos de la aplicación Angular desde la etapa de construcción
COPY --from=build /app/dist/ /usr/share/nginx/html


EXPOSE 4200

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
