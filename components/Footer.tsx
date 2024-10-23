import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer(props: FooterProps) {

  const {user: {name, email}, type = "desktop"} = props
  const router = useRouter()
  const handleLogout = async () => {


    try {
      const loggedOut = await logoutAccount()
      if (loggedOut) router.push("/sign-in")
      
    } catch (error) {
      console.error(error)
      return error
    }

  }
  return (
    <footer className='footer'>
      <div className={type === "mobile" ? "footer_name_mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {name[0] || ""}
        </p>
        
      </div>
      <div className={type === "mobile" ? "footer_email_mobile" : "footer_email"}>
          <h1 className='text-14 truncate  text-gray-600 font-semibold'>
            {name || ""}
          </h1>
          <p className="text-14 truncate font-normal text-gray-500">
            {email || ""}
          </p>
        </div>

        <div className="footer_image" onClick={handleLogout}>
          <Image
            src="icons/logout.svg"
            fill
            alt="logout"
          />
        </div>
    </footer>
  )
}

export default Footer