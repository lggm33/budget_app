"use client"
import { useRouter } from "next/navigation"
import {logoutSupabase} from "@/lib/actions/user.actions"
// import { SignOut } from '@supabase/supabase-js'

function SignOut() {

  const router = useRouter()

  const handleOnClick = async () => {
    await logoutSupabase()
     router.push('/sign-in')
  }

  return (
  
      <button onClick={() => {handleOnClick()}}>Logout</button>

  )
}

export default SignOut