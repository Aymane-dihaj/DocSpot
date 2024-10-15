"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "../ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.action"
import { useRouter } from "next/navigation"
import { FormFieldType } from "./PatientForm"


export const RegisterForm = ({user} : {user: User}) => {

  // console.log(user);

  const router = useRouter()

  const [isLoading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: '',
      phone: '',
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof userFormValidation>) {
    // console.log({name, email, phone})
    setLoading(true);

    try {
      const userData = {name, email, phone};
      
      const user = await createUser(userData);
      
      setLoading(false);

      if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about you.</p>
        </section>
        
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal informations</h2>
          </div>
        </section>
        
        <CustomFormField 
            control={form.control}
            name='name'
            FieldType={FormFieldType.INPUT}
            label='Full name'
            placeholder='Aymane Dihaj'
            icon='/assets/icon/user.svg'
            iconAlt='user'
            />
        
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default RegisterForm;
