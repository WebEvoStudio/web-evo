$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$SHA256 = curl --header "Accept:application/vnd.docker.distribution.manifest.v2+json" -I -XGET  http://116.62.214.205:5000/v2/developer-center-web/manifests/116.62.214.205:5000/developer-center-web:latest

echo $SHA256
#echo "��ʼ developer-center-web ������"
#docker build -t "developer-center-web" .
#echo "���������: developer-center-web"
#echo "�������Tag: 116.62.214.205:5000/developer-center-web:latest"
#docker tag developer-center-web:latest 116.62.214.205:5000/developer-center-web:latest
#echo "�������͵��ֿ�"
#docker push 116.62.214.205:5000/developer-center-web:latest
#echo "�������͵��ֿ����"
#echo "��ʼɾ�����ؾ���"
#docker image rm 116.62.214.205:5000/developer-center-web:latest
#echo "�����������"


#$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web")
#$IMAGE_ID=(docker images -q --filter reference="developer-center-web")
#echo "����ID: $CONTAINER_ID"
#echo "����ID: $IMAGE_ID"
#if ($CONTAINER_ID) {
#    echo "ֹͣ���� developer-center-web"
#    docker stop $CONTAINER_ID
#    echo "ɾ�� developer-center-web ����"
#    docker rm $CONTAINER_ID
#}
#if ($IMAGE_ID) {
#    echo "ɾ�� developer-center-web ����"
#    docker rmi $IMAGE_ID
#}
#echo "��ʼ developer-center-web ������"
#docker build -t "developer-center-web" .
#echo "���� developer-center-web ����4206"
#docker run --name "developer-center-web" -p 4206:3000 -d "developer-center-web"
