import { useState } from 'react'
import './App.css'
import AdmissionForm from './AdmissionForm'

function App() {
  const [count, setCount] = useState(0)
  const [showForm, setShowForm] = useState(false)

  const handleButtonClick = () => {
    console.log(showForm);
    setShowForm(!showForm);
  }

  return (
    <>
      <div className="main-container container-fluid">
        <div className="form-control w-50 d-flex justify-content-between align-items-center flex-column">
          <h3 className='mt-2'>Registration Form</h3>
          <h5 className='mt-3'>Get Started</h5>
            <button className='btn btn-outline-primary p-3 rounded-circle' onClick={handleButtonClick}>
              <i style={{fontSize:"24px"}} className='fas'>&#xf061;</i>
            </button>
        </div>
        {showForm && <AdmissionForm />}
      </div>
    </>
  )
}

export default App