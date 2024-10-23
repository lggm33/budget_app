/* eslint-disable @typescript-eslint/no-unused-vars */
import { Control, FieldPath } from "react-hook-form"
import { FormField,  FormLabel, FormControl, FormMessage } from "./form"
import { Input } from "./input"
import { z } from "zod"
import { authFormSchema } from "@/lib/utils"

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
  type: string,
  error?: string,
}

function CustomInput(props: CustomInputProps) {



  const { control, name, label, placeholder, type } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input id={name} key={label} className="input-class" placeholder={placeholder} {...field} type={type} />
            </FormControl>
            <FormMessage className="form-message mt-2"/>
          </div>

        </div>
      )}
    />
  )
}

export default CustomInput