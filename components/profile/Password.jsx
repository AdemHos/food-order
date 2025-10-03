import Title from "../ui/Title"
import Input from "../form/Input"
import { useFormik } from 'formik'
import { registerSchema } from "@/schema/register"
import { newPasswordSchema } from "@/schema/newPassword"

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            password: "",
            confirmPassword: "",
          },
          onSubmit,
          validationSchema: newPasswordSchema,
        });
    
      const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id: 2,
          name: "confirm",
          type: "password",
          placeholder: "Confirm Password",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        },
        
          
      ];
  return (
    <div>
      <form className='lg:p-8 mt-2 lg:mt-4 flex-1 ' onSubmit={handleSubmit}>
         <Title addClass={'text-[40px]'}>Password Settings</Title>
         <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {inputs.map((input) => (
                <Input key={input.id}
                onBlur={handleBlur}
                {...input}
                onChange={handleChange}/>
            ))}
         </div>
         <button className="px-[30px] py-[8px]  bg-primary mt-4 text-white hover:bg-orange-600 transition-all cursor-pointer rounded-2xl">Update</button>
        </form>
    </div>
  )
}

export default Password
