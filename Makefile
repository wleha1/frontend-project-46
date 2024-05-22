install:
		node -v
		npm ci
lint:
		npx eslint .
test:
		npx jest --colors
test-coverage:
		npx jest --coverage
link:
		sudo npm link
