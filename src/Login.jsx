import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Version without logout function
// import axios from "axios";

// export function Login() {
//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log("handleLogin");
//     const params = new FormData(event.target);
//     axios
//       .post("http://localhost:3000/sessions.json", params)
//       .then((response) => {
//         console.log(response.data);
//         event.target.reset();
//       })
//       .catch((error) => {
//         console.log(error.response.data.errors);
//       });
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h1>Login</h1>
//       <div class="d-grid col-2 mx-auto">
//         <label for="email" class="form-label">
//           Email
//         </label>
//         <input type="email" class="form-control" name="email" />
//       </div>
//       <div class="d-grid col-2 mx-auto">
//         <label for="password" class="form-label">
//           Password
//         </label>
//         <input type="password" class="form-control" name="password" />
//       </div>
//       <div class="d-grid gap-4 col-1 mx-auto">
//         <button type="submit" class="btn btn-outline-success">
//           Log me in!
//         </button>
//       </div>
//     </form>
//   );
// }
