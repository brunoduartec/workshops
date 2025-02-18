# Usa a imagem oficial Node.js como base
FROM node:14

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para dentro do container
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a API
CMD ["npm", "start"]