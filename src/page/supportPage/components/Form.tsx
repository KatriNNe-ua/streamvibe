import { useEffect, useState, type ReactElement } from "react";
import Input from "../../../components/itemForm/Input";
import { useRegisterForm } from "../hook/useRegisterForm";
import Textarea from "../../../components/itemForm/Textarea";
import Checkbox from "../../../components/itemForm/Checkbox";

type FormSupport = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  agreeOfPrivacy: boolean
};



function FormSupport(): ReactElement {
	const [messageSend, setMessageSend] = useState<string>("");
	  const { register, handleSubmit, reset, errors, isSubmitting } =
      useRegisterForm();
	  useEffect(() => {
		const time = setTimeout(()=>{
			setMessageSend("")
		}, 2500)
		return ()=> clearTimeout(time)
	  }, [messageSend]);

 const submit = async (values: FormSupport) => {
   try {
     const response = await fetch(
       "https://formsubmit.co/ajax/mazyrukkatya@gmail.com",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
         body: JSON.stringify(values),
       },
     );

     const result = await response.json();

     if (result.success === "true") {
       reset();
	   setMessageSend("✅ Sent successfully!");
     } else {
       console.error("FormSubmit response:", result);
     }
   } catch (error) {
     console.error("Error submitting form:", error);
   }
 };



 return (
   <form className="form" onSubmit={handleSubmit(submit)}>
     <div className="form__wrapper">
       <div className="form__item">
         <Input
           id="firstName"
           label="First Name"
           placeholder="Enter First Name"
           error={errors.firstName?.message}
           {...register("firstName")}
         />
       </div>
       <div className="form__item">
         <Input
           id="lastName"
           label="Last Name"
           placeholder="Enter Last Name"
           error={errors.lastName?.message}
           {...register("lastName")}
         />
       </div>
       <div className="form__item">
         <Input
           id="email"
           label="Email"
           placeholder="Enter your Email"
           error={errors.email?.message}
           {...register("email")}
         />
       </div>
       <div className="form__item">
         <Input
           id="phone"
           label="Phone Number"
           placeholder="Enter Phone Number"
           error={errors.phone?.message}
           {...register("phone")}
         />
       </div>
     </div>
     <div className="form__item form__item--shrink">
       <Textarea
         id="message"
         label="Message"
         placeholder="Enter your Message"
         error={errors.message?.message}
         {...register("message")}
       />
     </div>
     <div className="form__inner">
       <div className="checkbox">
         <Checkbox
           id="agreeOfPrivacy"
           label="I agree with Terms of Use and Privacy Policy"
           error={errors.agreeOfPrivacy?.message}
           {...register("agreeOfPrivacy")}
         />
       </div>
       <button type="submit" className="form__btn button">
         {isSubmitting ? "Sending . . ." : "Send Message "}
       </button>
     </div>
     <div className="form__message">{messageSend}</div>
   </form>
 );
}

export default FormSupport;