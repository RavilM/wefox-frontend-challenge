FROM nginx

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports

#RUN rm -rf /etc/nginx/conf.d/default.conf
#RUN rm -rf /etc/nginx/nginx.conf
COPY ./config/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx/conf.d/default.conf; sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

EXPOSE 8080

WORKDIR /usr/share/metadata/core

COPY build /usr/share/metadata/core/build



