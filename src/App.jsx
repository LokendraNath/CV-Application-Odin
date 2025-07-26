import { useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  const [personData, setPersonData] = useState({
    generalData: {
      name: "John Son",
      email: "johnSon@gmail.com",
      phone: "3437334434",
      objective: "Multi-disciplinary expert with proven success in medicine, engineering, and skilled trades. Adept at adapting technical knowledge across fields to provide comprehensive solutions with precision and efficiency.",
      skill: ["Doctor", "Plumber","Engeeneer","Pilot"],
    },
    workExperience: [
      {
        company: "Microsoft",
        compPosition: "Senior 'Soft'ware Engeeneer",
        start: "2001",
        end: "2005",
      },
    ],
    education: [
      {
        school: "Chapra University",
        title: "Bachler Of Multiple Profession",
        date: "2020",
      },
    ],
  });

  function deleteSkill(index) {
    setPersonData((prev) => ({
      ...prev,
      generalData: {
        ...prev.generalData,
        skill: prev.generalData.skill.filter((_, i) => i !== index),
      },
    }));
  }

  function handleDeleteEdu(index) {
    const updatedList = personData.education.filter((_, i) => i !== index);
    setPersonData((prev) => ({
      ...prev,
      education: updatedList,
    }));
  }
  function handleDeleteExp(index) {
    const updatedList = personData.workExperience.filter((_, i) => i !== index);
    setPersonData((prev) => ({
      ...prev,
      workExperience: updatedList,
    }));
  }

  return (
    <div className=" bg-white min-h-screen grid grid-rows-[auto_1fr] grid-cols-[450px_1fr]">
      <Header />
      <Sidebar
        setUserData={setPersonData}
        userData={personData}
        deleteEdu={handleDeleteEdu}
        deleteExe={handleDeleteExp}
        deleteSkill={deleteSkill}
      />
      <Content userData={personData} />
    </div>
  );
};

export default App;
