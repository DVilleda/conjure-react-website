import React, { useState, useEffect } from "react";
import ProjectList from "./project-gallery";

export default function GalaProject(props) {
  const [eventData, setEventData] = useState([]);

  async function openJsonData() {
    const data = await import("./project-mock");
    //fake get id
    var id = -1;
    if (props.year === 2023) {
      id = 0;
    } else if (props.year === 2022) {
      id = 1;
    }
    console.log(data.gamejam[id]);
    setEventData(data.gamejam[id]);
  }
  useEffect(() => {
    openJsonData();
  }, [props.year]);

  return (
    <>
      <h2 className="game-jam-text" style={{ textAlign: "center" }}>
        Projets
      </h2>
      <div className="game-jam-gallery">
        <ProjectList
          eventData={
            eventData !== undefined ? eventData.projects : null
          }
        />
      </div>
    </>
  );
}
