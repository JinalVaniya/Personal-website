import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
    {
        title:"Clinical Retrieval Bot",
        description:"Built an AI-powered medical chatbot using Retrieval-Augmented Generation (RAG) to answer healthcare-related questions from medical PDF documents. ",
        image:"/projects/project4.jpg",
        tags:["Python", "Streamlit", "LangChain", "FAISS", "Hugging Face", "Sentence Transformers", "Groq Llama 3.1","RAG", "Vector Databases"],
        link:"https://clinical-retrieval-botgit.streamlit.app/",
        github:"https://github.com/JinalVaniya/Clinical-Retrieval-Bot/tree/main",
    },
    {
        title:"Knee Osteoarthritis Severity Grading",
        description:"Built a multimodal AI system that helps identify the severity of knee osteoarthritis using X-ray images and patient health information.",
        image:"/projects/project1.jpg",
        tags:["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "ResNet", "Swin Transformer", "Deep Learning", "Medical Imaging", "Data Analysis", "Artificial Intelligence"],
        link:"https://knee-oa-severity-grading.streamlit.app/",
        github:"https://github.com/JinalVaniya/Knee-osteoarthritis-severity-grading",
    },
    {
        title:"IDRIB - ICU Discharge Risk and Intervention bot",
        description:"Built an AI Bot that predicts patient readmission risk after ICU discharge and recommends personalized follow-up interventions.",
        image:"/projects/project2.jpg",
        tags:["Python", "Machine Learning", "Streamlit", "Healthcare Analytics"],
        link:"https://idrib-bot-demo.streamlit.app/",
        github:"https://github.com/JinalVaniya/IDRIB-icu-discharge-risk-bot",
    },
    {
        title:"Hospital Emergency Room Dashboard",
        description:"Designed an interactive Power BI dashboard to monitor emergency room performance, patient flow, wait times, admissions, referrals, and demographic trends. The dashboard provides healthcare professionals with actionable insights to improve operational efficiency and patient care.",
        image:"/projects/project3.jpg",
        tags:["PowerBI", "SQL", "Excel"],
        link:"https://github.com/JinalVaniya/PowerBI-Projects/tree/main/Hospital%20Dashboard",
        github:"https://github.com/JinalVaniya/PowerBI-Projects/tree/main/Hospital%20Dashboard",
    },
]

export const Projects = () => {
    return (
    <section id ="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from Data and AI projects to 
                    interactive dashboards that solve real-world problems. 
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(idx+1)*100}ms`}}>
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image}  
                            alt= {project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div 
                            className="absolute inset-0 bg-gradient-to-t 
                            from-card via-card/50 to-transparent opacity-60"/>

                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duraiton-300">
                                <a 
                                href={project.link} 
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} 
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <FaGithub className="w-5 h-5"/>
                                </a>
                            </div>  
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between"> 
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground
                                group-hover:text-primary group-hover:translate-x-1
                                group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                <span 
                                key={tagIdx}
                                className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))} 
                            </div>
                        </div>
                     </div> 
                ))}
            </div>

            {/* View all Projects */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>  
    </section>
    );
};