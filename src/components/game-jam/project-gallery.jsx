export default function ProjectList(props) {
  return (
    <>
      <div className={`gallery-card-gallery-card ${props.rootClassName} `}>
        <a href={`${props.id}`} target="_blank" rel="noopener noreferrer">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="gallery-card-image"
          />
        </a>
        <h2 className="gallery-card-text">{props.title}</h2>
        <span className="gallery-card-text1">{props.subtitle}</span>
      </div>
    </>
  );
}
