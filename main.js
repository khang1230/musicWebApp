function preload(){}

function setup(){
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    background("lightpink")
    image(video,0,0,350,350)
}