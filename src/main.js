

  import './main.css';

  import Fireworks from 'fireworks-canvas';
 
export default () => {
  const container = document.getElementById('container');
  const fireworks = new Fireworks(container);
  fireworks.start();

  const startButton = document.getElementById('#startButton');
  const stopButton = document.getElementById('#stopButton');
  startButton.addEventListener("click",function(){fireworks.start()});
  stopButton.addEventListener("click",function(){fireworks.stop()});
};