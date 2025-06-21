FROM python:3.12-slim

WORKDIR /app

# Install system dependencies for psycopg2, build tools, etc.
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
  && rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies via Poetry
COPY pyproject.toml poetry.lock ./
RUN pip install --upgrade pip \
  && pip install poetry \
  && poetry config virtualenvs.create false \
  && poetry install --no-root

# Copy the rest of the backend code
COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]