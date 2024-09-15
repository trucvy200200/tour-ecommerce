import dynamic from "next/dynamic"
import { Toaster } from "react-hot-toast"
import { ToastContainer } from "react-toastify"

const Header = dynamic(() => import("@/components/header"), {
  ssr: false
})

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <main className="h-full">
        <Header />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <ToastContainer autoClose={2000} hideProgressBar={true} rtl={false} position={"top-right"} />
      </main>
    </div>
  )
}

export default MainLayout