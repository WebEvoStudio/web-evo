CONTAINER_ID=`docker ps -a -q -f name=developer-center-web`
IMAGE_ID=$(docker images | grep "developer-center-web" | awk '{print $3}')
echo $CONTAINER_ID
echo "停止 developer-center-web"
if [ -n "$CONTAINER_ID" ]
then
  docker stop $CONTAINER_ID
  echo "删除 developer-center-web 容器"
  docker rm $CONTAINER_ID
fi
if [ -n "$IMAGE_ID" ]
then
  echo "删除 developer-center-web 镜像"
  docker rmi $IMAGE_ID
fi
echo "开始拉取镜像: developer-center-web:latest"
docker pull 116.62.214.205:5000/developer-center-web:latest
echo "镜像拉取完成"
echo "启动 developer-center-web 容器：4206"
docker run --name "developer-center-web" -p 4206:3000 -d "116.62.214.205:5000/developer-center-web:latest"
echo "容器启动完成"
