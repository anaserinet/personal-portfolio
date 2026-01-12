import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Add more projects here (add their pictures to the public/projects file)
const projects = [
    {
        id: 1,
        title: "French AI page",
        description:
            "An AI French conversational buddy designed to help users practice and learn French through interactive conversation with real-time spelling and grammar corrections and automated feedback.",
        image: "/projects/Project1.png",
        tags: ["React", "JavaScript", "HTML/CSS"],
        demoUrl: "https://frenchai-teacher.onrender.com", // ✅ fixed typo
        githubUrl: "https://github.com/anaserinet/frenchAI",
    },
    {
        id: 2,
        title: "HollyStick page",
        description:
            "Website with custom-made machine learning models to predict whether a user will subscribe to a deposit or not.",
        image: "/projects/Project2.png",
        tags: ["Python", "Flask", "HTML/CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "VerdeVivo app",
        description:
            "Eco-conscious app that empowers users to sustainably adopt greener habits through interactive tools that promoted user education and community-driven solutions.",
        image: "/projects/Project3.png",
        tags: ["Low-Code tools"],
        demoUrl: "https://drive.google.com/file/d/18lY8cnAqzVN3nw_mMgQEvgJclY9X6ju6/view",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "KiddyByte web",
        description:
            "AI-powered website for children in Tunisia affected by teacher shortages with 5+ personalized learning plans.",
        image: "/projects/Project4.png",
        tags: ["Python", "JavaScript", "HTML/CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/anaserinet/KiddyByte",
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl"> {/* ✅ fixed class name */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was
                    designed to solve a problem — either for personal use,
                    humanitarian purposes, or a hackathon.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/anaserinet">
                    Check My Github <ArrowRight size={16} />
                </a>

            </div>
        </section>
    );
};
