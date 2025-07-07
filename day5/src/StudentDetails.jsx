function StudentDetails({ name, email, mobile }) {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Student Details</h2>
      <p className="text-lg text-gray-600"><strong>Name:</strong> {name}</p>
      <p className="text-lg text-gray-600"><strong>Email:</strong> {email}</p>
      <p className="text-lg text-gray-600"><strong>Mobile No:</strong> {mobile}</p>
    </div>
  );
}

export default StudentDetails;