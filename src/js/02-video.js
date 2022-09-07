import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player("vimeo-player");

const secondsListening = (data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data.seconds);
}  

player.on('timeupdate', throttle(secondsListening, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));





