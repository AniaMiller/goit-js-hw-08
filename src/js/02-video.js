import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time'

const updateTime = function(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
};

const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0;

player.on('timeupdate', throttle(updateTime, 1000));
player.setCurrentTime(savedTime)