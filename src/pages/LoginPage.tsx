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
      <form onSubmit={handleLogin} className="relative z-10 w-full max-w-lg p-4">
        <Card className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 shadow-2xl rounded-xl border border-gray-300 dark:border-gray-600">
          <CardHeader className="text-center p-6">
            <CardTitle className="text-4xl font-extrabold text-gray-900 dark:text-white">Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 p-6">
            <div>
              <Label htmlFor="username" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Username:</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username..."
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Password:</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password..."
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all duration-300 ease-in-out"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out">
              Sign In
            </Button>
          </CardContent>
          <CardFooter className="text-center p-4">
            <p className="text-md font-semibold text-gray-600 dark:text-gray-400">
              Don't have an account yet?{" "}
              <Link to="/auth/register" className="underline text-blue-600 dark:text-blue-400">
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
