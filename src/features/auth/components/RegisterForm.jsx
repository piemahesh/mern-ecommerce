import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register_schema } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../redux";
import { printTable } from "../../../helpers";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(register_schema),
  });

  const onSubmit = async (reqdata) => {
    console.log("Form Data:", reqdata);
    const { data } = await RegisterAPI(reqdata);
    printTable(data);
    const { success, message, data: responseData } = data;
    console.log(success, message, responseData);
    printTable(responseData);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue -700">
          Register
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
                type="text"
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className={`w-full px-4 py-2 mt-2 rounded-md outline-none border-none ring-2 ring-gray-300  ${
                  errors.email ? "ring-red-500" : "focus:ring-purple-500"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
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
            Register
          </button>
          <Link to={"/"}>Already have an account? Login page</Link>
        </form>
      </div>
    </div>
  );
};
