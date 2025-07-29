# Install dependencies
FROM node:20 as deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Build the application
FROM node:20 as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Final production image
FROM node:20-slim as prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]