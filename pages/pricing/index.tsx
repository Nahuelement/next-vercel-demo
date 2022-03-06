import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"


export default function Pricing() {
    return (
        <MainLayout>
        <h1>Page Pricing</h1>
          <h1 className='title'>
          Return <Link href="/">Home!</Link>
          </h1>
        </MainLayout>
  )
}
