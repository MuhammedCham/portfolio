import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">My <span className="blue-gradient_text">Projects</span> 
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> I have been doing projects through out the years, these are the ones I will be putting up here. There are some on my Github repo, feel free to have a peek and contribute if you would like to. Your contributions will be highly valued.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 my-20">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex justify-center items-center">
                <img 
                  src={project.iconUrl} 
                  alt="Project Icon" 
                  className="w-1/2 h-1/2 object-contain"
                  />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-semibold font-poppins">{project.name}</h4>
              <p className="mt-2 text-slate-500 font-normal">{project.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Link to={projects.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500"
                >
                Live link
              </Link>
              <img 
              src={arrow} 
              alt="arrow" 
              className="h-4 w-4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="boeder-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects