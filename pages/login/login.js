


function login_onclick(){
    alert('login');
}

//----------------------------------------canvas------------------
function pixi_onload(){
    let app = new PIXI.Application({width: 256, height: 256});
    app.renderer.backgroundColor = 0xC1CF00;
    document.body.appendChild(app.view);
    //var img_path = "sheep.jpg"
    var img_path = 'http://localhost:80/resoures/token.png';
    PIXI.loader
        .add(img_path)
        .load(setup);
    
    function setup() {
        let rectangle = new PIXI.Graphics();
        //rectangle.lineStyle(0, 0xFF3300, 0);
        rectangle.beginFill(0x1E7035);
        rectangle.drawRect(0, 0, 236, 236);
        rectangle.endFill();
        rectangle.x = 10;
        rectangle.y = 10;
        app.stage.addChild(rectangle);
        let cat = new PIXI.Sprite(PIXI.loader.resources[img_path].texture);
        cat.anchor.x = 0.5;
        cat.anchor.y = 0.5;
        cat.width = 30;
        cat.height = 30;
        app.stage.addChild(cat);

        cat.x = 0;
        cat.y = 100;
        cat.vx = 5;
        cat.vy = 3;
        cat.ax = 0;
        cat.ay = 1;
        let f = 0.003;

        app.ticker.add(delta => gameLoop(delta));
        function gameLoop(delta){
            //cat.vx += cat.ax - f*cat.vx*cat.vx;
            if((cat.x<=25&&cat.vx<0)||(cat.x>=231&&cat.vx>0)){
                cat.vx = -cat.vx;
            }
            if((cat.y<=25&&cat.vy<0)||(cat.y>=231&&cat.vy>0)){
                cat.vy = -cat.vy;
            }else{
                cat.vy += cat.ay;// - f*cat.vy;
            }
            cat.x += cat.vx;
            cat.y += cat.vy;
            // if(cat.x<10){
            //     cat.x = 10;
            // }
            // if(cat.x>236){
            //     cat.x=236;
            // }
            // if(cat.y<10){
            //     cat.y = 10;
            // }
            // if(cat.y>236){
            //     cat.y=236;
            // }
        }
    }
    
}

// var canvas = CE.defines("canvas_logo").
//     ready(function() {
//         console.log('canvas ready');
//         canvas.Scene.call("MyScene");
//     });
            
// canvas.Scene.new({
//     name: "MyScene",
//     materials: {
//         images: {
//             img_id: "http://localhost:80/games/catandao/sheep.jpg"
//         }
//     },
//     preload: function() {
//         console.log('canvas preload');
//     },
//     ready: function(stage) {
//         console.log('canvas sready');
//         this.element = this.createElement();
//         this.element.draw
//         this.element.drawImage("img_id");
//         stage.append(this.element);
//     },
//     render: function(stage) {
//         console.log('canvas render');
//         this.element.x += 1;
//         stage.refresh();
//     },
//     exit: function(stage) {
//         console.log('canvas exit');
//     }
// });