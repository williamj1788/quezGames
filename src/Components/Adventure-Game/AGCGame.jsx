import React, { useState, useEffect } from "react";
import AGRender from "./AGRender";
import gameNodes from "./Nodes.json";

function AGCGame() {
  const [currentNode, setCurrentNode] = useState(null);
  const [nodes, setNodes] = useState(null);
  const [log, setLog] = useState(null);
  const [isGamingRestarting, setIsGamingRestarting] = useState(true);

  useEffect(() => {
    if (!isGamingRestarting) {
      return;
    }
    const { nodes } = cloneJson(gameNodes); // have to clone in order to reset the game later
    const startNode = nodes.find(n => n.id === "start");
    setNodes(nodes);
    setCurrentNode(startNode);
    setLog(startNode.natText);
  }, [isGamingRestarting]);

  useEffect(() => {
    if (isGamingRestarting) {
      return setIsGamingRestarting(false);
    }
    if (currentNode.id === "start") {
      return setIsGamingRestarting(true);
    }
    setLog(log + "\n\n" + currentNode.natText);
  }, [currentNode]);

  function handleOnClick(option) {
    if (option.altText) {
      const index = currentNode.options.findIndex(o => o === option);
      currentNode.options.splice(index, 1);
      setLog(log + "\n\n" + option.altText);
    }

    if (option.modifier) {
      if (option.modifier === "drunk") {
        nodes.find(n => n.id === "11").natText =
          "You somehow manage to get an audience with the king, but your drunkenness offends him. He orders the guards to throw you in jail where you shall spend the rest of your days.";
        nodes.find(n => n.id === "12").options[1] = {
          text: "Buy the medium boat",
          altText:
            "You spent too much money at the tavern and cant afford the ship"
        };
      } else if (option.modifier === "mauled") {
        nodes.find(n => n.id === "2").natText =
          "By some miracle, you manage to fend off the bear, but you are wounded in the process.";
        nodes.find(n => n.id === "2").options.splice(0, 1);
        nodes.find(n => n.id === "22").natText =
          "You find a random wolf. Since you are already badly wounded, it makes quick work of you. Maybe going into the woods was a bad idea.";
      }
    }

    if (option.dest) {
      setCurrentNode(nodes.find(n => n.id === option.dest));
    }
  }

  function cloneJson(jsonObj) {
    return JSON.parse(JSON.stringify(jsonObj));
  }

  return <AGRender node={currentNode} text={log} onClick={handleOnClick} />;
}
export default AGCGame;
