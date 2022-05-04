$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web")
$IMAGE_ID=(docker images -q --filter reference="developer-center-web")
echo "����ID: $CONTAINER_ID"
echo "����ID: $IMAGE_ID"
if ($CONTAINER_ID) {
    echo "ֹͣ���� developer-center-web"
    docker stop $CONTAINER_ID
    echo "ɾ�� developer-center-web ����"
    docker rm $CONTAINER_ID
}
if ($IMAGE_ID) {
    echo "ɾ�� developer-center-web ����"
    docker rmi $IMAGE_ID
}
echo "��ʼ developer-center-web ������"
docker build -t "developer-center-web" .
echo "���� developer-center-web ����4206"
docker run --name "developer-center-web" -p 4206:3000 -d "developer-center-web"
