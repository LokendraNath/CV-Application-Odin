import { useState } from "react";

export default function Experience({ setUser, userData, deleteExe }) {
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
  function handleInputChange(e) {
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
      workExperience: [formData, ...(prev.workExperience || [])],
    }));

    setFormData({
      company: "",
      compPosition: "",
      start: "",
      end: "",
    });
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold tracking-wider">
          Working Experience
        </h1>
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
              placeholder="Eg. Microsoft"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Eg. Full Stack Developer"
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
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 px-3"
            />
          </label>
          <label
            htmlFor="start"
            className="text-sm flex items-center justify-between px-3 mb-5"
          >
            {" "}
            End Date
            <input
              name="end"
              onChange={handleInputChange}
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
          <ul className="mt-5 flex flex-col items-center ">
            {userData.workExperience &&
              userData.workExperience.map((e, i) => (
                <li
                  key={i}
                  className="font-semibold flex items-center transition-all duration-200 hover:bg-gray-500 px-3 rounded-lg"
                >
                  <span className="text-sm">
                    {e.start} to {e.end} As a {e.compPosition} in {e.company}
                  </span>
                  <i
                    className="fa-solid fa-circle-xmark text-red-600 ml-2 cursor-pointer"
                    onClick={() => deleteExe(i)}
                  ></i>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
