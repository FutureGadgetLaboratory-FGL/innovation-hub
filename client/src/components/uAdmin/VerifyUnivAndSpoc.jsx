import { useState } from "react";
function VerifyUnivAndSpoc() {
  const univReq = [
    {
      name: "Amity University",
      address: "Malhaur", //area
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      email: "aul@gmail.com",
      pincode:"0001",
    },
  ];

  const spocReq = [
    {
      name: "xyz",
      email: "xyz@gmail.com",
      gender: "M",
      university: "ABC",
      workEmail: "xyz@outlook.com",
      idCardFront: "https://picsum.photos/100/200",
      idCardBack: "https://picsum.photos/100/200",
      enrollment: "112233",
    },
  ];

  const [editing, setEditing] = useState(new Set());

  const handleExpand = (id) => {
    setEditing((editing) => {
      // Copy the set
      editing = new Set(editing);
      if (editing.has(id)) {
        // Already editing, stop editing
        editing.delete(id);
      } else {
        // Not editing, start
        editing.add(id);
      }
      return editing;
    });
  };

  return (
    <div className="w-full h-fit overflow-y-auto overflow-x-hidden flex justify-between p-2">
      {univReq.map((item, index) => {
        return (
          <div
            key={index}
            onClick={(e) => handleExpand(index)}
            className="w-1/2 p-2 border-2 min-h-full rounded-md shadow-md transition-transform ease-in-out duration-1000 cursor-pointer"
          >
            <div className="flex justify-between w-full">
              <h1 className="text-2xl font-semibold m-2 ">{item.name}</h1>
              <h1 className="m-2 text-xl font-semibold">{item.country}</h1>
            </div>

            {editing.has(index) && (
              <div className="w-full">
                <ul className=" p-2">
                  <li className="p-2 m-1">Area: {item.address}</li>
                  <li className="p-2 m-1">City: {item.city}</li>
                  <li className="p-2 m-1">State: {item.state}</li>
                  <li className="p-2 m-1">Pin code: {item.pincode}</li>
                  <li className="m-1 p-2">University contact email: {item.email}</li>
                </ul>

                  <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-lpurple hover:bg-accent-dpurple text-white rounded-md shadow-sm">
                    Search Online
                  </button>


              </div>
            )}
          </div>
        );
      })}

      {spocReq.map((item, index) => {
        return (
          <div className="w-1/2 min-h-full" key={index}>
            <div
              onClick={(e) => handleExpand(index)}
              className="flex py-2 px-4 xl:px-12 cursor-pointer min-h-full border-2
            mb-2 transform rounded-md shadow-md transition-transform ease-in-out duration-1000;
            "
            >
              <div className=" flex flex-col w-full mx-1">
                <p className="font-semibold text-2xl">{item.name}</p>
                <p>Work E-mail: {item.workEmail}</p>
                <p>University: {item.university}</p>
                <p>Enrollment number: {item.enrollment}</p>

                {editing.has(index) && (
                  <div>
                    <div className="flex justify-between">
                    <div> 
                        <p>Gender: {item.gender}</p>
                        <p>E-mail: {item.email}</p>
                    </div>
                    <div>
                      <p>ID images:</p>
                      <img
                        className="inline-block m-2"
                        src={item.idCardFront}
                        alt="unavailable"
                      />
                      <img
                        className="inline-block m-2"
                        src={item.idCardBack}
                        alt="unavailable"
                      />
                    </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-green hover:bg-lime-600 text-white rounded-md shadow-sm">
                        Verify
                      </button>
                      <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-red hover:bg-red-600 text-white rounded-md shadow-sm">
                        Reject
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VerifyUnivAndSpoc;