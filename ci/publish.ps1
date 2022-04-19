$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web-standalone")
$IMAGE_ID=(docker images -q --filter reference="developer-center-web-standalone")
echo "ÈÝÆ÷ID: $CONTAINER_ID"
echo "¾µÏñID: $IMAGE_ID"
if ($CONTAINER_ID) {
echo "Í£Ö¹ÈÝÆ÷ developer-center-web-standalone"
  docker stop $CONTAINER_ID
  echo "É¾³ý developer-center-web-standalone ÈÝÆ÷"
  docker rm $CONTAINER_ID
}
if ($IMAGE_ID) {
  echo "É¾³ý developer-center-web-standalone ¾µÏñ"
  docker rmi $IMAGE_ID
}
echo "¿ªÊ¼ developer-center-web-standalone ¾µÏñ´ò°ü"
docker build -t "developer-center-web-standalone" .
echo "ÔËÐÐ developer-center-web-standalone ¾µÏñ£º4207"
docker run --name "developer-center-web-standalone" -p 4207:3000 -d "developer-center-web-standalone"
