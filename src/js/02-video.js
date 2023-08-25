import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');

const storageKey = 'videoplayer-current-time';

// vimeoPlayer.on('timeupdate', function (event) {
//   const currentTime = event.seconds;
//   localStorage.setItem(storageKey, currentTime);
// });

const savedTime = localStorage.getItem(storageKey);
if (savedTime) {
  vimeoPlayer.setCurrentTime(savedTime);
}
const throttletimeUpdate = throttle(function (event) {
  const currentTime = event.seconds;
  localStorage.setItem(storageKey, currentTime);
}, 1000); // Оновлення часу не частіше, ніж раз на секунду

vimeoPlayer.on('timeupdate', throttletimeUpdate);