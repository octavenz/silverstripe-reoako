FROM --platform=linux/x86_64 php:7.4-apache-buster as base
MAINTAINER Octave "<support@octave.co.nz>"
WORKDIR /var/www/html

ENV DEBIAN_FRONTEND=noninteractive

# Install components
RUN apt-get update -y && apt-get install -y \
    curl \
    git-core \
    gzip \
    openssh-client \
    unzip \
    zip \
    mariadb-client \
    libcurl4-openssl-dev \
    libgd-dev \
    libtidy-dev \
    libmcrypt-dev \
    libxslt-dev \
    zlib1g-dev \
    libicu-dev \
    g++ \
    libldap2-dev \
    libzip-dev \
    libxml2-dev \
    --no-install-recommends && \
    curl -sS https://silverstripe.github.io/sspak/install | php -- /usr/local/bin && \
    curl -sS https://getcomposer.org/installer > /tmp/installer && php /tmp/installer --version=2.2.10 && mv composer.phar /usr/local/bin/composer && \
    apt-mark auto \
    zlib1g-dev \
    libicu-dev \
    g++ \
    libxml2-dev \
    libxslt-dev && \
    pecl install mcrypt-1.0.5 && docker-php-ext-enable mcrypt && \
    docker-php-ext-configure intl && \
    docker-php-ext-configure pdo_mysql && \
    docker-php-ext-configure mysqli --with-mysqli=mysqlnd && \
    docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
    docker-php-ext-install -j$(nproc) \
    bcmath \
    intl \
    gd \
    mysqli \
    pdo \
    pdo_mysql \
    tidy \
    xsl \
    zip && \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false && \
    rm -rf /var/lib/apt/lists/*

FROM --platform=linux/x86_64 base as nginx
ADD docker/nginx/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN echo "ServerName localhost" > /etc/apache2/conf-available/fqdn.conf && \
    echo "date.timezone = Pacific/Auckland" > /usr/local/etc/php/conf.d/timezone.ini && \
    echo "upload_max_filesize=10M" > $PHP_INI_DIR/conf.d/upload_max_filesize.ini && \
    echo "post_max_size=256M" > $PHP_INI_DIR/conf.d/post_max_size.ini && \
    echo "memory_limit=512M" > $PHP_INI_DIR/conf.d/memory_limit.ini && \
    a2enmod rewrite expires remoteip cgid headers && \
    usermod -u 1000 www-data && \
    usermod -G staff www-data && \
    install -d -m 0755 -o www-data -g staff /var/www/.composer && \
    # Security hardening
    sed -e 's/^expose_php.*/expose_php = Off/' "$PHP_INI_DIR/php.ini-production" > "$PHP_INI_DIR/php.ini" && sed -i -e 's/^ServerSignature.*/ServerSignature Off/' -e 's/^ServerTokens.*/ServerTokens Prod/' /etc/apache2/conf-available/security.conf


WORKDIR /var/www/html
USER www-data

FROM --platform=linux/x86_64 nginx as composer-install

RUN mkdir -p composer silverstripe-cache composer-cache
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader
COPY --chown=www-data:nogroup . ./

USER root
RUN chown -R www-data:nogroup ./public/
USER www-data
RUN composer dumpautoload
# Silverstripe-specific command that creates "resources" directory in "public" and symlinks the themes

RUN composer vendor-expose

USER root
ARG VERSION=dev
ENV APPLICATION_VERSION=${VERSION}
ENV VERSION=${VERSION}

FROM composer-install as app
ENV SS_ENVIRONMENT_TYPE live
ENV SS_TRUSTED_PROXY_PROTOCOL_HEADER HTTP_X_FORWARDED_PROTO
ENV SS_TRUSTED_PROXY_HOST_HEADER HTTP_X_FORWARDED_HOST
ENV SS_TRUSTED_PROXY_IP_HEADER HTTP_X_FORWARDED_FOR
ENV SS_TRUSTED_PROXY_IPS 0.0.0.0/0
CMD ["apache2-foreground"]

FROM composer-install as app-dev
ENV SS_ENVIRONMENT_TYPE dev
# Install Xdebug for local development only.
# Note: current use of 'host.docker.internal' to detect IP only works on Mac and Windows. Need alternative approach for Linux
# RUN pecl install xdebug && docker-php-ext-enable xdebug && \
# 	sed -i '1 a xdebug.remote_enable=1' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
# 	sed -i '1 a xdebug.remote_autostart=true' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
# 	sed -i '1 a xdebug.remote_mode=req' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
# 	sed -i '1 a xdebug.remote_handler=dbgp' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \-
# 	sed -i '1 a xdebug.remote_connect_back=0' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
# 	sed -i '1 a xdebug.remote_host=host.docker.internal' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
# 	sed -i '1 a xdebug.remote_port=9000' /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN composer install --dev --no-scripts --no-autoloader && \
    composer vendor-expose

CMD ["apache2-foreground"]

FROM app-dev as app-test
ENV SS_ENVIRONMENT_TYPE=test

RUN composer dumpautoload

COPY test.sh ./
CMD sh -c '/var/www/html/test.sh'

FROM app as package
# COPY --from=frontend /var/www/html .

FROM composer-install as tasks-base
RUN curl -L https://github.com/webdevops/go-crond/releases/download/0.6.1/go-crond-64-linux-dynamic > /usr/local/bin/go-crond && chmod +x /usr/local/bin/go-crond
COPY docker/crontab /var/www/crontab
RUN chmod 0600 /var/www/crontab

FROM tasks-base as tasks
CMD ["go-crond", "--verbose", "--no-auto", "www-data:/var/www/crontab"]

FROM tasks-base as tasks-dev
ENTRYPOINT []
CMD ["go-crond", "--verbose", "--no-auto", "www-data:/var/www/crontab"]
