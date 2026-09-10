import { Briefcase } from "lucide-react"

// Add more roles here (newest first)
const experiences = [
    {
        id: 1,
        title: "President of King's Labs",
        company: "King's Business Club",
        location: "London",
        date: "Sept 2026 - Present",
        tags: [],
        points: [
            "Deliver 4+ production applications per year for external clients by leading a 7-person engineering team through scoping, development and deployment, writing and reviewing code alongside the team.",
            "Train 20+ students from fundamentals to a deployed web application in 8 weeks by running King's Labs Academy: weekly hands-on build sessions and code reviews.",
        ],
    },
    {
        id: 2,
        title: "Information & Digital Technology Intern",
        company: "Shell",
        location: "London",
        date: "June - Sept 2026",
        tags: [],
        points: [
            "Worked on AI automation initiatives for SAP testing, by validating AI agent executions across DEV/QA environments and diagnosing failed runs from execution logs and SAP behaviour, driving reliability improvements projected to unlock at least 10% efficiency savings across the programme in its initial phase.",
            "Validated the SAP BI 2025 upgrade pre-production, by building and documenting a full sandbox environment on Azure end to end (VM provisioning, service accounts, Kerberos/SETSPN SSO, SSL, SAP BI install) through 25+ working sessions with a technical lead.",
            "Built leadership-level dashboards in Power BI that consolidate Test Execution data from global SAP transformation initiatives into one place, giving leadership a single view of progress that previously lived across fragmented reports.",
        ],
    },
    {
        id: 3,
        title: "Undergraduate Research Fellow (KURF)",
        company: "Civic & Responsible AI Lab, King's College London",
        location: "London",
        date: "June - Sept 2026",
        tags: ["Unity", "C#", "HLSL", "Meta Quest 3"],
        points: [
            "Built 2 Unity VR environments for the lab's upcoming user studies on culturally sensitive VR experiences for minority ethnic communities; findings intended for academic publication.",
            "Built a full point-cloud rendering pipeline in Unity: from photogrammetry scans (CloudCompare, MeshLab, Blender) to a custom GPU-animated renderer with hand-written HLSL shaders and zero per-frame CPU cost, deployed on Meta Quest 3.",
        ],
    },
    {
        id: 4,
        title: "CTO & Co-founder",
        company: "Oppero",
        location: "oppero.ai",
        date: "Feb 2026 - Present",
        tags: [],
        points: [
            "Grew Oppero to 3 paying clients by leading engineering for a B2B platform that builds AI employees for companies in LATAM.",
            "Designed the architecture and the 3-month plan to ship it, then built the platform myself while coordinating the team: async FastAPI services, multi-tenant PostgreSQL with row-level security, Redis job queues and AI pipelines.",
        ],
    },
    {
        id: 5,
        title: "Frontend UI/UX Engineer",
        company: "King's Business Club",
        location: "London",
        date: "Nov 2025 - Aug 2026",
        tags: [],
        points: [
            "Connected students and alumni by building Alumni Space, a place where KBC alumni exclusively can connect and network.",
            "Maintained 8+ production websites for the club.",
        ],
    },
    {
        id: 6,
        title: "Software Engineer Intern",
        company: "Positivo S+",
        location: "Guadalajara, Mexico",
        date: "June - Aug 2025",
        tags: ["JavaScript", "Java", "HTML/CSS"],
        points: [
            "Delivered features for 3 client-facing products in an Agile Scrum team, with code reviews and technical documentation alongside senior engineers.",
        ],
    },
]

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary"> Experience</span>
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="group bg-card p-6 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                                <h3 className="text-2xl font-semibold flex items-center gap-2">
                                    <Briefcase className="text-primary" size={20} /> {experience.title}
                                </h3>
                                <span className="text-muted-foreground">
                                    {experience.date}
                                </span>
                            </div>

                            <p className="text-muted-foreground mb-4 text-left">
                                {experience.company} | {experience.location}
                            </p>

                            {experience.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {experience.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <ul className="space-y-2 text-left">
                                {experience.points.map((point, index) => (
                                    <li key={index} className="text-muted-foreground">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
