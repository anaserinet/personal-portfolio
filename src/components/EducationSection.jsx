import { GraduationCap } from "lucide-react"

// Add more education entries here (newest first)
const education = [
    {
        id: 1,
        degree: "BSc Computer Science",
        school: "King's College London",
        location: "London, UK",
        date: "Sept 2024 - July 2027",
        detail: "First Class Honours",
    },
    {
        id: 2,
        degree: "Foundation Year in Engineering",
        school: "Tecnologico de Monterrey",
        location: "Mexico",
        date: "Aug 2023 - June 2024",
        detail: "GPA 92/100",
    },
]

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative bg-secondary/3">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Education</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((entry) => (
                        <div
                            key={entry.id}
                            className="group bg-card p-6 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                                <h3 className="text-2xl font-semibold flex items-center gap-2">
                                    <GraduationCap className="text-primary" size={20} /> {entry.degree}
                                </h3>
                                <span className="text-muted-foreground">
                                    {entry.date}
                                </span>
                            </div>

                            <p className="text-muted-foreground mb-4 text-left">
                                {entry.school} | {entry.location}
                            </p>

                            <p className="text-muted-foreground text-left">
                                {entry.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
