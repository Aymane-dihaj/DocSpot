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

export enum FormFieldType{
  INPUT = 'input',
  TEXTAREA = 'textArea',
  SELECT = 'select',
  PHONE = 'phone',
  DATE_PICKER = 'datePicker',
  SKELETON = 'skeleton',
  CHECKBOX = 'checkbox' 
}

 
export const PatientForm = () => {

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
      
      console.log(userData)

      const user = await createUser(userData);

      if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there👋</h1>
          <p className="text-dark-700">Schedule your first appointment...</p>
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
            
        <CustomFormField 
            control={form.control}
            name='email'
            FieldType={FormFieldType.INPUT}
            label='Email'
            placeholder='nozel@dev.com'
            icon='/assets/icon/email.svg'
            iconAlt='email'
          />
        <CustomFormField 
            control={form.control}
            name='phone'
            FieldType={FormFieldType.PHONE}
            label='Phone number'
            placeholder='+212 693840965'
          />
        
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm;
