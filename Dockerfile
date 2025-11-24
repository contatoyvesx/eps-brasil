# Build stage: install dependencies and create optimized production bundle
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies based on lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy application source and build
COPY . .
RUN npm run build

# Runtime stage: serve static assets with nginx
FROM nginx:1.27-alpine AS runner

# Replace default nginx configuration to support client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
