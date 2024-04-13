import { Project } from "../component/project/Project";

export const runtime =
  process.env.NODE_ENV === "production" ? "edge" : undefined;

type ProjectPageProps = {
    params: {
        project: string;
    }
}

const ProjectPage = async (props: ProjectPageProps) => {
    const { project } = props.params;

    return (
        <div className="flex flex-col ga-8 p-5">
            <Project projectId={project} />
        </div>
    );
}

export default ProjectPage;