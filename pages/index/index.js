var canvas = CE.defines("canvas_id").
    ready(function() {
        console.log('canvas ready');
        canvas.Scene.call("MyScene");
    });
            
canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            img_id: "www.gametable.xyz/games/catandao/back.jpg"
        }
    },
    preload: function() {
        console.log('canvas preload');
    },
    ready: function(stage) {
        console.log('canvas sready');
        this.element = this.createElement();
        this.element.drawImage("img_id");
        stage.append(this.element);
    },
    render: function(stage) {
        console.log('canvas render');
        this.element.x += 1;
        stage.refresh();
    },
    exit: function(stage) {
        console.log('canvas exit');
    }
});