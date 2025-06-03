FROM mcr.microsoft.com/devcontainers/python

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy necessary files
COPY install-mongodb-db-tools.sh /home/install-mongodb-db-tools.sh
COPY import.sh /home/import.sh
COPY create-mongodb-user.js /home/create-mongodb-user.js
COPY create-mongodb-user.sh /home/create-mongodb-user.sh 

# run tools instalation
RUN /home/install-mongodb-db-tools.sh
