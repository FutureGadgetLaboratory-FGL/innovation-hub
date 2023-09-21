import React, { useState } from 'react';

const SignupSPOC = () => {
  const [prevpanel, setNextPanel] = useState(true);

  return (
    <>
      {prevpanel ? (
        <>
          <div className="mb-3 w-80">
            <label htmlFor="text" className="form-label">
              University
            </label>
            <input className="form-control" type="text" id="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Enrollment Number
            </label>
            <input className="form-control" type="text" id="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Work Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              ID Card
            </label>
            <input className="form-control" type="file" id="formFileMultiple" multiple />
          </div>
          <button className="btn btn-primary float-right" onClick={() => setNextPanel(false)}>
            Next
          </button>
        </>
      ) : (
        <>
        <h4 className='mb-2 text-center font-semibold underline text-lg'>Univeristy Details</h4>
        
           <div className="mb-3 w-80">
            <label htmlFor="email" className="form-label">
            Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Address
            </label>
            <input className="form-control" type="text" id="text" required />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              City
            </label>
            <input className="form-control" type="text" id="text" required />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              State
            </label>
            <input className="form-control" type="text" id="text" required />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Country
            </label>
            <input className="form-control" type="text" id="text" required />
          </div>
           

          
         <button className="btn btn-primary float-right" onClick={() => setNextPanel(true)}>
            Previous
          </button>
          </>
      )}
    </>
  );
};

export default SignupSPOC;
