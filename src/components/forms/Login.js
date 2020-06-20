import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login form</h1>
      <form class="form-group form-inline">
        <label for="">Name</label>
        <input type="text" class="form-control" name="name" />
        <label for="">Email</label>
        <input type="email" class="form-control" name="email" />
      </form>
    </div>
  );
};

export default Login;
