SHA256 = curl --header "Accept:application/vnd.docker.distribution.manifest.v2+json" -I -XGET  http://116.62.214.205:5000/v2/developer-center-web/manifests/latest
echo SHA256
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

