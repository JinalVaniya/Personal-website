import { BarChart2Icon, BarChart3, Brain, Code2, Search, Users } from "lucide-react";

const highlights = [
    {
        icon: BarChart3,
        title: "Data Analytics & Visualization",
        description: 
        "Transforming complex datasets into meaningful insights through analysis, interactive dashboards, and compelling visualizations.",
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description:
        "Building intelligent models that solve real-world problems using AI and data-driven techniques.",
    },
    {
        icon: Search,
        title: "Research & Problem Solving",
        description:
        "Analyzing complex challenges, experimenting with innovative approaches, and delivering practical solutions.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
];


export const About = () => {
    return (
    <section id ="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center"> 
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Driven by Data,
                        <span className="font-serif italic font-normal text-white"> Inspired by Innovation.</span>
                    </h2>
                    
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm an AI Analyst Intern at Hotwire Communications and a Master's student 
                            in Data Science at Hofstra University, with nearly 2 years of experience 
                            across AI, data analytics, and research. I'm passionate about using data, 
                            machine learning, and artificial intelligence to solve real-world problems, 
                            automate processes, and turn complex information into actionable insights.
                        </p>
                        <p>
                            My experience spans both industry and academic research. At Hotwire Communications, 
                            I work on AI-powered automation, LLM applications, and reporting solutions, including 
                            automating a reporting workflow that reduced processing time from over 24 hours to 
                            under 5 minutes. As a Research Assistant at Hofstra University, I explored 
                            large language models, natural language processing, and demographic bias in 
                            AI-generated content. Previously, at the Indian Space Research Organisation (ISRO), 
                            I worked with satellite telemetry data, focusing on data validation, accuracy, 
                            and process improvement.
                        </p>
                        <p>
                            I enjoy exploring emerging technologies, collaborating with diverse teams, 
                            and building solutions that make a measurable difference. Whether it's 
                            developing machine learning models, building intelligent AI applications, 
                            creating interactive dashboards, or automating workflows, my goal is to 
                            bridge the gap between data, AI, and real-world impact.
                        </p>
                    </div>
                    
                    
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to build AI and data-driven solutions that transform complex data 
                            into meaningful insights and help organizations make smarter decisions."
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx+1)*100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"> 
                            <item.icon className="w-6 h-6 text-primary"/> </div>
                            <h3 className="text-lg font-semibold mb-2"> {item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};
