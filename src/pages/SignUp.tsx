import { SignUpForm } from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;