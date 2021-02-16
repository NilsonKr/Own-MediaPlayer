import MediaPlayer from './plugins/mediaPlayer.js'
import BarUpdate from './plugins/updateBar.js'


const btn = document.querySelector('#toggleBtn')
const bar = document.querySelector('#timeBar')
const video = document.querySelector('#video')
const delayBtn = document.querySelector('#delay')
const advance = document.querySelector('#advance')

const mediaPlayer = new MediaPlayer({ media: video , barTime: bar, plugins: [new BarUpdate()]})

btn.onclick = function(){
    btn.classList.toggle('play')
    btn.classList.toggle('pause')
    mediaPlayer.togglePlay()
}

function skip (){
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

delayBtn.addEventListener('click', skip)
advance.addEventListener('click', skip)
