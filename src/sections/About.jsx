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
        icon:Search,
        title:"Research & Problem Solving",
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
                            I'm an AI Analyst (Intern) at Hotwire Communications and a Master's student 
                            in Data Science at Hofstra University. I enjoy using data, machine learning, 
                            and AI to solve real-world problems and create meaningful insights. I'm passionate about 
                            learning new technologies, building intelligent solutions, 
                            and turning complex data into informed decisions.
                        </p>
                        <p>
                            I've had the opportunity to work in both industry and research. 
                            At Hotwire Communications, I contribute to AI automation and reporting initiatives, 
                            while at Hofstra University I researched large language models, NLP, and AI bias. 
                            My experience with the Indian Space Research Organisation (ISRO) 
                            also strengthened my skills in working with large datasets and ensuring data accuracy.
                        </p>
                        <p>
                            I enjoy collaborating with teams, learning new technologies, and building solutions 
                            that solve real-world problems. Whether it's developing machine learning models, 
                            creating dashboards, or automating workflows, my goal is to use data and AI 
                            to help organizations make better decisions.
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