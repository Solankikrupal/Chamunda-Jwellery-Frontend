import React from 'react'

type Props = {}

const AddEditPasswordChange = (props: Props) => {
  return (
    <form action="#" className="grid grid-cols-2 gap-4">
    <div className="w-full">
      <label className="form-label" htmlFor="Password ">Old Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="xxxxxxxxxxxxxxxx"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Password ">New Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="xxxxxxxxxxxxxxxx"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Password ">Enter Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="xxxxxxxxxxxxxxxx"
        className="form-control p-2"
      />
    </div>
  </form>
  )
}

export default AddEditPasswordChange;