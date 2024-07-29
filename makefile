name ?= default_name

migration-generate:
	yarn migration:generate --name=$(name)

up: 
	docker-compose up -d

down:
	docker-compose down