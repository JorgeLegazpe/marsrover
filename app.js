// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0,0]
}

function turnLeft(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    
    case "W":
    rover.direction = "S";
    break;
    
    case "S":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "N"
    break;
    }
  console.log("Girando a la izquierda!");
  console.log("Sentido actual: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    
    case "W":
    rover.direction = "N";
    break;
    
    case "S":
    rover.direction = "W";
    break;

    case "E":
    rover.direction = "S"
    break;
    }
  console.log("Girando a la derecha!");
  console.log("Sentido actual: " + rover.direction);
}

function moveForward(rover){
  
  switch (rover.direction){
    case "N":
    if (rover.y === 0){
      console.log("Por ahí no!! Se acaba el mapa");
    } else{
      rover.y = rover.y -1;
      console.log("Avanzamos al norte");
    }
    break;

    case "W":
    if (rover.x === 0){
      console.log("Por ahí no!! Se acaba el mapa")
    } else{
    rover.x = rover.x -1;
    console.log("Avanzamos al Oeste");
    }
    break;

    case "S":
    if (rover.y === 9){
      console.log("Por ahí no!! Se acaba el mapa")
    } else{
    rover.y = rover.y +1;
    console.log("Avanzamos al Sur");
    }
    break;

    case "E":
    if (rover.x === 9){
      console.log("Por ahí no!! Se acaba el mapa")
    } else{
    rover.x = rover.x +1;
    console.log("Avanzamos al Este");
    }
    break;
  }
  var position = [rover.x, rover.y];

  console.log("Posición actual: " + position);
  rover.travelLog.push(position);
  console.log("Recorrido: " + rover.travelLog);
}
   
  function moveBackward(rover){
  
    switch (rover.direction){
      case "N":
      if (rover.y === 9){
        console.log("Por ahí no!! Se acaba el mapa");
      } else{
        rover.y = rover.y +1;
        console.log("Retrocedemos hacia el Sur");
      }
      break;
  
      case "W":
      if (rover.x === 9){
        console.log("Por ahí no!! Se acaba el mapa")
      } else{
      rover.x = rover.x +1;
      console.log("Retrocedemos hacia el Este");
      }
      break;
  
      case "S":
      if (rover.y === 0){
        console.log("Por ahí no!! Se acaba el mapa")
      } else{
      rover.y = rover.y -1;
      console.log("Retrocedemos hacia el Norte");
      }
      break;
  
      case "E":
      if (rover.x === 0){
        console.log("Por ahí no!! Se acaba el mapa")
      } else{
      rover.x = rover.x -1;
      console.log("Retrocedemos hacia el Oeste");
      }
      break;
    }
  var position = [rover.x, rover.y];

  console.log("Posición actual: " + position);
  rover.travelLog.push(position);
  console.log("Recorrido: " + rover.travelLog);
}


function commands(){
  var pasos = "frrlbfflbrrff";

  for (var i=0; i<pasos.length; i++){
    
    if (pasos[i] === "f"){
      moveForward(rover);

    } else if (pasos[i] === "b"){
      moveBackward(rover);

    } else if (pasos[i] === "l"){
      turnLeft(rover);
      
    } else if (pasos[i] === "r"){
      turnRight(rover);
    
    }
  }

}
