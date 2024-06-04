# Makefile for building and running the Dockerized React and Python app

# Set your preferred image names
FRONTEND_IMAGE = privasee-frontend-image
BACKEND_IMAGE = privasee-backend-image

# Set the network name
NETWORK = privasee-net

# Build Docker images for frontend and backend
# and create docker network
build:
	docker network create $(NETWORK)
	docker-compose -f docker-compose.yml build

build-frontend:
	docker network create $(NETWORK)
	docker-compose -f docker-compose.yml build frontend

build-backend:
	docker network create $(NETWORK)
	docker-compose -f docker-compose.yml build backend

# Run Docker containers with Docker Compose
run:
	docker-compose -f docker-compose.yml up

run-frontend:
	docker-compose -f docker-compose.yml up frontend

run-backend:
	docker-compose -f docker-compose.yml up backend

# Clean up containers, images, and network for frontend
clean-frontend:
	docker-compose -f docker-compose.yml down
	docker network rm $(NETWORK)
	docker rmi -f $(FRONTEND_IMAGE)
	docker rmi -f 'privasee-ui_frontend'
	docker system prune -f

clean:
	docker-compose -f docker-compose.yml down
	docker network rm $(NETWORK)
	docker rmi -f $(FRONTEND_IMAGE)
	docker rmi -f $(BACKEND_IMAGE)
	docker rmi -f 'privasee-ui_frontend'
	docker rmi -f 'privasee-ui_backend'
	docker system prune -f

# Clean up containers, images, and network for backend
clean-backend:
	docker-compose -f docker-compose.yml down
	docker network rm $(NETWORK)
	docker rmi -f $(BACKEND_IMAGE)
	docker system prune -f

# Help message
help:
	@echo "Available make targets:"
	@echo "  build-frontend    - Build Docker image for the frontend"
	@echo "  build-backend     - Build Docker image for the backend"
	@echo "  run-frontend      - Run Docker containers for the frontend"
	@echo "  run-backend       - Run Docker containers for the backend"
	@echo "  clean-frontend    - Clean up frontend containers, images, and network"
	@echo "  clean-backend     - Clean up backend containers, images, and network"
	@echo "  help              - Display this help message"

.PHONY: build-frontend build-backend run-frontend run-backend clean-frontend clean-backend help
