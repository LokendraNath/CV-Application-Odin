import { useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  const [personData, setPersonData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    workExperience: [
      {
        company: "demoCompnay",
        compPosition: "Software Dev",
        start: "2334",
        end: "343",
      },
    ],
    education: [
      {
        school: "demoScoool",
        title: "12th Pass out",
        date: "2043",
      },
    ],
  });
  console.log(personData.workExperience);
  console.log(personData.education);

  return (
    <div className="relative bg-white min-h-screen grid grid-rows-[auto_1fr] grid-cols-[400px_1fr]">
      <Header />
      <Sidebar setUserData={setPersonData} userData={personData} />
      <Content userData={personData} />
    </div>
  );
};

export default App;
