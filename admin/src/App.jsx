import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, User, BookOpen, LayoutDashboard, LogOut, Menu } from "lucide-react";
import HomePage from "./pages/Home";
import TeacherAdmin from "./pages/TeacherAdmin";
import StudentAdmin from "./pages/StudentAdmin";
import CourseAdmin from "./pages/CourseAdmin";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex h-screen  bg-gray-100">
        {/* Sidebar */}
        <aside className={`bg-white shadow-lg p-4 flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
          <div>
            <button 
              className="mb-4 p-2 rounded-lg hover:bg-gray-200 transition-transform duration-300 transform"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ transform: sidebarOpen ? "rotate(0deg)" : "rotate(-180deg)" }}
            >
              <Menu size={24} />
            </button>
            <h1 className={`text-2xl font-bold text-indigo-600 mb-6 transition-all ${sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h1>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100">
                    <LayoutDashboard size={20} />
                    <span className={sidebarOpen ? "block" : "hidden"}>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Teacher" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100">
                    <User size={20} />
                    <span className={sidebarOpen ? "block" : "hidden"}>Teachers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Student" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100">
                    <User size={20} />
                    <span className={sidebarOpen ? "block" : "hidden"}>Students</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Course" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100">
                    <BookOpen size={20} />
                    <span className={sidebarOpen ? "block" : "hidden"}>Courses</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className="flex items-center space-x-2 text-red-600 p-2 rounded-lg hover:bg-red-100">
            <LogOut size={20} />
            <span className={sidebarOpen ? "block" : "hidden"}>Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          </header>
          
          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Teacher" element={<TeacherAdmin />} />
              <Route path="/Student" element={<StudentAdmin />} />
              <Route path="/Course" element={<CourseAdmin />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}