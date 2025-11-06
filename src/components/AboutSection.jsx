import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return <section id='about' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
        About <span className='text-primary'>Me</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
          <p className='text-muted-foreground'>
            Seasoned Full-stack Developer with three years of experience, adept at delivering comprehensive digital solutions. Expertise includes architecting efficient backend systems and engineering seamless, high-performance web and mobile user experiences.
          </p>
          <p className='text-muted-foreground'>
            Committed to continuous learning, I actively stay updated with the latest industry trends to ensure innovative and future-proof solutions are delivered on every project.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
            <a href="#contact" className='cosmic-button'>
              Get In Touch
            </a>
            <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
              Download CV
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'>Web Development</h4>
                <p className='text-muted-foreground'>
                  Crafting responsive and dynamic websites using modern technologies.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <User className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                <p className='text-muted-foreground'>
                  Designing intuitive user interfaces with a focus on user experience and accessibility.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'>Project Management</h4>
                <p className='text-muted-foreground'>
                  Experienced in leading projects from conception to deployment, ensuring timely delivery and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default AboutSection
