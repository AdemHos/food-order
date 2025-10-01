import Title from "../ui/Title"
import Input from "../form/Input"
import { useFormik } from 'formik'
import { profileSchema } from '@/schema/profile'

const Account = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            persons: "",
            date: "",
          },
          onSubmit,
          validationSchema: profileSchema,
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
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
          value: values.phoneNumber,
          errorMessage: errors.phoneNumber,
          touched: touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Your Address",
          value: values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
        
        {
          id: 6,
          name: "bio",
          type: "text",
          placeholder: "Your Bio",
          value: values.bio,
          errorMessage: errors.bio,
          touched: touched.bio,
        },
      ];
  return (
    <div>
      <form className='lg:p-8 mt-2 lg:mt-4 flex-1 ' onSubmit={handleSubmit}>
         <Title addClass={'text-[40px]'}>Profile Settings</Title>
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

export default Account
