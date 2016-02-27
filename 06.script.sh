## script for download video of youtube
echo "==============================="
echo "a descargar video de youtube!"
NUMBER_FORMAT=43 # formato web
ID_URL_VIDEO=$1
youtube-dl -t -f 43 $ID_URL_VIDEO