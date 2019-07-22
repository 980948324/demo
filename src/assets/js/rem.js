class Rem{
    constructor(){
        this.render()
    }
    render(){
        var screentype = 'orientationchange' in window ? 'orientationchange' : 'resize'
        var definenumber = 10
        function setView(){
            var gg = document.documentElement
            var width = gg.clientWidth
            if(width > 720){
                width = 720
            }else if(width < 320){
                width = 320
            }
            gg.style.fontSize = width /definenumber + 'px'
            return setView
        }
        window.addEventListener(screentype,setView())
    }
}

export default Rem