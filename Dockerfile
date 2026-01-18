FROM node:20-alpine AS base

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:20-alpine AS runner

WORKDIR /app
RUN corepack enable
ENV NODE_ENV=production

COPY --from=base /app/package.json /app/pnpm-lock.yaml ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/next.config.ts ./next.config.ts
COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next

EXPOSE 3000
CMD ["pnpm", "start"]
