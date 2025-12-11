import { useEffect, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

export default function Home() {
  const [formData, setFormData] = useState({
    month: "",
    name: "",
    className: "",
    rollNo: "",
    section: ""
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      month: "",
      name: "",
      className: "",
      rollNo: "",
      section: ""
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://student-dashboard-amber-five.vercel.app/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Student added successfully ✅");
        fetchStudents();
        // ✅ Reset form
        setFormData({
          name: "",
          className: "",
          rollNo: "",
          section: "",
          month: "",
        });
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Frontend Error:", error);
      alert("Server not reachable ❌");
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://student-dashboard-amber-five.vercel.app/api/findAllStudents");
      const result = await response.json();
      if (response.ok) {
        console.log("Students:", result.data);
        setStudents(result.data);
      } else {
        alert(result.message || "Failed to fetch students");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Server not reachable");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (<>
    <div className="w-full px-2 flex gap-2 py-2">
      <div className="w-[30%]">
        <Form
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
      </div>

      <div className="w-[70%]">
        <Table
          students={students}
          setFormData={setFormData}
        />
      </div>
    </div>
  </>)
}
