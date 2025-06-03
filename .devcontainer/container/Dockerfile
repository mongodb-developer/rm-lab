FROM mcr.microsoft.com/devcontainers/python

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
    
# Copy necessary files
COPY /commands/ /

# run tools instalation
RUN /install-mongodb-db-tools.sh
