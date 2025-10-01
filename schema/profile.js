import * as Yup from 'yup'

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Phone Number must be at least 3 characters."),
  phoneNumber: Yup.string()
    .required("Full name is required.")
    .min(10, "Phone number must be at least 10 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  address: Yup.string().required("Address is require"),
  job: Yup.string().required("Job is required."),
  bio: Yup.string().required("Bio is required."),
});