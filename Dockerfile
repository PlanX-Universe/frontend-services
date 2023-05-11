FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN npm install && \
    npm rebuild node-sass && \
    node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod

FROM nginx:alpine
ENV TZ=Europe/Berlin
RUN addgroup -g 9999 -S angularuser && \
    adduser -u 9999 -S angularuser -G angularuser

RUN touch /var/run/nginx.pid && \
    chown -R angularuser /usr/share/nginx /var/cache/nginx /var/run/nginx.pid

USER angularuser

COPY --from=builder /app/dist/apps/planx-frontend/ /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200/tcp
