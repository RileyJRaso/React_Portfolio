
import Profile from "../Media/Nice_Shirt_Falls_HeadShot.jpg";

function About() {
  return (
    <div id="about">
      <div className="grid grid-cols-4 mx-10 gap-4 text-white my-8">
        <img className="justify-self-center my-auto p-2" src={Profile} alt="" style={{width: 280, height: 280, borderRadius: 6000}} ></img>
        <div className="col-span-3 px-10 py-6 space-y-6" >
          <div className="col-span-3 space-y-6">
            <h1 className=" text-center text-3xl font-medium title-font mb-4 text-white"> Hello there I am Riley Raso! Welcome to my portfolio website</h1>
            <p className="text-gray-400 font-light leading-loose"> this is my portfolio website, listed below are my recent/noteworthy projects and skills feel free to take a look, I’m interested in pursuing Data Science and Data related Co-ops and developing my Analytics skills.</p>
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
