export default function ProjectItem(props) {
  return (
    <>
      <div className={`gallery-card-gallery-card ${props.rootClassName} `}>
        <a href={`/gala/project/${props.project.id}`}>
          <img
            alt={props.project.image_alt}
            src={props.project.image_src}
            className="gallery-card-image"
          />
        </a>
        <a href={`${props.project.id}`}>
          <h2 className="gallery-card-text">{props.project.title}</h2>
        </a>
        <span className="gallery-card-text1">{props.project.subtitle}</span>
      </div>
    </>
  );
}
