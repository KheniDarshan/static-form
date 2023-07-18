import React, { useState } from 'react'
import Input from '../components/input'
import Title from '../components/title'

const GradForm = () => {
  const formData = {
    email: '',
    fname: '',
    emoryEmail: '',
    rotationInterested: '',
    anythingLike: '',
  }

  const [data, setData] = useState(formData)

  const setHendler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const [call, setCall] = useState()

  const onChangeValue = (event) => {
    setCall(event.target.value)
    setData({ ...data, call })
  }

  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const submit = async () => {
    if (validEmail.test(data?.email)) {
      if (data?.emoryEmail.length && data?.fname.length && data?.rotationInterested.length && call?.length) {
        const response = await fetch(
          'https://static-form-d48b0-default-rtdb.firebaseio.com/my-data.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        )
        if (response?.status === 200) {
          alert('your data successfully added!')
        } else {
          alert('something went wrong!')
        }
      } else {
        alert('Please fields all required question!')
      }
    } else {
      alert('Please enter valid email address!')
    }
  }

  const resetForm = () => {
    setData(formData)
    setCall(null)
  }

  return (
    <div className="root">
      <div className="contain">
        <Title subtitle={'Thakur Lab Graduate Researcher Interest Form'} />

        <Input
          type="email"
          name="email"
          placeholder="Your email"
          value={data?.email}
          onChange={setHendler}
          required={true}
          longInput={false}
          title="Email"
        />

        <Input
          type="text"
          name="fname"
          placeholder="Your answer"
          value={data?.fname}
          onChange={setHendler}
          required={true}
          longInput={false}
          title="Full Name"
        />

        <Input
          type="text"
          name="emoryEmail"
          placeholder="Your answer"
          value={data?.emoryEmail}
          onChange={setHendler}
          required={true}
          longInput={false}
          title="Emory Email Address"
        />

        <Input
          type="text"
          name="rotationInterested"
          placeholder="Long answer text"
          value={data?.rotationInterested}
          onChange={setHendler}
          required={true}
          longInput={true}
          title="What interested you in doing a rotation in the Thakur Lab ?"
        />

        <Input
          type="text"
          name="anythingLike"
          placeholder="Long answer text"
          value={data?.anythingLike}
          onChange={setHendler}
          required={false}
          longInput={true}
          title="Is there anything you would like to know about our research or lab in general before scheduling a meeting with Jeetu ?"
        />

        <div className="box subBox">
          <p className="input-title">
            Schedule a call with Dr. Thakur on:
            https://calendly.com/nacpatil/introductory-call
            <span style={{ color: 'red' }}>*</span>
          </p>
          <div onChange={onChangeValue}>
            <input
              style={{ marginBottom: '24px' }}
              type="radio"
              value="I scheduled call in above link."
              name="call"
              checked={call === 'I scheduled call in above link.'}
            />
            I scheduled call in above link.
            <br />
            <input
              type="radio"
              value="I would like to communicate through emails."
              name="call"
              checked={call === 'I would like to communicate through emails.'}
            />
            I would like to communicate through emails.
          </div>
        </div>

        <div className="button-group">
          <button className="button" onClick={submit}>
            Submit
          </button>
          <button className="button" onClick={resetForm}>
            Clear form
          </button>
        </div>
      </div>
    </div>
  )
}

export default GradForm
