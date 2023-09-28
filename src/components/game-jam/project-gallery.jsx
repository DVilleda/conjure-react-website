import ProjectItem from "./project";

export default function ProjectList(props) {
  return (
    <>
      {props.eventData 
        ? props.eventData.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        : null}
    </>
  );
}
