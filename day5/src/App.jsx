
import React, { useState } from 'react';
import studentData from './StudentDetails.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundStudent = studentData.find(
      (s) =>
        s.name.toLowerCase() === student.name.toLowerCase() &&
        s.email.toLowerCase() === student.email.toLowerCase() &&
        s.mobile === student.mobile
    );

    if (foundStudent) {
      toast.success("✅ Login Successful!", { position: "top-right" });
      setIsSubmitted(true);
    } else {
      toast.error("❌ Student not found. Check your details!", {
        position: "top-right"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Student Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) =>
                    setStudent({ ...student, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email:</label>
                <input
                  type="email"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Mobile No:</label>
                <input
                  type="text"
                  value={student.mobile}
                  onChange={(e) =>
                    setStudent({ ...student, mobile: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter mobile number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Sign In
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              ✅ Welcome, {student.name}!
            </h2>
            <div className="text-left space-y-2">
              <p><span className="font-semibold">Name:</span> {student.name}</p>
              <p><span className="font-semibold">Email:</span> {student.email}</p>
              <p><span className="font-semibold">Mobile:</span> {student.mobile}</p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;