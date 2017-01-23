'use strict';

  function Robot() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  Robot.prototype.orient = function (direction){
      var arrayDirections = ["north", "south", "east", "west"]
      if (arrayDirections.includes(direction))
      {
          this.bearing = direction
      } else {
          throw new Error("Invalid Robot Bearing")
      }
  }

  Robot.prototype.turnRight = function (){
      if (this.bearing === "north"){
          this.bearing = "east"
      } else if (this.bearing === "east"){
          this.bearing = "south"
      } else if (this.bearing === "south"){
          this.bearing = "west"
      } else if (this.bearing === "west"){
          this.bearing = "north"
      }
  }


  Robot.prototype.turnLeft = function (){
      if (this.bearing === "north"){
          this.bearing = "west"
      } else if (this.bearing === "west"){
          this.bearing = "south"
      } else if (this.bearing === "south"){
          this.bearing = "east"
      } else if (this.bearing === "east"){
          this.bearing = "north"
      }
  }


  Robot.prototype.at = function (x,y){
      this.coordinates = [x,y]
  }


  Robot.prototype.advance = function (){
      if (this.bearing === "north"){
          this.coordinates[1] += 1
      } else if (this.bearing === "west"){
          this.coordinates[0] -= 1
      } else if (this.bearing === "south"){
          this.coordinates[1] -= 1
      } else if (this.bearing === "east"){
          this.coordinates[0] += 1
      }

  }


  Robot.prototype.instructions = function(commands) {
    var instructions = []
    commands.split('').forEach(function (command) {
      if (command === "R") {
        instructions.push("turnRight")
      } else if (command === "A") {
        instructions.push("advance")
      } else if (command === "L") {
        instructions.push("turnLeft")
      }
    });
    return instructions;
  }


  Robot.prototype.place = function (args) {
    this.coordinates = [args.x, args.y]
    this.bearing = args.direction
  }

  Robot.prototype.evaluate = function (commands) {
    this.instructions(commands).forEach((command) => {
      this[command]()
    })
  }
