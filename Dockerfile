FROM node:18-alpine3.16
WORKDIR /app

COPY package.json pnpm-lock.yaml ./prisma ./

RUN npm install -g pnpm
RUN pnpm install

RUN pnpm prisma generate

COPY . .

RUN if [ "$ENV" = "production" ]; then pnpm run build; fi

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
