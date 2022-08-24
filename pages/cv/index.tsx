import type { NextPage } from "next";

const CVpage: NextPage = () => {
    return (
        <div className="container mx-auto px-3 lg:px-72 text-center">
            <h1 className="text-6xl font-bold text-center">CV</h1>
            <div className="container py-4 lg:text-2xl">
                <p>I am a hard-working and studious student of software development, passionate about the development of web applications and games. I am leaving college now and looking for development opportunities. I am a great self-starter and work diligently to stay as knowledgeable as possible about techniques and technologies.</p>
            </div>
            {/* Education */}
            <div className="container">
                <h3 className="text-4xl font-semibold lg:text-5xl pb-3">Education</h3>
                <h6 className="text-2xl lg:text-4xl py-1">DV8 Sussex (March 2020 - June 2022)</h6>
                <p className="lg:text-2xl">RSL Creative Digital Media (Games Design) Level 3 Extended Diploma</p>
                <p className="lg:text-2xl">RSL Creative Digital Media (Games Design) Level 2 Extended Certificate</p>
                <h6 className="text-2xl lg:text-4xl py-1">St. Philip Howard Catholic School (January 2015 - June 2018)</h6>
                <p className="lg:text-2xl">6x GCSEs including English, Maths, and Science.</p>
            </div>
            {/* Skills */}
            <div className="container">
                <h3 className="text-4xl font-semibold lg:text-5xl pb-3">Skills</h3>
                <ul>
                    <li className="lg:text-2xl"><span className="font-bold">Thorough attention to detail:</span> I have a keen eye and am able to spot mistakes/patterns and the ability to rectify them, this has been enhanced through my years at school &amp; college.</li>
                    <li className="lg:text-2xl"><span className="font-bold">Ability to work well with others:</span> I have learnt to work well with others and communicate clearly to achieve goals.</li>
                    <li className="lg:text-2xl"><span className="font-bold">Work well under pressure:</span> I have learnt to remain calm and prioritise my workload through my studies and exams.</li>
                    <li className="lg:text-2xl"><span className="font-bold">Excellent verbal communication skills:</span> These skills have been developed throughout my schooling, liaising with different staff members and students.</li>
                    <li className="lg:text-2xl"><span className="font-bold">Active listening skills:</span> I am a very good listener, understanding and can follow instructions well.</li>
                    <li className="lg:text-2xl"><span className="font-bold">Computer Literate:</span> I am competent with all the main programs.</li>
                </ul>
            </div>
        </div>
    )
}
export default CVpage;
