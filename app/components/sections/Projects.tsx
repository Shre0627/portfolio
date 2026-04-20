import ProjectCards from "@/app/components/cards/ProjectCards";

const Projects = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold py-4">Projects</h1>
            <ProjectCards
                projectName="Project 1"
                description="This is a simple project description."
                techStack={["React", "TypeScript"]}
                projectDemoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            />
        </div>
    );
};

export default Projects;