import React from 'react'

type Props = {}

const AddEditUser = (props: Props) => {
  return (
    <form action="#" className="grid grid-cols-2 gap-4">
    <div className="w-full">
      <label className="form-label" htmlFor="fname ">
        First Name
      </label>
      <input
        type="text"
        name="fname"
        id="fname"
        placeholder="Shawn C"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="fname">
        Last Name
      </label>
      <input
        type="text"
        name="fname"
        id="fname"
        placeholder="Cephas"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="fname">
        Date Of Birth
      </label>
      <input
        type="date"
        name="Lname"
        id="lname"
        placeholder="July23, 1980 "
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Gender">
        Gender
      </label>
      <select name="Gender" id="" className="form-select p-2">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Email">
        Email
      </label>
      <input
        type="text"
        name="Email"
        id="email"
        placeholder="ShawnCCephas@armyspy.com "
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Email">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="720-352-3779"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="text">
        Company Name
      </label>
      <input
        type="text"
        name="text"
        placeholder="lequiefcho"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="text">
        Job Title
      </label>
      <input
        type="text"
        name="text"
        placeholder="lequiefcho"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Address">
        Address
      </label>
      <input
        type="text"
        name="text"
        placeholder="Mozila/5.0(Macintosh; intel Mac OS X 10_14_4)"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Address">
        City
      </label>
      <input
        type="text"
        name="text"
        placeholder="City"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Address">
        State
      </label>
      <input
        type="text"
        name="text"
        placeholder="State"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Address">
        Country
      </label>
      <input
        type="text"
        name="text"
        placeholder="Country"
        className="form-control p-2"
      />
    </div>
    <div className="w-full">
      <label className="form-label" htmlFor="Address">
        Zip Code
      </label>
      <input
        type="number"
        name="text"
        placeholder="80216"
        className="form-control p-2"
      />
    </div>
  </form>
  )
}

export default AddEditUser;