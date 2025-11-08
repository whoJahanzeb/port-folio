import React from 'react'
const projects = [
    {
        id: 1,
        title: "MovieGo - Movie Landing Page",
        description: "A responsive movie landing page built with React and TailwindCSS.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Vercel"],
        demoUrl: "https://movie-go-tau.vercel.app/",
        githubUrl: "https://github.com/whoJahanzeb/movieApp",
    },
    {
        id: 2,
        title: "Tailwind Protocol Clone",
        description:
            "A clone of the Tailwind Protocol website using TypeScript, D3.js, and Next.js.",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "Vercel"],
        demoUrl: "https://tailwind-protocol-clone.vercel.app/",
        githubUrl: "https://github.com/whoJahanzeb/TailwindProtocol",
    },
    {
        id: 3,
        title: "Music Library App",
        description:
            "A responsive landing page for a music library platform, built using Next.js and React.js with a modern UI and smooth user experience.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "https://music-library-azure.vercel.app/",
        githubUrl: "https://github.com/whoJahanzeb/musicLibrary",
    },
];
const ProjectsSection = () => {
    return <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured <span className='text-primary'>Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                A selection of projects showcasing my skills and experience.
            </p>
        </div>
    </section>
}

export default ProjectsSection
