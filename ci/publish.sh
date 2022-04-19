CONTAINER_ID=`docker ps -a -q -f name=developer-center-web-standalone`
IMAGE_ID=$(docker images | grep "developer-center-web-standalone" | awk '{print $3}')
echo $CONTAINER_ID
echo "停止 developer-center-web-standalone"
if [ -n "$CONTAINER_ID" ]
then
  docker stop $CONTAINER_ID
  echo "删除 developer-center-web-standalone 容器"
  docker rm $CONTAINER_ID
fi
if [ -n "$IMAGE_ID" ]
then
  echo "删除 developer-center-web-standalone 镜像"
  docker rmi $IMAGE_ID
fi
echo "开始 developer-center-web-standalone 镜像打包"
docker build -t developer-center-web-standalone .
echo "运行 developer-center-web-standalone 镜像：4207"
docker run --name developer-center-web-standalone -p 4207:3000 -d developer-center-web-standalone
echo "部署完成"
