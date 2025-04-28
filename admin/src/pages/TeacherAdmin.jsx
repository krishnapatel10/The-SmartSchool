import { useState } from "react";
import React from "react";
import axios from "axios";
import { Image, User, Calendar, Briefcase } from "lucide-react";

export default function TeacherAdmin() {
  async function handleSubmit(e) {
    e.preventDefault();
    let Data = {
      ProfilePic: e.target[0].value,
      Name: e.target[1].value,
      Age: e.target[2].value,
      Exp: e.target[3].value,
    };

    let res = await axios.post("http://localhost:5500/api/teacher/add", Data);
    console.log(res.data);
    e.target.reset();
  }

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      {/* Header */}
      <header className="bg-blue-500 text-white py-2 px-6 shadow-md">
        <h1 className="text-2xl font-bold">Teacher Admin</h1>
        <p className="text-gray-200">Manage All Teachers</p>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Add Teacher Details</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Profile Picture URL */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Profile Picture URL:</label>
              <div className="relative">
                <Image className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="url"
                  name="Profilepic"
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name:</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium">Age:</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="number"
                  name="age"
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Experience (Years):</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="number"
                  name="exp"
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-gray-600">
        © 2025 Teacher Management System
      </footer>
    </div>
  );
}
