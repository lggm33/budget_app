import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getUserInfo } from "@/lib/actions/user.actions";
import Image from "next/image";
import {redirect} from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userInfo = await getUserInfo()

  const {data} = userInfo

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={data}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={30}
              height={30}
            />
              <MobileNav user={data}/>
          </div>

          {children}
        </div>
    </main>
  );
}
