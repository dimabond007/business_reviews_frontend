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
import CallForActionImage from '../images/CallForActionImage.jpeg';

function LoginPage() {
  const { login } = useAuth();

  function handleLogin(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { username, password };

    login(data);
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${CallForActionImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form onSubmit={handleLogin} className="relative z-10 left-[520px] mb-9 w-[1500px]">
        <Card className="w-full max-w-md bg-white bg-opacity-30 shadow-2xl rounded-lg ">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-6">
            <div className="">
              <Label htmlFor="username" className=" block  mb-1 font-semibold">Username:</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username..."
                className="w-full   px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 "
              />
            </div>
            <div>
              <Label htmlFor="password" className="block mb-1 font-semibold">Password:</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password..."
                className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full dark:bg-blue text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Sign-in
            </Button>
          </CardContent>
          <CardFooter className="text-center p-4">
            <p className="text-md m-auto font-bold rounded-md p-1 bg-white dark:bg-black">
              Don't have an account yet?{" "}
              <Link to={"/auth/register"} className="underline text-blue-600">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default LoginPage;
