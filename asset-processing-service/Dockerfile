# Use the official Python image as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the project.toml and poetry.lock files into the container
COPY pyproject.toml poetry.lock /app/

# Install Poetry
RUN pip install poetry

# Install dependencies
RUN poetry install --no-root

# Copy the current directory contents into the container at /app
COPY . /app

# Run the application
CMD ["poetry", "run", "asset-processing-service"]
