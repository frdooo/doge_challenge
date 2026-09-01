# Stage 1: Build production React assets
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package descriptors first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies cleanly
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve static build with Nginx
FROM nginx:alpine AS runner

# Remove default nginx static assets and config
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration for SPA routing & port 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
