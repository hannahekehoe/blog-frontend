import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(undefined);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://http.cat/${status}`} alt="" /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
          />
        </div>
        <div class="text-danger text-opacity-75">
          <small> {20 - name.length} characters remaining </small>
        </div>
        <div>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password:{" "}
          <input
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            className="form-control"
            value={password_confirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            name="password_confirmation"
            type="password"
          />
        </div>
        {password_confirmation !== password ? <small className="text-danger ">Password doesn't match!</small> : null}
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

// Version without a logout function
// import axios from "axios";

// export function Signup() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("handleSubmit");
//     const params = new FormData(event.target);
//     axios
//       .post("http://localhost:3000/users.json", params)
//       .then((response) => {
//         console.log(response.data);
//         event.target.reset();
//       })
//       .catch((error) => {
//         console.log(error.response.data.errors);
//       });
//   };

//   return (
//     <div id="signup">
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name: <input name="name" type="text" />
//         </div>
//         <div>
//           Email: <input name="email" type="email" />
//         </div>
//         <div>
//           Password: <input name="password" type="password" />
//         </div>
//         <div>
//           Password confirmation: <input name="password_confirmation" type="password" />
//         </div>
//         <button type="submit">I want to do it!</button>
//       </form>
//     </div>
//   );
// }
