type Rectangle = {
    kind:"rectangle"
    // Rectlength?:number;
    height:number;
    width:number;
}

type Circle = {
    kind:"circle"
    radius:number;
}

function isRectangle(shape: Rectangle | Circle): shape is Rectangle{
    return shape.kind === "rectangle";
}

function isCircle(shape: Rectangle | Circle): shape is Circle{
    return shape.kind === "circle";
}


type Shape = Rectangle | Circle;


function getArea(shape: Shape): number {
  if(isRectangle(shape)){
    return shape.width * shape.height;
  }else{
    return Math.PI * Math.pow(shape.radius, 2)
  }
}


console.log(getArea({ kind: 'circle', radius: 10 }));
console.log(getArea({ kind: 'rectangle', width: 4, height: 5 }));