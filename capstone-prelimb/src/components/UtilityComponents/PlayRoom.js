import React from "react";
import Matter from "matter-js";


class PlayRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      
    });


    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 1000,
        height: 600,
        wireframes: false
      }
    });

    World.add(engine.world, [

      Bodies.rectangle(200, 0, 10000, 50, { isStatic: true }),
      Bodies.rectangle(200, 600, 10000, 50, { isStatic: true }),
      
    ]);


    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(550, 50, 30, { restitution: 0.5 }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return <div ref="scene" />;
  }
}
export default PlayRoom;