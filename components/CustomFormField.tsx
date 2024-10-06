'use client'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"
import Image from "next/image"
import { E164Number } from "libphonenumber-js/core" 
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface FormProps{
    control: Control<any>
    name: string,
    FieldType: FormFieldType,
    label?: string,
    placeholder?: string,
    icon?: string,
    iconAlt?: string,
    disable?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({field, props} : {field: any, props: FormProps}) => {
  
  const {icon, FieldType, iconAlt, placeholder} = props
  
  switch (FieldType) {
      case FormFieldType.INPUT:
          return (
            <div className="border rounded-md border-dark-500 bg-dark-400 flex">
              {icon && ( 
              <Image src={icon} 
                    alt={iconAlt || 'icon'} 
                    height={17} 
                    width={17} 
                    className="ml-3"/>
              )}

              <FormControl>
                <Input  placeholder={placeholder}
                        {...field}
                        className="shad-input border-0"
                        />
              </FormControl>
            </div>
          )
      case FormFieldType.PHONE:
          return (
            <FormControl>
              <PhoneInput
                defaultCountry="US"
                placeholder={placeholder}
                withCountryCallingCode
                international
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className='input-phone'
              />
            </FormControl>
          )
    
      default:
        break;
    }
}

const CustomFormField = (props : FormProps) => {

  const {label, control, name, FieldType} = props

  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              {FieldType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}

              <RenderField props={props} field={field}/>
              <FormMessage className="shad-error"/>
            </FormItem>
          )}
    />
  )
}

export default CustomFormField
