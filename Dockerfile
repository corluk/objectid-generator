FROM node
WORKDIR /app/ 
COPY . .  
EXPOSE 8090 
CMD ["node", "-r","esm","src/main.js"]