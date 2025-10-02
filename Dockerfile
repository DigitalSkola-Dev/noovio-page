# --- Dependencies build stage ---
FROM node:20-alpine AS deps

# Install required system packages for canvas
RUN apk add --no-cache \
  build-base \
  cairo-dev \
  pango-dev \
  jpeg-dev \
  giflib-dev \
  librsvg-dev \
  python3

WORKDIR /app

# Copy package manifests
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the app
RUN yarn build

# --- Production image ---
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy necessary files from the build stage
COPY --from=deps /app ./

# Expose app port
EXPOSE 3000

# Set environment variable if needed
# ENV NODE_ENV=production

CMD ["yarn", "start"]