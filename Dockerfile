FROM node:18-alpine as dev-deps
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install --frozen-lockfile --shamefully-hoist

FROM node:18-alpine as builder
RUN npm install -g pnpm
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build
RUN pnpm run postinstall

FROM node:18-alpine as prod-deps
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install --frozen-lockfile --shamefully-hoist

FROM node:18-alpine as prod
EXPOSE 3000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
CMD ["node", ".output/server/index.mjs"]

