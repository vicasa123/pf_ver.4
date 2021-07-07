
function changeImg() {
var avat = document.getElementById('avatar');

if(avat.src.indexOf('_wink') == -1) {
avat.src = avat.src.replace('.png', '_wink.png');

} else {
avat.src = avat.src.replace('_wink.png', '.png');

}
}

