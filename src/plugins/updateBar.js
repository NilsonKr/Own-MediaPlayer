class BarUpdate{
    constructor(){
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    run(mediaPlayer){
        this.media = mediaPlayer.media
        this.barTime = mediaPlayer.barTime

        this.media.addEventListener('timeupdate', this.handleUpdate)
    }
    handleUpdate(){
        const time = this.media.currentTime / this.media.duration 
        this.barTime.style.width = time * 100 + '%' 

    }
}

export default BarUpdate