import { useState } from "react";

export default function GeneralInfo({ setUser }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-3">General Info</h1>
        {isOpen ? (
          <i onClick={handleOpen} className="fa-solid fa-xmark"></i>
        ) : (
          <i onClick={handleOpen} className="fa-solid fa-pen-to-square"></i>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 w-full pb-10">
          <label
            htmlFor="name"
            className="text-sm flex items-center justify-between px-2"
          >
            Your Name -
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              id="name"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[65%]"
              placeholder="Enter Your Name"
            />
          </label>
          <label
            htmlFor="email"
            className="text-sm flex items-center justify-between px-2"
          >
            {" "}
            Email
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              id="email"
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3 w-[65%]"
              placeholder="Enter Email"
            />
          </label>
          <label
            htmlFor="tel"
            className="text-sm flex items-center justify-between px-2"
          >
            {" "}
            Phone Number
            <input
              type="tel"
              id="tel"
              name="phone"
              onChange={handleInputChange}
              className="bg-white py-2 ml-5 rounded-full text-sm pl-3"
              placeholder="Enter Mobile Number"
            />
          </label>
          <label
            htmlFor="objective"
            className="text-sm flex justify-between px-2 flex-col"
          >
            {" "}
            Objective:
            <textarea
              name="objective"
              id="objective"
              onChange={handleInputChange}
              className="w-full text-sm bg-white rounded-xl py-3 px-4 mt-2"
              placeholder="eg. Aspiring Full Stack Developer with a strong foundation in web technologies."
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
}
