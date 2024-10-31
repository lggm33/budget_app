"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"

import {authFormSchema} from "@/lib/utils"
import CustomInput from "./ui/CustomInput"
import { Loader2 } from "lucide-react"
import { signUp, signIn, loginSupabase, signupSupabase } from "@/lib/actions/user.actions"
import { useRouter } from "next/navigation"
import PlaidLink from "./PlaidLink"


function AuthForm({type}: {type:string}) {

  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: ""
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {

    setIsLoading(true)
    
    try {

      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          phoneNumber: data.phoneNumber!,
          city: data.city!,
          country: data.country!,
          dateOfBirth: data.dateOfBirth!,
          email: data.email,
          password: data.password
        }

        const newUser = await signupSupabase(userData);
        setUser(newUser)
      }

      if (type === "sign-in") {
        const response = await loginSupabase({
          email: data.email,
           password: data.password,
        })

        if (response) router.push("/dashboard")
      }
      
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
          <Link className="flex items-center space-x-2" href="/">
            <svg className="h-6 w-6 text-blue-600" fill="none" height="35" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"/><path d="M7 15h0M2 9h20"/></svg>
            <span className="hidden font-bold sm:inline-block text-4xl">FinanzApp</span>
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user 
                ? 'Link Account'
                : type === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
              }
            </h1>
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"
              }
            </p>
          </div>
      </header>
      
      {user 
        ? (
          <div className="flex flex-col gap-4">
            <PlaidLink user={user} variant='primary'/>
          </div>
        )
        : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === 'sign-up' && (
                 <>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Ex: John"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Ex: Doe"
                      type="text"
                    />
                  </div>
                   
                  <CustomInput
                    control={form.control}
                    name="country"
                    label="Country"
                    placeholder="Enter your country"
                    type="text"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    type="text"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="phoneNumber"
                      label="Phone Number"
                      placeholder="Ex: +15553334444"
                      type="text"
                    />
                  </div>
                 
                 </>

                )}
                <CustomInput
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="text"
                
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                
                />
                <div className="flex flex-col gap-4">
                  <Button className="form-btn" type="submit" disabled={isLoading}>
                    {
                      isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin"/>
                        
                          Loading...
                        </>
                      ) : (
                          type === 'sign-in' ? 'Sign In' : 'Sign Up'
                      )
                    }
                  </Button>
                </div>
              </form>
            </Form>
            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === 'sign-in' ? 'New to Budget App?' : 'Already have an account?'}
              </p>
              <Link
                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                className="form-link"
              >
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </footer>
          </>
        )
      }
    </section>
  )
}

export default AuthForm