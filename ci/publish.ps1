$OutputEncoding = New-Object -typename System.Text.UTF8Encoding
$CONTAINER_ID = (docker ps -a -q -f name="developer-center-web")
$IMAGE_ID=(docker images -q --filter reference="developer-center-web")
echo "ÈÝÆ÷ID: $CONTAINER_ID"
echo "¾µÏñID: $IMAGE_ID"
if ($CONTAINER_ID) {
    echo "Í£Ö¹ÈÝÆ÷ developer-center-web"
    docker stop $CONTAINER_ID
    echo "É¾³ý developer-center-web ÈÝÆ÷"
    docker rm $CONTAINER_ID
}
if ($IMAGE_ID) {
    echo "É¾³ý developer-center-web ¾µÏñ"
    docker rmi $IMAGE_ID
}
echo "¿ªÊ¼ developer-center-web ¾µÏñ´ò°ü"
docker build -t "developer-center-web" .
echo "ÔËÐÐ developer-center-web ¾µÏñ£º4206"
docker run --name "developer-center-web" -p 4206:3000 -d "developer-center-web"
