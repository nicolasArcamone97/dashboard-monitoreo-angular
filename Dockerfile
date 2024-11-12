# Etapa de construcción: construye la aplicación Angular
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=production

# Etapa de producción: servidor Nginx sin HTTPS
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la aplicación Angular desde la etapa de construcción
COPY --from=build /app/dist/dashboard-monitoreo-angular /usr/share/nginx/html

EXPOSE 80


