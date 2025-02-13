FROM nginx:1.27.3-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist/ /www

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
