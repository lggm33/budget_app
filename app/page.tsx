import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <svg className="h-6 w-6 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"/><path d="M7 15h0M2 9h20"/></svg>
            <span className="hidden font-bold sm:inline-block">FinanzApp</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-blue-600" href="#features">Features</Link>
            <Link className="transition-colors hover:text-blue-600" href="#how-it-works">How it works</Link>
            <Link className="transition-colors hover:text-blue-600" href="#pricing">Pricing</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/sign-in" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
              Log In
            </Link>
            <Link href="/sign-up" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
              Sign Up
            </Link>
          </div>
          <details className="md:hidden">
            <summary className="list-none">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </summary>
            <div className="absolute left-0 right-0 z-50 mt-2 bg-white border-b border-gray-200 md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#features">Features</Link>
                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#how-it-works">How it works</Link>
                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#pricing">Pricing</Link>
                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="/login">Log In</Link>
                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="/subscribe">Subscribe</Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800">
                  Control Your Finances with FinanzApp
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-700 md:text-xl">
                  Simplify the management of your multiple cards and bank accounts. Get a clear view of your finances by just forwarding your email notifications.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/start" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
                  Start Now
                </Link>
                <Link href="/learn-more" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-blue-100 hover:bg-blue-200 h-10 py-2 px-4">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 mb-2 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"/><path d="M7 15h0M2 9h20"/></svg>
                <h3 className="text-xl font-bold text-blue-800">Multiple Cards and Banks</h3>
                <p className="text-sm text-blue-600 text-center">
                  Manage all your cards and bank accounts in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 mb-2 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <h3 className="text-xl font-bold text-blue-800">Email Automation</h3>
                <p className="text-sm text-blue-600 text-center">
                  Forward your transaction notifications and we'll handle the rest.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 mb-2 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                <h3 className="text-xl font-bold text-blue-800">Detailed Analysis</h3>
                <p className="text-sm text-blue-600 text-center">
                  Get expense and income tables with automatic categorization.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 mb-2 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <h3 className="text-xl font-bold text-blue-800">Financial Calendar</h3>
                <p className="text-sm text-blue-600 text-center">
                  Visualize your past and future expenses and income in an intuitive calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md bg-white">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">1</div>
                <h3 className="text-xl font-bold text-blue-800">Sign Up</h3>
                <p className="text-sm text-blue-600 text-center">
                  Create your FinanzApp account quickly and easily.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md bg-white">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">2</div>
                <h3 className="text-xl font-bold text-blue-800">Connect Your Accounts</h3>
                <p className="text-sm text-blue-600 text-center">
                  Forward your transaction notifications to our email.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-blue-200 border p-6 rounded-lg shadow-md bg-white">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">3</div>
                <h3 className="text-xl font-bold text-blue-800">Enjoy Control</h3>
                <p className="text-sm text-blue-600 text-center">
                  Access detailed analysis and manage your finances with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Simple Pricing</h2>
            <div className="max-w-sm mx-auto border-blue-200 border p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">All-Access Plan</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$10<span className="text-xl font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>30-day free trial</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4  12"/></svg>
                  <span>Unlimited accounts</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Full feature access</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>AI-powered insights</span>
                </li>
              </ul>
              <Link href="/trial" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 w-full">
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Start Controlling Your Finances Today
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up now and take the first step towards better financial management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                
                  <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 w-full">
                    Sign Up
                    <svg className="ml-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-blue-600">© 2024 FinanzApp. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}