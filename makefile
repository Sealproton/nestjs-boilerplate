name ?= default_name

migration-generate:
	yarn migration:generate ./src/db/migrations/$(name)

up: 
	docker-compose up -d

down:
	docker-compose down