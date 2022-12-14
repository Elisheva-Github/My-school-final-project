import {
  getAllSubjectsFromServer,
  subscribeToLesson,
} from "../../services/subjects";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useStudentService } from "../../services/studentService";
import { useMySchoolService } from "../../services/mySchoolService";

import '../../style/student/student.css'

function Subscribe() {
  const dispatch = useDispatch();
  const studentService = useStudentService();
  const MySchoolService = useMySchoolService();
  const [subject, setSubject] = useState("");
  const [lessons, setLessons] = useState([]);

  const getAllSubjects = async () => {
    MySchoolService.get("teacher/allLessons")
      .then((data) => {
        setLessons(data);
      })
      .catch((err) => {
        console.log("error", err);
        alert(" 谞讻砖诇馃槖");
      });
  };

  const subscribe = () => {
    studentService.post(
      "lesson/subscribe",
      { subject },
      "update-lesson-for-student"
    );
  };

  return (
    <div className="">
      <h3>砖讬诐 诇讘, 专讬砖讜诐 诇砖讬注讜专 讬讜爪讬讗 讗讜转讱 诪讛砖讬注讜专 讘讜 讗转讛 专砖讜诐 讻注转</h3>
      <div className="btn-s">
        <div>
          <button
            className="button btn-shwo"
            onClick={() => {
              getAllSubjects();
            }}
          >
            馃憠 诇讞抓 讻讚讬 诇讘讞讜专 拽讜专住
          </button>
          {lessons && (
            <div>
              {lessons.map((lesson, i) => (
                <button className="subscribe-button"
                  key={i}
                  onClick={() => {
                    setSubject(lesson.subject);
                  }}
                >
                  {lesson.subject}{" "}
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            className="button btn-sign"
            onClick={() => {
              subscribe();
            }}
          >
            {" "}
            专讬砖讜诐{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
