up:
	docker-compose up

down:
	docker-compose down
	docker rmi 'api-slack-integration'
	docker rmi 'node:alpine'