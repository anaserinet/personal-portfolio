import { Briefcase, ExternalLink } from "lucide-react"

// Add more roles here (add their pictures to the public/projects file)
const roles = [
    {
        id: 1,
        title: "CTO & Co-founder of Oppero",
        intro:
            "Oppero is a B2B platform that builds AI employees for companies in LATAM. I lead engineering, and we have grown the platform to 3 paying clients.",
        card: {
            title: "Oppero",
            image: "/projects/Oppero.png",
            tags: ["FastAPI", "PostgreSQL", "Redis", "Python"],
            demoUrl: "https://oppero.ai",
        },
        responsibilities:
            "As the CTO and Co-founder of Oppero, I designed the architecture and the 3-month plan to ship it, then built the platform myself while coordinating the team: async FastAPI services, multi-tenant PostgreSQL with row-level security, Redis job queues and AI pipelines. I work closely with the founding team to translate business needs into scalable technical solutions.",
    },
    {
        id: 2,
        title: "President of King's Labs",
        intro:
            "King's Labs is the engineering arm of King's Business Club in London, delivering production applications for external clients.",
        card: {
            title: "King's Labs",
            image: "/projects/Kings_Labs.png",
            tags: ["Web Development", "Team Leadership", "Mentoring"],
            demoUrl: "#",
        },
        responsibilities:
            "As President, I lead a 7-person engineering team that delivers 4+ production applications per year for external clients, taking each one through scoping, development and deployment while writing and reviewing code alongside the team. I also run King's Labs Academy, training 20+ students from fundamentals to a deployed web application in 8 weeks through weekly hands-on build sessions and code reviews.",
    },
]

export const StartupSection = () => {
    return (
        <section id="leadership" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Leadership <span className="text-primary">Roles </span>
                </h2>

                {roles.map((role) => (
                    <div key={role.id} className={role.id > 1 ? "mt-16" : ""}>
                        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                            {/* Top text */}
                            <div className="flex-1 space-y-6">
                                <h3 className="text-2xl font-bold">
                                    {role.title}
                                </h3>

                                <p className="text-muted-foreground">
                                    {role.intro}
                                </p>
                            </div>
                        </div>

                        {/* Right column: project card */}
                        <div className="flex-1 grid md:grid-cols-2 gap-6 min-w-[300px] mt-10">
                            <div
                                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                {/* Fixed image size */}
                                <div className="h-52 overflow-hidden">

                                    <img
                                        src={role.card.image}
                                        alt={role.card.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {role.card.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                                        <Briefcase className="text-primary" /> {role.card.title}
                                    </h3>


                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a
                                                href={role.card.demoUrl}
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
                            <section className="space-y-4">
                                <div className="text-2xl font-bold mb-4">
                                    My responsibilities
                                </div>

                                <div className="text-muted-foreground">
                                    {role.responsibilities}
                                </div>
                            </section>

                        </div>
                    </div>
                ))}


            </div>
        </section>
    )
}
