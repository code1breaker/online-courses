"use client"
import Input from "../shareable-components/Input";
import Button from "../shareable-components/Button";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="w-full md:w-[50%] xl:w-[40%]">
      <div className="bg-white rounded-md p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Sign Up</h1>
        <p className="text-sm md:text-base text-[#4C4C4D] text-center py-1">
          Create an account to unlock exclusive features.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
          <Input
            type="text"
            name="fullname"
            label="Full Name *"
            placeholder="Enter your Name"
          />
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
            <label>I aggre with Terms of Use and Privacy Policy</label>
          </div>

          <Button>Sign Up</Button>

          <p className="text-center">OR</p>

          <Button className="md:text-base font-medium" variant="quatrernary">
            Sign Up with Google
          </Button>

          <p className="text-center">Already have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
