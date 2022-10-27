
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import StudentMainMenu from '../studentMainMenu';
import UseUploadFile from '../fileReader';
import { getAllLessonsFromServer } from '../../services/getAllLessons';
import { postHwAnswerToServer } from '../../services/postHw';
import '../../style/student/s_previousLessons.css';


const ViewHw = (props) => {
  const [file, setFile] = useState('');
  const { fileData, onfileChange } = UseUploadFile()
  // const { file, onfileChange } = UseUploadFile()
  const [lessons, setLessons] = useState([]);
  const dispatch =useDispatch();
  const postMyHwFile = async (lessonId, studentId) => {
    let res = '';
    
    let type = "Lessons"
    dispatch({ type: "set-loader", payload:true});
    res = await postHwAnswerToServer({lessonId, studentId, file:fileData});
    dispatch({ type: "set-loader", payload:false});
    console.log("postMyHwFileToServer", res);
  }

  useEffect(async () => {
    if(props.subject){
      dispatch({ type: "set-loader", payload:true})
    getAllLessonsFromServer(props.subject).then((data) => {
      dispatch({ type: "set-loader", payload:false})
      setLessons(data);
      console.log("***getAllLessonsFromServer", data);
    })
  }
  }, [props.subject])

  return (<div>
    <div className="hw_table">
      <div className="table">
        <div className="pageTitle">
          שיעורי בית:
        </div>
        <br />
        {lessons.length>0? <table>
          <tbody>
          <tr className="title">
            <td>שם שעור </td>
            <td>תאריך</td>
            <td>ציון </td>
            <td>להוריד ש.ב</td>
            <td>להעלות ש.ב</td>
          </tr>
          {lessons?.map(l => {
            let hw=l.arrHw.find(el=>el.studentId===props.id);
             return(
            <tr>
              <td>  {l.lessonName}</td>
              <td>  {l.date.slice(0, 10)}</td>
          <td>  {hw?.mark}</td>
              {/* <td >
                {l['hwQuestions']?.map((n,i) =>
                  <tr key={i}>
                    <td > <a href={n.file} download="file">⬇</a> <iframe src={n.file} frameborder="0"></iframe></td>
                    <td > <a href={n.file} download="hw">לחץ להורדה</a></td>
                  </tr>)}
              </td> */}
                <td >
                  <tr>
                    {/* <td > <a href={l.file} download="file">⬇</a> <iframe src={n.file} frameborder="0"></iframe></td> */}
                    {/* <td > <a href={l.file} download="hw">לחץ להורדה</a></td> */}
                    <td>
                  {l.file && <a href={l.file} download={"hw_" + l.lessonName}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg></a>}
                </td>
                  </tr>
              </td>
              <td>{hw?.mark?'שיעורי הבית כבר הוגשו ונבדקו':<input type="file" onChange={onfileChange} placeholder="⬆" ></input> }</td>
              <td>{
              hw?.mark?'לא ניתן לעדכן שיעורי בית בדוקים '
                : <>{hw?.file &&'שיעורי הבית כבר הוגשו האם ברצונך לעדכן?'}<button className="sendBtn" onClick={() =>postMyHwFile(l._id, props.id, file)}> שלח</button></>}</td>
            </tr>
          )})}
          </tbody>
        </table>: 'לא נמצאו שיעורי בית'}
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
    id: state.user?.user?._id,
  };
};
export default connect(mapStateToProps, {})(ViewHw);











// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
//  import {viewTasksFromServer} from '../../services/viewTasks'
//  import HeaderS from '../headerS';
//  import Avatar from '@material-ui/core/Avatar';


// const Tasks = () => {

//   let history = useHistory();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const task = async(userName,password) => {
//      let res = '';
//      res = await viewTasksFromServer(userName, password);
//      console.log(res);
//       //שולחים לשרת את שם המשתמש והסיסמא
//       ///פניה לדאטא ביס של התלמיד
//       if(1)//תלמיד
//       history.replace("/student");
//       if(2)//מורה
//       history.replace("/teacher");
//       else
//        alert("User not found😥😥!! please sign up.")
//   }


//   return (<div className="login">
//       <HeaderS/>
//      {/* <h1>
//         <Avatar>{props.fname}</Avatar>
//       </h1> */}
//     <img className="logo" src={"/images/logo.png"} />
//     <img className="welcome" src={"/images/welcome.png"} />
//     <img className="Profil" src={"/images/profil.png"} />
//     <div className="group4" >
//       <div >
//         <input type="text" id="userName" name="userName"
//          placeholder=":הכנס שם משתמש" className="name" 
//          value={userName} onChange={(e) =>{ 
//           console.log(e.target.value)
//           setUserName(e.target.value)}}/>
//       </div>
//     </div>
//     <div className="group3" >
//       <input type="password" id="password" name="password"
//        placeholder=":הכנס סיסמא" className="name" 
//        value={password} onChange={(e) =>{ 
//         console.log(e.target.value)
//         setPassword(e.target.value)}}/>
//     </div>

//     <div className="group2">

//       <button className="button" onClick={() => viewTasksFromServer(userName,password)}>  התחברות   </button>
//     </div>
//   </div>
//   );

// }

// export default Tasks;