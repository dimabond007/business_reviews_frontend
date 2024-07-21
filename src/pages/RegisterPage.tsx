import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { register } = useAuth();

  function handleRegister(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { email, username, password };

    register(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister}>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Register</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="text"
                name="email"
                placeholder="Enter email..."
              />
            </div>
            <div>
              <Label htmlFor="username">Username:</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username..."
              />
            </div>

            <div>
              <Label htmlFor="password">Password:</Label>
              <Input
                id="password"
                type="text"
                name="password"
                placeholder="Enter password..."
              />
            </div>
            <Button type="submit">Sign-in</Button>
          </CardContent>
          <CardFooter>
            <p>
              Already have an account?{" "}
              <Link to={"/auth/login"} className="underline text-blue-600">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default RegisterPage;
