/**
 * ***************************
 * Canvas Demo using Konva
 * ***************************
 */

// const { default: Konva } = require("node_modules/konva");

// 1. creating stage for konva

var stage = new Konva.Stage({
    container: 'playground', // ID of the container
    width: 500,
    height: 500
});


// 2. creating layers

var layer1 = new Konva.Layer();
var layer2 = new Konva.Layer();
var layer3 = new Konva.Layer();
var layer4 = new Konva.Layer();
var layer5 = new Konva.Layer();


// 3. creating shape

// creating object variable for circle parameters
const circleParams = {
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 50,
    fill: 'skyblue',
    stroke: 'black',
    strokeWidth: 2
}

// creating circle shape using circle parameters
var circle = new Konva.Circle(circleParams);

// 4. adding circle object to the layer
layer1.add(circle);

// 5. adding layer to the stage
stage.add(layer1);

// 6. draw the layer
layer1.draw();



const newCustomShape = new Konva.Shape({
    sceneFunc: function(context) {
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(150, 50);
        context.lineTo(100, 150);
        context.closePath();

        context.fillStrokeShape(this);
    },
    fill: '#00d2ff',
    stroke: 'black',
    strokeWidth: 3
});

// Shadow property not working in konva shapes
const pentagonParams = {
    x: stage.width() - 150,
    y: 50,
    sides: 5,
    radius: 30,
    stroke: 'red',
    fill: 'coral',
    strokeWidth: 2,
    shadowOffsetX: 20,
    shadowOffsetY: 25,
    shadowBlur: 80,
    opacity: 0.9,
    id: 'penta',
    name: 'myPenta'
};
const pentagon = new Konva.RegularPolygon(pentagonParams);

layer2.add(newCustomShape);
layer2.add(pentagon);

stage.add(layer2);

layer2.draw();

const squareBorder = {
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 4,
    radius: 170,
    stroke: 'red',
    strokeWidth: 2,
    shadowOffsetX: 20,
    shadowOffsetY: 25,
    shadowBlur: 80,
    opacity: 0.9,
    id: 'border',
    name: 'border'
};
const Rectborder = new Konva.RegularPolygon(squareBorder);

layer3.add(Rectborder);
stage.add(layer3);
layer3.draw();

/**
 * ***************************
 * Konva Events
 * ***************************
 */

circle.on('mouseout touched', () => console.log('test'));

circle.draggable('true');
newCustomShape.draggable('true');
pentagon.draggable('true');
Rectborder.draggable('true');
circle.on('xChange', () => {
    console.log('position changed')
});

pentagon.on('click', () => {
    console.log("Hello From Pentagon");
});

var amplitude = 100;
var period = 2000;
const centerX = stage.width() / 2;
const animationOnLayer1 = new Konva.Animation((frame) => {
        circle.x(
            amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
    },
    layer1);

// animationOnLayer1.start();

// const myJson = stage.toJSON();

// console.log(myJson);