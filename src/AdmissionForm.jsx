import React, { useState } from 'react'

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (validateForm()) {
        const formattedData = `
          Name: ${formData.name}
          Address: ${formData.address}
          Mobile: ${formData.mobile}
          Email: ${formData.email}
          Gender: ${formData.gender}
          Date of Birth: ${formData.dob}
          Course: ${formData.course}
        `
        alert(`Data stored successfully:\n${formattedData}`)
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''
          })
      }
  }

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    })
  }

  const validateForm = () => {
    const { name, address, mobile, email, gender, dob, course } = formData
    if (!name || !address || !mobile || !email || !gender || !dob || !course) {
      alert('All fields are required')
      return false
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Invalid name. Only letters and spaces are allowed')
        return false
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert('Invalid mobile number')
      return false
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email address')
      return false
    }
    const today = new Date()
    const minDob = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate())
    if (new Date(dob) > minDob) {
      alert('Invalid date of birth. You must be at least 15 years old')
      return false
    }
    return true
  }

  return (
    <div className="admission-form form-control w-50 mt-3 rounded">
      <h3>Higher Secondary Admission Form</h3>
      <form onSubmit={handleRegister} autoComplete='off'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course</label>
          <select className="form-control" id="course" name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AdmissionForm