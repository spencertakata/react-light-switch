import React, { useEffect, useState } from 'react';
import Button from './Button';
import Text from './Text';
import './App.css';


function App() {
  //Color palette
  const colors = {
    purple: "#b894d6",
    white: "#fff",
    black: "#000",
    darkGray: "#373737",
    lightYellow: "#fef7c9",
    green: "#7df288"
  }

  //Declare state
  const [bgColor, setBgColor] = useState(colors.darkGray);
  const [main, setMain] = useState(false);
  const [purple, setPurple] = useState(false);
  const [green, setGreen] = useState(false);

  //Assign styles
  let style = {
    backgroundColor: bgColor
  }

  //Toggle classNames
  let mainClass = main ? "on" : "off";
  let purpleClass = purple ? "purple-on": "purple-off";
  let greenClass = green ? "green-on" : "green-off";

  /* === Switch Flippers === */
  //Main Switch
  const flipMain = () => {
    setMain(main => !main);
  }
  // Purple Switch
  const flipPurple = () => {
    setPurple(purple => !purple);
    setGreen(green => false);
  }
  // Green Switch
  const flipGreen = () => {
    setGreen(green => !green);
    setPurple(purple => false);
  }

  /* === Effects === */
  useEffect(() => {
    //Set correct BG color
    if(!main) {
      setBgColor(bgColor => colors.darkGray)
    } else if (purple) {
      setBgColor(bgColor => colors.purple)
    } 
    else if (green) {
      setBgColor(bgColor => colors.green)
    } 
    else {
      setBgColor(bgColor => colors.lightYellow)
    }
  });

  // Disable color buttons when light switch is off
  useEffect(() => {
    if(!main){
      setPurple(purple => false);
      setGreen(green => false);
    }
  })

  return (
    <div className={"App wrapper " + mainClass} style={style}>
      <Text 
        status={main} 
        className={(main ? "on ": "off ") + "headline"} 
        text={"Light Switch is " + (main ? "on" : "off")}
      />
      <Button 
        status={main} 
        flipSwitch={flipMain} 
        statusClass={mainClass + " btn-main"} 
        text={"Turn " + (main ? "off" : "on")}
      />
      <div className="color-selector">
        <Text 
          text={main ? "Choose a color" : "Turn light switch on to choose a color"} 
          className={(main ? "on ": "off ") + "subhead"}
        />
        <Button 
          status={purple} 
          flipSwitch={flipPurple} 
          statusClass={purpleClass + " purple"} 
          text={"Purple"}
        />
        <Button 
          status={green} 
          flipSwitch={flipGreen} 
          statusClass={greenClass + " green"} 
          text={"Green"}
        />
      </div>
    </div>
  );
}

export default App;
