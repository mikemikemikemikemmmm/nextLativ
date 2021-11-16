import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    const Id = setTimeout(() => {
      router.push('/')
    }, 2500)
    return () => clearTimeout(Id)
  }, [router])
  return (
    <div style={{ height: '75vh' }} className="w-full flex items-center justify-center">
      <h1 className='text-7xl'>there is no this product</h1>
    </div>
  )
}