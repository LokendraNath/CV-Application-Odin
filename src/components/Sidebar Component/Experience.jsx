import { useState } from "react";

export default function Experience({ setUser, userData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    compPosition: "",
    start: "",
    end: "",
  });

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  // Onchange
  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  //addbutton
  function handleAddButton() {

    setUser((prev) => ({
      ...prev,
      workExperience: [formData,...prev.workExperience ],
    }));

    setFormData({
      company: "",
      compPosition: "",
      start: "",
      end: "",
    });
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-3">Working Experience</h1>
        {isOpen ? (
          <i onClick={handleOpen} className="fa-solid fa-xmark"></i>
        ) : (
          <i onClick={handleOpen} className="fa-solid fa-pen-to-square"></i>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 w-full pb-10">
          <label
            htmlFor="company"
            className="text-sm flex items-center justify-between px-3"
          >
            Comp. Name
            <input
              name="company"
              type="text"
              value={formData.company}
              id="company"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Enter Company Name"
              onChange={handleFormData}
            />
          </label>
          <label
            htmlFor="compPosition"
            className="text-sm flex items-center justify-between px-3"
          >
            {" "}
            Position
            <input
              name="compPosition"
              type="text"
              value={formData.compPosition}
              id="compPosition"
              onChange={handleFormData}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Enter Position"
            />
          </label>
          <label
            htmlFor="start"
            className="text-sm flex items-center justify-between px-3"
          >
            {" "}
            Start Date
            <input
              name="start"
              type="number"
              min="1960"
              value={formData.start}
              max="2030"
              id="start"
              onChange={handleFormData}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 px-3"
            />
          </label>
          <label
            htmlFor="start"
            className="text-sm flex items-center justify-between px-3"
          >
            {" "}
            End Date
            <input
              name="end"
              onChange={handleFormData}
              type="number"
              min="1960"
              value={formData.end}
              max="2030"
              id="end"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 px-3"
            />
          </label>
          <button
            onClick={handleAddButton}
            className="bg-blue-600 py-2 px-4 mx-20 rounded-full text-white font-bold"
          >
            Add
          </button>
          {userData.workExperience.length > 0 && (
            <ul className="text-center mt-4">
              {userData.workExperience.map((e) => (
                <li className="text-sm bg-white mx-10 rounded-full">
                  - {e.start} to {e.end} as a {e.compPosition} in {e.company}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
