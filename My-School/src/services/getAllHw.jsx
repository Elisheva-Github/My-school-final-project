export const getAllHwFromServer = (subject) => {
    return fetch(`http://localhost:3000/lesson/allHw?subject=${subject}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });
}