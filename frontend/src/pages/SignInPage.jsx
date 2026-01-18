import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="w-full max-h-screen flex justify-center items-center pt-10">
      <SignIn
        path="/sign-in"
        routing="path"
        appearance={{
          elements: {
            card: "shadow-xl rounded-2xl",
          },
        }}
      />
    </div>
  );
}
