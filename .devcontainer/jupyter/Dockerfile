FROM jupyter/scipy-notebook:latest

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy the requirements.txt
COPY requirements.txt /home/jovyan/requirements.txt
COPY install-mongodb-db-tools.sh /home/jovyan/install-mongodb-db-tools.sh
COPY import.sh /home/jovyan/import.sh
