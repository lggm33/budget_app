import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  console.log('middleware')
  return await updateSession(request)
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/my-banks/:path*",
    "/transactions-history/:path*",
    "/payment-transfer/:path*",
    
  ],
}