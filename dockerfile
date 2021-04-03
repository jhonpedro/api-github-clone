FROM node
RUN mkdir -p /backend/
WORKDIR /backend/
COPY . .
RUN npm install
EXPOSE 8080
CMD npm start