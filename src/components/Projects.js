
import React from "react";
import { projects } from "../data";
import {ReactComponent as ReactLogo} from '../SVG files/react.svg';

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <ReactLogo className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are the recent and noteworthy projects, feel free to
            check out any of these links to see either the live version
            or the codebase, i have recently been working with pandas and matplotlib
            in order to make graphs and try data analysis
          </p>
        </div>
        <div className="grid grid-cols-3 h-100 place-self-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-auto h-auto min-h-full p-4">
              <div className="flex relative min-h-full z-0">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
