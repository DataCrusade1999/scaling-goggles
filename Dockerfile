FROM node:16.17.0-slim
WORKDIR /serious-effort
COPY package*.json .
RUN npm ci --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

