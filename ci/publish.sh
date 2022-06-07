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
echo "开始 developer-center-web 镜像打包"
docker build -t developer-center-web .
echo "运行 developer-center-web 镜像：4206"
docker run --name developer-center-web -p 4206:3000 -d developer-center-web
echo "部署完成"
