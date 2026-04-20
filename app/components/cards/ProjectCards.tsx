interface ProjectCardProps {
    projectName: string;
    description: string;
    techStack: string[];
    projectDemoUrl?: string;
}

const ProjectCards = ({ projectName, description, techStack, projectDemoUrl }: ProjectCardProps) => {
    return (
        <div className="border-black border-[0.125rem] rounded-lg px-6 py-6">
            <h2 className="text-xl font-bold">{projectName}</h2>
            <iframe
                src={projectDemoUrl}
                title={projectName + " demo"}
                className="w-full h-64 my-4 rounded-lg"
            ></iframe>
            <p className="text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex flex-row">
                <button className="bg-black text-white outline-black outline-solid rounded-full hover:bg-gray-800 p-[0.35rem] mt-4">
                    View Project
                </button>
                <button className="bg-gray-200 text-gray-800 outline-gray-400 outline-solid rounded-full hover:bg-gray-300 p-[0.35rem] mt-4 ml-2">
                    View Repo
                </button>
            </div>
        </div>
    );
};

export default ProjectCards;