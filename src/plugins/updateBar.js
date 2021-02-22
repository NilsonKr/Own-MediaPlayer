class BarUpdate{
    constructor(){
        this.barContainer = document.querySelector('#bar-container')
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    run(mediaPlayer){
        this.media = mediaPlayer.media
        this.barTime = mediaPlayer.barTime

        this.media.addEventListener('timeupdate', this.handleUpdate)
        this.barContainer.addEventListener('click', e =>  this.handleClick(e))
    }

    handleClick(ev){
        console.log('ev.offsetX: ' + ev.offsetX)
        console.log('barcontainer.offsetWidth: ' + this.barContainer.offsetWidth)
        console.log('media.duration ' + this.media.duration)
        const time = (ev.offsetX / this.barContainer.offsetWidth)  * this.media.duration
        this.media.currentTime = time
    }
    handleUpdate(){
        // console.log(this.barTime.offsetWidth)
        const time = this.media.currentTime / this.media.duration 
        this.barTime.style.width = time * 100 + '%' 

    }
}

export default BarUpdate