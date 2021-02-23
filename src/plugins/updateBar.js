class BarUpdate{
    constructor(){
        this.preview = document.querySelector('#previewCont')
        this.previewVideo = document.querySelector('#previewVideo')
        this.barContainer = document.querySelector('#bar-container')
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handlePreview = this.handlePreview.bind(this)
    }
    run(mediaPlayer){
        this.media = mediaPlayer.media
        this.barTime = mediaPlayer.barTime

        this.media.addEventListener('timeupdate', this.handleUpdate)
        this.barContainer.addEventListener('mousemove', e => this.handlePreview(e))
        this.barContainer.addEventListener('click', e =>  this.handleClick(e))
    }
    handlePreview(ev){
        const time = (ev.offsetX / this.barContainer.offsetWidth) * this.media.duration
        this.previewVideo.currentTime = time
        this.preview.style.left = `calc(${ev.offsetX}px - 50px)`
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
        const time = (this.media.currentTime / this.media.duration) * 100
        this.barTime.style.width = `${time}%`
        // this.preview.style.left = `calc(${time}% - 50px)`
        // this.previewVideo.currentTime = this.media.currentTime
    }
    getPosition(){

        return time
    }
}

export default BarUpdate