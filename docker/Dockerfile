FROM trafex/php-nginx
MAINTAINER "aric <1290657123@qq.com>"

# start app
COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["bash","/entrypoint.sh"]
