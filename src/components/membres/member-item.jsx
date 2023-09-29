import defaultImage from "../../assets/images/default_profil_pic.svg";
export default function MemberItem(props) {
  return (
    <>
      <div className="responsive">
        <div className="gallery">
          <a href={`/membre/${props.memberInfo.id}`}>
            <img
              src={
                props.memberInfo.imgprofil !== undefined
                  ? props.memberInfo.imgprofil
                  : defaultImage
              }
              alt="Membre Club Conjure ETS"
            />
          </a>
          <div className="desc">
            <strong>{props.memberInfo.name}</strong>
            <br />
            <span>{props.memberInfo.role}</span>
          </div>
        </div>
      </div>
    </>
  );
}
