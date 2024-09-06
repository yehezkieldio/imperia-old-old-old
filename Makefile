# Note: If you're using Visual Studio Code, don't forget to convert indentation to tabs when modifying this file

# ---------------------------------------------------------------------------- #

# Load the environment variables from .env file
ifneq (,$(wildcard ./.env))
	include .env
	export
endif

# Variables
DEVELOPMENT_COMPOSE_PATH = docker/development/compose.yml

DISCORD_BOT_PATH = apps/discord-bot/Dockerfile
AGGREGATOR_PATH = apps/aggregator/Dockerfile
WEB_PATH = apps/web/Dockerfile

# ---------------------------------------------------------------------------- #

# Default target
PHONY: help
help:
	@echo "Available targets:"
	@echo "  dev-up: Start development environment"
	@echo "  dev-down: Stop development environment"
	@echo "  dev-logs: Show development environment logs"
	@echo "  dev-prune: Stop development environment and remove volumes"
	@echo "  build-discord-bot: Build discord bot image"
	@echo "  build-aggregator: Build aggregator image"
	@echo "  build-web: Build web image"

# ---------------------------------------------------------------------------- #

.PHONY: dev-
dev-up:
	docker compose --file $(DEVELOPMENT_COMPOSE_PATH) --env-file .env up -d

.PHONY: dev-down
dev-down:
	docker compose --file $(DEVELOPMENT_COMPOSE_PATH) --env-file .env down

.PHONY: dev-logs
dev-logs:
	docker compose --file $(DEVELOPMENT_COMPOSE_PATH) --env-file .env logs -f

.PHONY: dev-prune
dev-prune:
	docker compose --file $(DEVELOPMENT_COMPOSE_PATH) --env-file .env down --volumes --remove-orphans

# ---------------------------------------------------------------------------- #

.PHONY: build-discord-bot
build-discord-bot:
	docker build -f $(DISCORD_BOT_PATH) -t ixveria-discord-bot .

.PHONY: build-aggregator
build-aggregator:
	docker build -f $(AGGREGATOR_PATH) -t ixveria-aggregator .

.PHONY: build-web
build-web:
	docker build -f $(WEB_PATH) -t ixveria-web .