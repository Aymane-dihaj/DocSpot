import {FormControl,
FormDescription,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, Controller } from "react-hook-form"

interface FieldProps{
    control: Control<any>,
    name: string,
}

const FormField = ({ control, name }: FieldProps) => {
  return (
    <FormField
                control={control}
                name="username"
                // render={({ field }) => (
                // <FormItem>
                //     <FormLabel>Username</FormLabel>
                //     <FormControl>
                //     <Input placeholder="Enter your username" {...field} />
                //     </FormControl>
                //     <FormDescription>
                //     This is your public display name.
                //     </FormDescription>
                //     <FormMessage />
                // </FormItem>
                // )}
            />
    // <h1>hello</h1>
  )
}

export default FormField
