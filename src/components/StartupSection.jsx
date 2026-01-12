import { Briefcase, ExternalLink } from "lucide-react"

// Add more projects here (add their pictures to the public/projects file)
const project = [
    {
        id: 1,
        title: "Scauty",
        image: "/projects/Scauty.png",
        tags: ["React", "Typescript", "HTML/CSS", "SQL"],
        demoUrl: "https://scauty.com",
    },
]

export const StartupSection = () => {
    return (
        <section id="startup" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Leadership <span className="text-primary">Roles </span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                    {/* Top text */}
                    <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-bold">
                            CTO of Scauty
                        </h3>

                        <p className="text-muted-foreground">
                            Scauty is an AI-powered recruitment platform that automates the hiring process partially or completely, creating a safer, smoother hiring experience while reducing manual work and hiring risk.
                        </p>


                        <p>

                        </p>
                    </div>
                </div>

                {/* Right column: project card */}
                <div className="flex-1 grid md:grid-cols-2 gap-6 min-w-[300px]">
                    {project.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                        >
                            {/* Fixed image size */}
                            <div className="h-52 overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
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

                                <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                                    <Briefcase className="text-primary" /> {project.title}
                                </h3>


                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <section className="space-y-4">
                        <div className="text-2xl font-bold mb-4">
                            My responsibilities
                        </div>

                        <div className="text-muted-foreground">
                            As the CTO of Scauty, I am responsible for the website architecture and development,
                            leading technical decisions across the product, and overseeing the implementation
                            of AI-driven features. I work closely with the founding team to translate business
                            needs into scalable technical solutions, ensuring the platform is reliable,
                            user-friendly, and ready to grow with our clients.
                        </div>
                    </section>

                </div>


            </div>
        </section>
    )
}
