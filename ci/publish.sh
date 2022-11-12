CONTAINER_ID=`docker ps -a -q -f name=web-evo-site`
IMAGE_ID=$(docker images | grep "web-evo-site" | awk '{print $3}')
echo $CONTAINER_ID
echo "停止 web-evo-site"
if [ -n "$CONTAINER_ID" ]
then
  docker stop $CONTAINER_ID
  echo "删除 web-evo-site 容器"
  docker rm $CONTAINER_ID
fi
if [ -n "$IMAGE_ID" ]
then
  echo "删除 web-evo-site 镜像"
  docker rmi $IMAGE_ID
fi
echo "开始 web-evo-site 镜像打包"
docker build -t web-evo-site .
echo "运行 web-evo-site 镜像：4211"
docker run --name web-evo-site -p 4211:3000 -d web-evo-site
echo "部署完成"
