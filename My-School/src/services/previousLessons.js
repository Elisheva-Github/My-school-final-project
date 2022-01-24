// export const previousLessonToServer = (id) => {
//     
//     return fetch(`http://localhost:3000/s_previousLessons?id=${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             return data;
//         }
//         )
//         .catch((err) => {
//             console.log("error", err);
//         });

//     }


export const previousLessonToServer = (subject) => {
    // 
    return fetch(`http://localhost:3000/lesson/s_previousLessons/` + subject)
        .then((res) => res.json())
        .then((data) => {
            return data.result;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

}
