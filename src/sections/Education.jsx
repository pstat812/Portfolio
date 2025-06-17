import React from 'react'
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { GraduationCap, Award, School } from "lucide-react";
import { Particles } from "../components/Particles";

const Education = () => {
    const timelineData = [
        {
          id: 1,
          title: "Associate Degree",
          date: "2020 - 2022",
          degreeTitle: "Associate Degree in Information Technology",
          institution: "PolyU Hong Kong Community College",
          courses: [
            "Networking",
            "Statistics",
            "Programming",
            "Database",
            "Website/App Development"
          ],
          content: "Associate Degree in Information Technology, PolyU Hong Kong Community College",
          category: "",
          icon: GraduationCap,
          relatedIds: [],
          status: "completed",
          energy: 100,
        },
        {
          id: 2,
          title: "Certificate",
          date: "2021 July",
          degreeTitle: "Certificate in Unity design and development",
          institution: "Fevaworks IT Education Centre",
          courses: [
            "C# Programming",
            "Unity"
          ],
          content: "Certificate in Unity design and development, Fevaworks IT Education Centre",
          category: "",
          icon: Award,
          relatedIds: [],
          status: "completed",
          energy: 100,
        },
        {
          id: 3,
          title: "Bachelor's Degree",
          date: "2022 - 2025 June",
          degreeTitle: "Bachelor's degree in Information Engineering",
          institution: "The Chinese University of Hong Kong",
          courses: [
            "Data Structure",
            "Object-Oriented Programming (OOP)",
            "Functional Programming",
            "Website Development",
            "Software Engineering",
            "Linux Operation",
            "Blockchain",
            "Internet of Things (IoT)"
          ],
          content: "Bachelor's degree in Information Engineering, The Chinese University of Hong Kong",
          category: "",
          icon: School,
          relatedIds: [],
          status: "in-progress",
          energy: 99,
        },
      ];
  return (
    <section className='relative c-space section-spacing'>
      <Particles
        className="absolute inset-0 -z-1000"
        quantity={200}
        staticity={180}
        ease={20}
        size={0.4}
        color="#ffffff"
        refresh={true}
      />
      <h2 className="text-heading">Education</h2>
     
      <div className="w-full overflow-hidden">
        <RadialOrbitalTimeline timelineData={timelineData}/>
      </div>
    </section>
  )
}

export default Education