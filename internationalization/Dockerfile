FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD [ "pnpm", "run", "preview" ]
