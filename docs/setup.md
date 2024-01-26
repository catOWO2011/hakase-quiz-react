# Setup project

## Docker setup

Create docker image
```bash
docker build -t hakase-quiz .
```
Run the image
```bash
docker run --rm -p 5200:3000 --volume "$(pwd):/app" -v /app/node_modules hakase-quiz

docker run --rm -p 5200:3000 --volume "$(pwd):\app" hakase-quiz
```