import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import axios from "axios";
import { registerSchema } from "@/schema/register";
import { toast } from "react-toastify";

const Register = () => {
  const onSubmit = async (values, actions) => {
    
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,values);
      if(res.status === 200) {
        toast.success("User created successfully")
      }
    } catch (error) {
      toast.error("Somthing went wrong")
      console.log(error)
    }
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    // actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Create an Account</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button type="submit" className="px-[30px] py-[8px]  bg-primary text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl">Sign Up</button>
          <Link href="/auth/Login">
            <span className="text-sm  cursor-pointer text-secondary hover:text-orange-600">
              Do you have a account allready ?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register