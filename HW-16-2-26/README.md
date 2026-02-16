docker build -t my-node-health-app:v0.1 .

docker run -d --name App1 -e APP_ID=App1  -p 3001:3000 my-node-health-app:v0.1
docker run -d --name App2 -e APP_ID=App2  -p 3002:3000 my-node-health-app:v0.1

docker exec -it App1 bash
docker exec -it App2 bash

tail -f logs/myapp.log 

docker run -d --name App1 -e APP_ID=App1  -p 3001:3000 -v ./logs/app1:/usr/src/app/logs my-
node-health-app:v0.1

docker run -d --name App2 -e APP_ID=App2  -p 3002:3000 -v ./logs/app2:/usr/src/app/logs my-
node-health-app:v0.1

docker rm -f $(docker ps -q)