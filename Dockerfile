FROM nginx

#COPY _nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /etc/nginx/nginx.conf

COPY _nginx/nginx.conf /etc/nginx/

RUN rm -rf /usr/share/nginx/html/*

COPY /dist/bookStoreWeb /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
