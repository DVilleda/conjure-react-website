import React, { useState, useEffect } from "react";
import "../../assets/css/member-gallery.css";
import MemberItem from "./member-item";

export default function MemberGallery(props) {
  const [members, setMembers] = useState();

  async function openJsonData() {
    const data = await import("./member-mock.json");
    setMembers(data.members);
    console.log(data.members);
  }

  useEffect(() => {
    openJsonData();
  }, []);

  return (
    <>
      <h2 className="home-title" style={{ marginTop: "3%" }}>
        Membres
      </h2>
      <div className="member-hero">
        {members !== undefined
          ? members.map((member) => (
              <MemberItem key={member.id} memberInfo={member} />
            ))
          : null}
        <div className="clearfix"></div>
      </div>
    </>
  );
}
