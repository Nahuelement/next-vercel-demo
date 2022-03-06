
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'




export default function ContactPage() {
  return (
    <MainLayout>
       <h1>Page Contact</h1>
        <h1 className='title'>
          Return  <Link href="/">Home!</Link>
        </h1>
    </MainLayout>
  )
}
