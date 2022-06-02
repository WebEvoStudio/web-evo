$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$SHA256 = curl --header "Accept:application/vnd.docker.distribution.manifest.v2+json" -I -XGET  http://116.62.214.205:5000/v2/developer-center-web/manifests/116.62.214.205:5000/developer-center-web:latest

echo $SHA256
#echo "开始 developer-center-web 镜像打包"
#docker build -t "developer-center-web" .
#echo "镜像打包完成: developer-center-web"
#echo "镜像添加Tag: 116.62.214.205:5000/developer-center-web:latest"
#docker tag developer-center-web:latest 116.62.214.205:5000/developer-center-web:latest
#echo "镜像推送到仓库"
#docker push 116.62.214.205:5000/developer-center-web:latest
#echo "镜像推送到仓库完成"
#echo "开始删除本地镜像"
#docker image rm 116.62.214.205:5000/developer-center-web:latest
#echo "发布镜像完成"


#$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web")
#$IMAGE_ID=(docker images -q --filter reference="developer-center-web")
#echo "容器ID: $CONTAINER_ID"
#echo "镜像ID: $IMAGE_ID"
#if ($CONTAINER_ID) {
#    echo "停止容器 developer-center-web"
#    docker stop $CONTAINER_ID
#    echo "删除 developer-center-web 容器"
#    docker rm $CONTAINER_ID
#}
#if ($IMAGE_ID) {
#    echo "删除 developer-center-web 镜像"
#    docker rmi $IMAGE_ID
#}
#echo "开始 developer-center-web 镜像打包"
#docker build -t "developer-center-web" .
#echo "运行 developer-center-web 镜像：4206"
#docker run --name "developer-center-web" -p 4206:3000 -d "developer-center-web"
