import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AssignAdmin = () => {
  const adminDetails = [
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
    {
      name: "University Admin 1",
      workEmail: "admin@outlook.com",
      email: "admin@gmail.com",
      profilePhoto: "https://picsum.photos/50",
      designation: "Assistant Professor",
    },
  ];

  const [formData, setFormData] = useState({
    workEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "confirmPassword") {
      validatePasswordMatch(formData.password, value);
    }
  };

  const validatePasswordMatch = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to the server
    console.log("Form submitted:", formData);
  };

  const { workEmail, password, confirmPassword } = formData;

  return (
    <div className="flex max-h-screen overflow-hidden w-full gap-1">
      <div className="shrink grow flex flex-col h-full mr-1 p-2 border rounded-md shadow-md">
        <h1 className="text-xl font-semibold w-full text-center my-2">Create Admin Form</h1>
        <form
          className="w-full mx-4 flex flex-col items-center p-2 leading-10"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="w-3/4">
              Enter Work Email:
              <input
                type="email"
                className="border w-full p-2 text-xl"
                name="workEmail"
                value={workEmail}
                onChange={handleInputChange}
                required
              />
            </label>
            <button className="text-blue-500 mx-5 my-auto hover:text-blue-700">Verify Email</button>
          </div>
          <div className="w-full">
            <label className="w-3/4">
              Create Password:
              <input
                type="password"
                className="border w-full p-2 text-xl"
                name="password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="w-full">
            <label className="w-3/4">
              Confirm Password:
              <input
                type="password"
                className=" border w-full p-2 text-xl"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                required
              />
            </label>
            {!passwordMatch && (
              <div className="w-full text-center text-red-600">
                Passwords do not match
              </div>
            )}
          </div>
          <button
            className="text-white font-semibold border border-black rounded-3xl text-lg py-1 bg-green-500 hover:bg-green-600 hover:scale-95 px-5 my-2 mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {adminDetails.length === 0 ? (
        <div className="shrink-0 h-full flex flex-col justify-center items-center ">
          <h1 className="w-fit">Assigned admins appear here!</h1>
          <h2 className="w-fit">No admins exist yet</h2>
        </div>
      ) : (
        <div className=" min-h-screen flex flex-col overscroll-auto overflow-y-auto no-scrollbar overflow-x-hidden shrink-0">
          {adminDetails.map((item, index) => {
            return (
              <div
                key={index}
                className="border mb-2 items-center rounded-md shadow-md hover:bg-blue-100 hover:scale-95 cursor-pointer p-2 flex w-full"
              >
                <img
                  src={item.profilePhoto}
                  className="rounded-full w-[20%] h-fit border m-2"
                  alt="pfp"
                />
                <div className="h-full justify-center flex flex-col m-4">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <h2 className="font-semibold">{item.designation}</h2>
                  <p>{item.workEmail}</p>
                </div>
                <div className="w-[5%] mx-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"
                    className="hover:translate-x-2"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AssignAdmin;
