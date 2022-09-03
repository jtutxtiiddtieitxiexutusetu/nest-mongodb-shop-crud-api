# only for dev image. not used in other stages
FROM node:18.6-slim AS dev_image
RUN npm i -g @nestjs/cli@9.1.1
RUN echo "alias ll='ls -lah'" >> /home/node/.bashrc
RUN apt-get update && apt-get install -y procps
USER node
WORKDIR /app
CMD ["bash", "-c", "while true ; do sleep 10 ; done ;"]

# this image will contain the "node_modules" only.
FROM node:18.6-slim AS modules_image
RUN mkdir /app && chown -R node:node /app
USER node
WORKDIR /app
ADD --chown=node:node source/package*.json /app/
RUN yarn

# this image will contain the "node_modules" + "sources".
FROM modules_image AS modules_sources_image
ADD --chown=node:node source /app

# for tests
FROM modules_sources_image AS tests_image
RUN ls -lah; echo "OK tests image is done";
CMD ["bash", "-c", "while true ; do sleep 10 ; done ;"]

# for build
FROM modules_sources_image AS dist_image
RUN yarn build

# this image is used for production (contains only "node_modules" + "dist")
FROM modules_image AS production_image
COPY --from=dist_image /app/dist /app/dist
CMD ["yarn", "start:prod"]
