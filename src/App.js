import React, { useState } from "react";
import { Card, CardContent } from "./component/card";
import { Button } from "./component/button";
import { Input } from "./component/input";
import { Select, SelectItem } from "./component/select";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';




const App = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const [newCourseType, setNewCourseType] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [filterCourseType, setFilterCourseType] = useState("");

  const addCourseType = () => {
    setCourseTypes([...courseTypes, newCourseType]);
    setNewCourseType("");
  };

  const addCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse("");
  };

  const addCourseOffering = () => {
    if (selectedCourse && selectedCourseType) {
      setCourseOfferings([
        ...courseOfferings,
        { course: selectedCourse, type: selectedCourseType },
      ]);
    }
  };

  const registerStudent = (offering, studentName) => {
    setRegistrations([
      ...registrations,
      { offering, student: studentName },
    ]);
  };

  const filteredOfferings = filterCourseType
    ? courseOfferings.filter((co) => co.type === filterCourseType)
    : courseOfferings;

  return (
    <div className="p-4 grid gap-6">
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Course Types</h2>
          <Input
            value={newCourseType}
            onChange={(e) => setNewCourseType(e.target.value)}
            placeholder="Add Course Type"
          />
          <Button className='btn btn-primary' onClick={addCourseType}>Add</Button>
          <ul>
            {courseTypes.map((ct, i) => (
              <li key={i}>{ct}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Courses</h2>
          <Input
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Add Course"
          />
          <Button onClick={addCourse}>Add</Button>
          <ul>
            {courses.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Course Offerings</h2>
          <Select onValueChange={setSelectedCourseType}>
            <SelectItem value="">Select Type</SelectItem>
            {courseTypes.map((ct, i) => (
              <SelectItem key={i} value={ct}>{ct}</SelectItem>
            ))}
          </Select>
          <Select onValueChange={setSelectedCourse}>
            <SelectItem value="">Select Course</SelectItem>
            {courses.map((c, i) => (
              <SelectItem key={i} value={c}>{c}</SelectItem>
            ))}
          </Select>
          <Button onClick={addCourseOffering}>Add Offering</Button>
          <ul>
            {courseOfferings.map((co, i) => (
              <li key={i}>{`${co.type} - ${co.course}`}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Student Registrations</h2>
          <Select onValueChange={setFilterCourseType}>
            <SelectItem value="">All Types</SelectItem>
            {courseTypes.map((ct, i) => (
              <SelectItem key={i} value={ct}>{ct}</SelectItem>
            ))}
          </Select>
          <ul>
            {filteredOfferings.map((co, i) => (
              <li key={i}>
                <span>{`${co.type} - ${co.course}`}</span>
                <Input
                  placeholder="Student Name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      registerStudent(co, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">All Registrations</h3>
          <ul>
            {registrations.map((r, i) => (
              <li key={i}>{`${r.student} registered for ${r.offering.type} - ${r.offering.course}`}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
