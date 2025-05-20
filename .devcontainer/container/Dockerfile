FROM mcr.microsoft.com/devcontainers/universal:linux

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy necessary files
COPY install-mongodb-db-tools.sh /home/install-mongodb-db-tools.sh
COPY import.sh /home/import.sh

# run tools instalation
RUN /home/install-mongodb-db-tools.sh
