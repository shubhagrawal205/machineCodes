import "./styles.css";
import { useEffect, useState } from "react";

const trafficLights = [
  {
    color: "red",
    bgColorClass: "background-red",
    next: "green",
    wait: 5000
  },
  {
    color: "yellow",
    bgColorClass: "background-yellow",
    next: "red",
    wait: 1000
  },
  {
    color: "green",
    bgColorClass: "background-green",
    next: "yellow",
    wait: 5000
  }
];

export default function TrafficLights() {
    const [activeLight, setActiveLight] = useState("green");
    const [timeLeft, setTimeLeft] = useState(trafficLights.find((light) => light.color === "green").wait / 1000); // Start with green light time in seconds
    const light = trafficLights.find((light) => light.color === activeLight);
  
    useEffect(() => {
      setTimeLeft(light.wait / 1000);
  
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setActiveLight(light.next);
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, [light]);
  
    return (
      <div className="App">
        <h1>Traffic Lights</h1>
        <div className="trafficLight-container">
          {trafficLights.map((light) => (
            <div
              key={light.color}
              className={`trafficLight ${
                activeLight === light.color
                  ? light.bgColorClass
                  : `background-grey`
              }`}
            >
              {activeLight === light.color && (light.color === "red" || light.color === "green") && (
                <div className="timer">
                  {timeLeft} s
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }