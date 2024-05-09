import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req){
    const urlString = req.url

    if(req.nextauth.token.user.role == 1) {
        if (urlString.includes('admin')) {
            return NextResponse.redirect(new URL('/user', req.url))
        }
    }
    else if(req.nextauth.token.user.role == 5) {
        if (urlString.includes('user')) {
            return NextResponse.redirect(new URL('/admin', req.url))
        }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.user?.role >= 1 
    },
  },
)

export const config = { matcher: ["/admin/:path*", "/user/:path*"] }