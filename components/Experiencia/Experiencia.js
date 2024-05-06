import React from "react";
import { Divider, Progress } from "@nextui-org/react";

const Experiencia = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center py-10">
          <div className="flex justify-center items-center relative">
            <div>
              <h2 className="text-[7rem] font-bold text-blue-200 relative z-10">
                <span
                  className="text-white"
                  style={{ WebkitTextStroke: "1px #A0AEC0" }}
                >
                  MY RESUME
                </span>
              </h2>
              <h2 className="text-5xl font-bold text-blue-200 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20">
                MY RESUME
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-5/6 justify-between mt-10">
            <div className="w-full md:w-[40%] bg-white mb-8 md:mb-0 md:px-4">
              <h2 className="text-black font-bold text-3xl mb-8">
                My experience
              </h2>
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">
                    Developer and Applications Support Specialist
                  </h4>
                  <p className="text-small text-default-400">
                    Ministry of Sports
                  </p>
                </div>
                <div className="flex mt-3 items-center space-x-4 text-small">
                  <div>
                    I led technical support for the GESDOC application at the
                    Ministry of Sports, working closely with suppliers to
                    implement new features, proactively resolve issues, and
                    ensure system efficiency. In addition to managing networks,
                    registering users, and providing comprehensive support to
                    the technological infrastructure, I have developed
                    applications with React (Next.js) and Flask. I have
                    experience in managing Microsoft Admin, Exchange, and
                    Sophos, thus expanding my contribution to the operational
                    success of the Ministry. Additionally, I have conducted
                    general training on the applications for the entire
                    ministry, strengthening understanding and effective use of
                    available technological tools.
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/6 py-5">
                <Divider className="my-4 text-blue-200 bg-blue-200" />
              </div>
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">
                    Multimedia Designer and Support Technician
                  </h4>
                  <p className="text-small text-default-400">
                    National College of Urban Curators
                  </p>
                </div>
                <div className="flex mt-3 items-center space-x-4 text-small">
                  <div>
                    I was a key member of the communications team at the
                    National College of Urban Curators. My focus ranged from
                    producing multimedia content, from informational videos to
                    graphic design of institutional pages and booklets. I
                    developed a comprehensive guide booklet and provided
                    internal technical support, merging my passion for design
                    with technical skills.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] bg-white mb-8 md:mb-0 md:px-4">
              <h2 className="text-black font-bold text-3xl mb-8">
                My education
              </h2>
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">
                    University of San Buenaventura
                  </h4>
                  <p className="text-small text-default-400">
                    Bogota, Colombia
                  </p>
                </div>

                <div className="flex mt-3 items-center space-x-4 text-small">
                  <div>
                    As a Systems Engineering student, currently in the 5th
                    semester, I have consolidated a solid understanding of
                    fundamental programming concepts, including data structures
                    and algorithms. Additionally, I have deepened my skills in
                    software development methodologies, such as Agile and Scrum,
                    and have accumulated practical experience in a variety of
                    programming languages, such as Java, Python, and C++.
                    Throughout my academic journey, I have also expanded my
                    knowledge in key areas such as database management and
                    systems analysis and design. Additionally, I have explored
                    the field of computer networks, understanding its
                    fundamental principles and practical applications. In my
                    quest to enrich my skill set, I have dedicated additional
                    time to exploring emerging technologies. I've dabbled in web
                    development using modern tools like React.js and have
                    mastered using libraries like Tailwind CSS to create
                    efficient and aesthetically appealing user interfaces.
                    Likewise, I have delved deeper into the JavaScript
                    programming language, using it in both frontend development
                    and backend projects. These experiences have strengthened my
                    ability to face complex challenges in the field of systems
                    engineering and have prepared me to contribute significantly
                    to interdisciplinary projects that require a comprehensive
                    and multifaceted approach.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[20%] bg-white md:px-4">
              <h2 className="text-black font-bold text-3xl mb-8">Skills</h2>
              <div className="max-w-md">
                <div className="space-y-4">
                  <div>
                    <p>HTML5 & CSS3</p>
                    <Progress color="#A7E4F2" value={90} />
                  </div>
                  <div>
                    <p>Javascript</p>
                    <Progress color="#FFD3B5" value={85} />
                  </div>
                  <div>
                    <p>React</p>
                    <Progress color="#D4A5A5" value={80} />
                  </div>
                  <div>
                    <p>Tailwind CSS</p>
                    <Progress color="#A5D4C5" value={85} />
                  </div>
                  <div>
                    <p>Python</p>
                    <Progress color="#C5A5D4" value={80} />
                  </div>
                  <div>
                    <p>SQL</p>
                    <Progress color="#E4F2A7" value={80} />
                  </div>
                  <div>
                    <p>Java</p>
                    <Progress color="#FFB5E5" value={50} />
                  </div>
                </div>
              </div>
              <div className="py-3">
                <Divider className="my-4 text-blue-200 bg-blue-200" />
              </div>
              <h2 className="text-black font-bold text-3xl mb-8">Languages</h2>
              <div className="max-w-md">
                <div className="space-y-4">
                  <div>
                    <p>Spanish</p>
                    <Progress color="#A7E4F2" value={100} />
                  </div>
                  <div>
                    <p>English</p>
                    <Progress color="#FFD3B5" value={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencia;
