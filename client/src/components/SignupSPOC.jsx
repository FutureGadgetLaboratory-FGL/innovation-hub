import React from 'react'

const SignupSPOC = () => {
  return (
  <>
   <div className="mb-3">
  <label for="text" className="form-label">University</label>
  <input className="form-control" type="text" id="text"/>
</div>
<div className="mb-3">
  <label for="text" className="form-label">Enrollment Number</label>
  <input className="form-control" type="text" id="text"/>
</div>
<div className="mb-3">
  <label for="email" className="form-label">Work Email</label>
  <input className="form-control" type="email" id="email" required/>
</div>

<div class="mb-3">
  <label for="formFileMultiple" class="form-label">ID Card</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>

</>
       
    
  )
}

export default SignupSPOC