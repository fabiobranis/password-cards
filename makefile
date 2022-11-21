all: install-deps lint test-all build-server build-client start-applications
test-all: test-client test-server
install-deps:
	npm install
lint:
	npm run lint
test-client:
	cd client && npm run test:unit
test-server:
	cd server && npm run test
build-server:	
	cd server && docker build . -t fabio-nunes/velozient-server
build-client:	
	cd client && docker build . -t fabio-nunes/velozient-client
start-applications:
	docker compose up -d