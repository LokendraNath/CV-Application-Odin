/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function GeneralInfo({ setUser, userData, deleteSkill }) {
  const [isOpen, setIsOpen] = useState(true);
  const [inputSkill, setInputSkill] = useState("");

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      generalData: {
        ...prev.generalData,
        [name]: value,
      },
    }));
  }

  function handleSkill(e) {
    if (e.key === "Enter") {
      const userValue = e.target.value.trim();

      if (userValue) {
        setUser((prev) => ({
          ...prev,
          generalData: {
            ...prev.generalData,
            skill: [...(prev.generalData.skill || ""), userValue],
          },
        }));
        setInputSkill("");
      }
    }
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold tracking-wider">General Info</h1>
        {isOpen ? (
          <i onClick={handleOpen} className="fa-solid fa-xmark text-2xl"></i>
        ) : (
          <i
            onClick={handleOpen}
            className="fa-solid fa-pen-to-square text-2xl"
          ></i>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 w-full pb-10">
          <label
            htmlFor="name"
            className="text-lg flex items-center justify-between px-2"
          >
            Your Name -
            <input
              type="text"
              name="name"
              value={userData.generalData.name}
              onChange={handleInputChange}
              id="name"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[65%]"
              placeholder="Enter Your Name"
            />
          </label>
          <label
            htmlFor="email"
            className="text-lg flex items-center justify-between px-2"
          >
            {" "}
            Email
            <input
              type="email"
              name="email"
              value={userData.generalData.email}
              onChange={handleInputChange}
              id="email"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[65%]"
              placeholder="Enter Email"
            />
          </label>
          <label
            htmlFor="tel"
            className="text-lg flex items-center justify-between px-2"
          >
            {" "}
            Phone Number
            <input
              type="tel"
              id="tel"
              value={userData.generalData.phone}
              name="phone"
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Enter Mobile Number"
            />
          </label>
          <label
            htmlFor="skill"
            className="text-lg flex items-center justify-between px-2"
          >
            {" "}
            Skills:
            <input
              type="text"
              id="skill"
              name="skill"
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyDown={handleSkill}
              value={inputSkill}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Eg. Javascript , React"
            />
          </label>
          <div className="w-full flex flex-wrap gap-2 mt-3">
            {userData.generalData.skill?.map((e, i) => (
                <p
                  key={i}
                  className="text-white bg-blue-500 rounded-xl font-mono text-sm px-2 mr-2"
                >
                  <span
                    onClick={() => deleteSkill(i)}
                    className="mr-2 cursor-pointer"
                  >
                    x
                  </span>
                  {e}
                </p>
              ))}
          </div>
          <label
            htmlFor="objective"
            className="text-lg flex justify-between px-2 flex-col"
          >
            {" "}
            Objective:
            <textarea
              name="objective"
              id="objective"
              value={userData.generalData.objective || ""}
              onChange={handleInputChange}
              className="w-full text-sm bg-white rounded-xl py-3 px-4 mt-2"
              placeholder="eg. Aspiring Full Stack Developer ...."
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
}
