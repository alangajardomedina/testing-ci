#Imagen base de Node
FROM node:18

#Crear directorio de la app
WORKDIR /app

#Copiar package.json y package-lock-json
COPY package*.json ./

#Instalar dependencias
RUN npm install

#Copiar el resto del código
COPY . .

#Exponer puerto
EXPOSE 3000

#Comando para levantar la app
CMD [ "node", "src/index.js" ]