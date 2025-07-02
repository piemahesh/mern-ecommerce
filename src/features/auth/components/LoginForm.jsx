import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login_schema } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI, setAuthenticated } from "../redux";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login_schema),
  });

  const onSubmit = async (data) => {
    try {
      const { success, message, token } = await LoginAPI(data);
      console.log(success, message);
      if (success) {
        dispatch(setAuthenticated({ token }));
        navigate("/home");
      } else {
        alert(message || "something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue -700">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                id="username"
                type="username"
                placeholder="Enter your username"
                {...register("username")}
                className={`w-full px-4 py-2 mt-2 rounded-md outline-none border-none ring-2 ring-gray-300  ${
                  errors.username ? "ring-red-500" : "focus:ring-purple-500"
                }`}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className={`w-full px-4 py-2 mt-2 rounded-md outline-none border-none ring-2 ring-gray-300 ${
                  errors.password ? "ring-red-500" : "focus:ring-purple-500"
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-2 text-white bg-purple-500 cursor-pointer uppercase rounded-md hover:bg-purple-600 duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
          <Link to={"/register"}>Register new account</Link>
        </form>
      </div>
    </div>
  );
};
