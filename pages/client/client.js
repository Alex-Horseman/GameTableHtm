var oUl;
var oConnect;
var oSend;
var oInput;
var ws=null;

window.onload=function(){
    oUl=document.getElementById('content');
    oConnect=document.getElementById('connect');
    oSend=document.getElementById('send');
    oInput=document.getElementById('message');
};


function connect_onclick(){
    console.log('connecting:');
    ws=new WebSocket('ws://localhost:5000');
     ws.onopen=function(){
         oUl.innerHTML+="<li>客户端已连接</li>";
     }
    ws.onmessage=function(evt){
        oUl.innerHTML+="<li>"+evt.data+"</li>";
    }
    ws.onclose=function(){
        oUl.innerHTML+="<li>客户端已断开连接</li>";
    };
    ws.onerror=function(evt){
        oUl.innerHTML+="<li>"+evt.data+"</li>";

    };
};
function send_onclick(){
    if(ws){
        console.log('sending:');
        ws.send(oInput.value);
    }
}

//----------------------------------------canvas------------------

var canvas = CE.defines("canvas_id").
    ready(function() {
        console.log('canvas ready');
        canvas.Scene.call("MyScene");
    });
            
canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            img_id: "sheep.jpg"//"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
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