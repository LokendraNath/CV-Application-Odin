import { useState } from "react";

export default function Education({ setUser, userData, deleteEdu }) {
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
      education: [formData, ...prev.education],
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
    <div>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold tracking-wider">Education</h1>
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
            className="text-sm flex items-center justify-between px-3 mb-5"
          >
            {" "}
            Enter Date
            <input
              type="number"
              id="schoolDate"
              value={formData.date}
              onChange={handleInputChange}
              name="date"
              min="1980"
              max="2020"
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
          <ul className="mt-5 flex flex-col items-center ">
            {userData.education.length > 0 &&
              userData.education.map((e, i) => (
                <li
                  key={i}
                  className="font-semibold flex items-center transition-all duration-200 hover:bg-gray-500 px-3 rounded-lg"
                >
                  <span>
                    {e.date} {e.title} in {e.school}{" "}
                  </span>
                  <i
                    className="fa-solid fa-circle-xmark text-red-600 ml-2 cursor-pointer"
                    onClick={() => deleteEdu(i)}
                  ></i>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
