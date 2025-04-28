import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Image, Book, FileText, UserCheck } from "lucide-react";

export default function StudentAdmin() {
    let [CourseList, setCourseList] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5500/api/course/getList")
            .then(res => setCourseList(res.data))


    }, [])
    async function handleSubmit(e) {
        e.preventDefault();
        let Data = {
            Profilepic: e.target[0].value,
            Name: e.target[1].value,
            Age: e.target[2].value,
            Grade: e.target[3].value,
            CourseId: e.target[4].value,
        };

        let res = await axios.post("http://localhost:5500/api/Student/add", Data);
        console.log(res.data);
        // e.target.reset();  
    }

    return (
        <div className="h-screen flex flex-col bg-gray-200">
            {/* Header */}
            <header className="bg-blue-500 text-white py-2 px-6 shadow-md">
                <h1 className="text-2xl font-bold">Student Admin</h1>
                <p className="text-gray-200">Manage All Students</p>
            </header>

            {/* Form Section */}
            <div className="flex-1 flex justify-center items-center ">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
                    <h2 className="text-xl font-semibold text-gray-700 mb-6">Add Student Details</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">


                        {/* Student poster */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium">Student Banner URL:</label>
                            <div className="relative">
                                <Image className="absolute left-3 top-3 text-gray-500" size={20} />
                                <input
                                    type="url"
                                    name="StudentPoster"
                                    required
                                    className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                                />
                            </div>
                        </div>

                        {/* Student Name */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium">Student Name:</label>
                            <div className="relative">
                                <Book className="absolute left-3 top-3 text-gray-500" size={20} />
                                <input
                                    type="text"
                                    name="StudentName"
                                    required
                                    className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                                />
                            </div>
                        </div>


                        {/* Student age */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium">Student Age:</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 text-gray-500" size={20} />
                                <input
                                    name="Studentage"
                                    required
                                    className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                                />
                            </div>
                        </div>

                        {/* Student Grade */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium">Student Grade:</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 text-gray-500" size={20} />
                                <input
                                    name="StudentGrade"
                                    required
                                    className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300"
                                />
                            </div>
                        </div>

                        {/* Course */}
                        <select className="w-full p-3 pl-10 border rounded-md focus:ring focus:ring-indigo-300">
                            {
                                CourseList.map((e) => (
                                    <option key={e._id} value={e._id}>{e.CourseName}</option>
                                ))
                            }
                        </select>


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
                © 2025 Student Management System
            </footer>
        </div>
    );
}
