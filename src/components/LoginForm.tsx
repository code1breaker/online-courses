"use client";
import Input from "../shareable-components/Input";
import Button from "../shareable-components/Button";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full md:w-[50%] xl:w-[40%]">
      <div className="bg-white rounded-md p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Login
        </h1>
        <p className="text-sm md:text-base text-[#4C4C4D] text-center py-1">
          Welcome back! Please log in to access your account.{" "}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
          <Input
            type="email"
            name="email"
            label="Email *"
            placeholder="Enter your Email"
          />
          <Input
            type="password"
            name="password"
            label="Password *"
            placeholder="Enter your Password"
          />

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>

          <Button>Login</Button>

          <p className="text-center">OR</p>

          <Button className="md:text-base font-medium" variant="quatrernary">
            Login with Google
          </Button>

          <p className="text-center">Don’t have an account? Sign Up</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
