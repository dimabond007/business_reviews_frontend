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
import BgImage from '../images/BackGroundImage.jpeg';

function RegisterPage() {
  const { register } = useAuth();

  function handleRegister(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { email, username, password };
    console.log(data);

    register(data);
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="absolute inset-0 bg-black  opacity-50"></div>
      <form onSubmit={handleRegister} className="relative left-[520px]  mb-9 w-[1500px] ">
        <Card className=" w-full max-w-md bg-white bg-opacity-30 shadow-2xl rounded-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold ">Register</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-6">
            <div>
              <Label htmlFor="email" className="block mb-1  font-semibold">Email:</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <div>
              <Label htmlFor="username" className="block mb-1 font-semibold ">Username:</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username..."
                className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block mb-1 font-semibold">Password:</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out dark:bg-gray-900">
              Register
            </Button>
          </CardContent>
          <CardFooter className="text-center p-4">
            <p className="text-md m-auto font-bold rounded-md p-1 bg-white dark:bg-gray-900">
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
