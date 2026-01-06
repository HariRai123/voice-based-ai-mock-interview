import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link, useNavigate } from "react-router";
import FormField from "./FormField";
import { toast } from "sonner";
import AppwriteAccount from "@/src/appwrite/Account.services";

const authFormSchema = (type) =>
  z.object({
    name:
      type === "sign-up"
        ? z.string().min(2, "Name is required")
        : z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

function AuthForm({ type }) {
  const isSignIn = type === "sign-in";
  const navigate = useNavigate();
  const appwriteAccount = new AppwriteAccount();

  const form = useForm({
    resolver: zodResolver(authFormSchema(type)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      if (type === "sign-up") {
        const result = await appwriteAccount.createAppwrite(
          values.email,
          values.name,
          values.password
        );

        if (result?.status) {
          toast.success("Account created successfully. Please sign in.");
          navigate("/auth/signin");
        }
      } else {
        const result = await appwriteAccount.createEmailPasswordSession(
          values.email,
          values.password
        );

        if (result?.status) {
          toast.success("Sign in successful");
          navigate("/dashboard");
        }
      }
    } catch (error) {
      toast.error("Authentication failed");
      console.error(error);
    }
  }

  return (
    <div className="text-white card-border w-full max-w-md mx-auto">
      <div className="flex flex-col gap-5 card px-6 py-10 sm:px-8 sm:py-12">
        <div className="flex items-center justify-center gap-2">
          <img src={Logo} alt="AI Mock Interview Logo" height={34} width={60} />
          <h2 className="text-primary-100 text-lg sm:text-xl">
            AIMockInterview
          </h2>
        </div>

        <h3 className="text-center text-sm sm:text-base">
          Practice the job interview with AI
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 mt-3"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Button type="submit" className="btn w-full">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            to={isSignIn ? "/auth/signup" : "/auth/signin"}
            className="font-bold text-primary-100 ml-1"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
