import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe'); 
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
 };

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);

player
  .setColor('#d8e0ff')
  .then(function (color) {
    console.log('The new color value: #D8E0FF');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
