import { useState } from "react";

export default function Education({ setUser, userData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setformData] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //addbutton
  function handleAddButton() {
    if (!formData.school || !formData.title || !formData.date) {
      alert("Please Enter All");
      return;
    }

    setUser((prev) => ({
      ...prev,
      education: [formData,...prev.education],
    }));

    setformData({
      school: "",
      title: "",
      date: "",
    });
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-3">Education</h1>
        {isOpen ? (
          <i onClick={handleOpen} className="fa-solid fa-xmark"></i>
        ) : (
          <i onClick={handleOpen} className="fa-solid fa-pen-to-square"></i>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 w-full pb-10">
          <label
            htmlFor="schoolName"
            className="text-sm flex items-center justify-between px-3"
          >
            School Name
            <input
              type="text"
              name="school"
              value={formData.school}
              id="schoolName"
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[60%]"
              placeholder="Enter School Name"
            />
          </label>
          <label
            htmlFor="schoolTitle"
            className="text-sm flex items-center justify-between px-3"
          >
            {" "}
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              id="schoolTitle"
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[60%]"
              placeholder="eg. 10th, 12th , Commerce"
            />
          </label>
          <label
            htmlFor="schoolDate"
            className="text-sm flex items-center justify-between px-3"
          >
            {" "}
            Enter Date
            <input
              type="date"
              id="schoolDate"
              value={formData.date}
              onChange={handleInputChange}
              name="date"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 px-5 w-[60%]"
              placeholder="Enter Date"
            />
          </label>
          <button
            onClick={handleAddButton}
            className="bg-blue-600 py-2 px-4 mx-20 rounded-full text-white font-bold"
          >
            Add
          </button>
          {userData.education.length > 0 && (
            <ul className="text-center mt-4">
              {userData.education.map((e) => (
                <li className="text-sm bg-white mx-10 rounded-full mb-2 flex justify-between px-3">
                  <span>- {e.date} {e.title} in {e.school}</span> <button>X</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
