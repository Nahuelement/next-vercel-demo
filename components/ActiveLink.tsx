import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties ,FC} from "react"



const styles:CSSProperties = {
    color:'#0070f3',
    textDecoration:'underline',
    textDecorationColor:'blue'
}

interface Props{
    text:string,
    href:string
}

export const ActiveLink:FC <Props>= ({text, href}) => {

 const {asPath} = useRouter()
 
  return (
      <Link href={href}>
          <a style={asPath===href? styles:{}}>{text}</a>
          </Link>
  )
  
}
