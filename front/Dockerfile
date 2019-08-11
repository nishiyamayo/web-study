# build stage
FROM node:12.4.0 as builder

WORKDIR app
ADD . .
RUN yarn install
RUN yarn build

# app stage
FROM nginx
ADD ./nginx/server.conf /etc/nginx/conf.d/default.conf

RUN mkdir /root/logs && chmod 755 -R /root

COPY --from=builder /app/dist /root/public

EXPOSE 80
CMD ["/bin/bash", "-c", "sed -i \"s/{{ APP_PORT }}/${PORT}/g\" \"/etc/nginx/conf.d/default.conf\" && nginx -g \"daemon off;\""]
