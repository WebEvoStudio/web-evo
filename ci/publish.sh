CONTAINER_ID=`docker ps -a -q -f name=next-app`
IMAGE_ID=$(docker images | grep "next-app" | awk '{print $3}')
echo $CONTAINER_ID
echo "停止 next-app"
if [ -n "$CONTAINER_ID" ]
then
  docker stop $CONTAINER_ID
  echo "删除 next-app 容器"
  docker rm $CONTAINER_ID
fi
if [ -n "$IMAGE_ID" ]
then
  echo "删除 next-app 镜像"
  docker rmi $IMAGE_ID
fi
echo "开始 next-app 镜像打包"
docker build -t next-app .
echo "运行 next-app 镜像：4206"
docker run --name next-app -p 4206:3000 -d next-app
