class MediaPlayer{
    constructor(config){
        this.media = config.media
        this.barTime = config.barTime
        this.plugins = config.plugins
        this._initPlugins()
    }
    _initPlugins(){
       this.plugins.forEach(plugin => {
           plugin.run(this)
       }) 
    }
    togglePlay(){
        if(this.media.paused){
            this.media.play()
        }else{
            this.media.pause()
        }
    }
    advance(){
        
    }
    delay(){
        this.media.currentTime -= 15
    }
}

export default MediaPlayer