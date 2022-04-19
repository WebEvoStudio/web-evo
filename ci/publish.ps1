$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web-standalone")
$IMAGE_ID=(docker images -q --filter reference="developer-center-web-standalone")
echo "����ID: $CONTAINER_ID"
echo "����ID: $IMAGE_ID"
if ($CONTAINER_ID) {
echo "ֹͣ���� developer-center-web-standalone"
  docker stop $CONTAINER_ID
  echo "ɾ�� developer-center-web-standalone ����"
  docker rm $CONTAINER_ID
}
if ($IMAGE_ID) {
  echo "ɾ�� developer-center-web-standalone ����"
  docker rmi $IMAGE_ID
}
echo "��ʼ developer-center-web-standalone ������"
docker build -t "developer-center-web-standalone" .
echo "���� developer-center-web-standalone ����4207"
docker run --name "developer-center-web-standalone" -p 4207:3000 -d "developer-center-web-standalone"
