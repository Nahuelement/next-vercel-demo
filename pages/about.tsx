
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { FC } from 'react';




export default function AboutPage() {
  return (
   <>
     <h1>Page About</h1>
        <h1 className='title'>
          Return  <Link href="/">Home!</Link>
        </h1>
    </>
  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
  return(
    <MainLayout>
      < DarkLayout>
          {page}
     </DarkLayout>
    </MainLayout>
  )
}
