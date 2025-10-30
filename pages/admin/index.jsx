import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { adminSchema } from "@/schema/admin";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



const Login = () => {
  const {push} = useRouter();
  const onSubmit = async (values, actions) => {
   try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`,values)

    if(res.status === 200) {
     actions.resetForm();
     toast.success("Admin Login Success")
     push("/admin/profile")
    }
   } catch (error) {
    console.log(error)
   }
    
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Admin Username",
      value: values.email,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Admin Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Admin Login</Title>
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
          <button className="px-[30px] py-[8px]  bg-primary text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl">Login</button>
          <Link href="/auth/Register">
            <span className="text-sm  cursor-pointer text-secondary hover:text-orange-600">
              Back to Home
            </span>
          </Link>
        </div>
      </form>
    </div>
  );

  
};

export const getServerSideProps = (ctx) => {
 const myCookie = ctx.req?.cookies || "";
 if(myCookie.token === process.env.ADMIN_TOKEN) {
  return {
    redirect: {
      destination: "/admin/profile",
      permanent: false
    }
  }
 }
 return {
  props: {}
 }
}

export default Login