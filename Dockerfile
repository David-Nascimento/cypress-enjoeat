# Build stage
FROM node:14 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx AS production-stage
RUN adduser --system --no-create-home --disabled-password --group appuser
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
RUN chown -R appuser:appuser /etc/nginx /var/cache/nginx /var/run /var/log/nginx /app
USER appuser