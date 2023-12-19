/* eslint-disable react/no-unescaped-entities */
import { skills, experiences } from "../constants"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import CTA from "../components/CTA"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Salam, I' m <span className="blue-gradient_text font-semibold drop-shadow">
          Muhammed
        </span>
      </h1>
      <div className="mt-6 flex flex-col text-slate-500 gap-3">
        <p>Software engineer living in Gambia, focused on Information Communication Technology eduction through hands-on learning and building applications.</p>
      </div>
      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="flex flex-wrap mt-16 gap-16">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">
          Work Experience
        </h3>
        <div className="mt-6 flex flex-col gap-3 text-slate-500">
          <p>Well versed in technology. See below for you perusal</p>
        </div>
        <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((exp) => (
                <VerticalTimelineElement
                  key={exp.company_name}
                  date={exp.date}
                  icon={<div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>}
                  iconStyle={{
                    background:exp.iconBg
                  }}
                  contentStyle={{
                    borderBottom:'8px',
                    borderStyle:'solid',
                    borderBottomColor:exp.iconBg,
                    boxShadow:'none',
                  }}
                >
                  <div>
                    <h3 className="text-black text-lg font-poppins font-semibold">{exp.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                      {exp.company_name}
                      {/* {exp.date} */}
                    </p>
                  </div>
                  <ul className="my-5 list-disc space-y-2 ml-5">
                    {exp.points.map((point, i) => (
                      <li key={`exp-point-${i}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                        >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About