import React from 'react'

const SignupStu = () => {
  return (
    <>
      <div className="mb-3">
        <label for="text" className="form-label">University</label>
        <input className="form-control" type="text" id="text" />
      </div>
      <div className="mb-3">
        <label for="text" className="form-label">Enrollment Number</label>
        <input className="form-control" type="text" id="text" />
      </div>
      <div className="mb-3">
        <label for="text" className="form-label">Choose Course</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Course</option>
          <option value="1">Computer Science</option>
          <option value="2">Electrical Engineering</option>
          <option value="3">Mechanical Engineering</option>
          <option value="4">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label for="email" className="form-label">Work Email</label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label for="duration" className="form-label">Duration</label>
        <input className="mb-3 form-control form-control-sm" placeholder="Start Year" id="duration" type="number" />
        <input className="form-control form-control-sm" placeholder="End Year" id="duration" type="number" />
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">ID Card</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple />
      </div>

    </>


  )
}

export default SignupStu