FROM wefoxgroup/wg-web-challenge:latest

#ENV ENDPOINT_INSTRUCTIONS_PROD "/ns/materials/education-go/api/v1/instructions"
#ENV ENDPOINT_THEMES_PROD "/ns/materials/education-go/api/v1/themes"
#ENV ENDPOINT_VIDEOS_PROD "/ns/materials/education-go/api/v1/videos"
#ENV ENDPOINT_FAQ_PROD "/ns/faq/education-go/api/v1/faqs"
#ENV ENDPOINT_SEARCH_MATERIALS_PROD "/ns/materials/education-go/api/v1/search"
#ENV ENDPOINT_GET_THEME_DESCRIPTION_PROD "/ns/materials/education-go/api/v1/theme"
#ENV ENDPOINT_GET_EVENT_BY_ID_PROD "/ns/materials/education-go/api/v1/get_event"
#ENV ENDPOINT_GET_EVENTS_PROD "/ns/trainings/education-go/api/v1/get_events"
#ENV ENDPOINT_REGISTRATION_FOR_EVENT_PROD "/ns/trainings/education-go/api/v1/register"
#ENV ENDPOINT_GET_PARTICIPANTS_EVENT_PROD "/ns/trainings/education-go/api/v1/participants_event"
#ENV ENDPOINT_DELETE_PARTICIPANT_BY_ID_EVENT_PROD "/ns/trainings/education-go/api/v1/delete_employee"
#ENV ENDPOINT_POST_VIEW_VIDEO_PROD "/ns/materials/education-go/api/v1/view/video"
#ENV ENDPOINT_GET_LOCATIONS_PROD "/ns/trainings/education-go/api/v1/locations"
#ENV ENDPOINT_GET_THEMES_TRAININGS_PROD "/ns/materials/education-go/api/v1/themes"
#
## add bash
#RUN apk add --update bash
#
## set process working directory
#WORKDIR /usr/share/metadata/core
#
## nginx configs
#RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
#RUN rm -rf /etc/nginx/conf.d/default.conf
#RUN rm -rf /etc/nginx/nginx.conf
#COPY config/deploy/nginx.conf /etc/nginx/nginx.conf
#
## copy test certs
#COPY config/test-certs /certs
#
##copy configs
#COPY config/deploy /usr/share/metadata/core/config/deploy
#
## set roots to files
#RUN chmod +x /usr/share/metadata/core/config/deploy/runtime-envs/production/make-runtime-config.sh
#
## copy build artefacts
#COPY build /usr/share/metadata/core/build

# open port
#EXPOSE 443
#
#CMD [ "bash","/usr/share/metadata/core/config/deploy/start.sh" ]
