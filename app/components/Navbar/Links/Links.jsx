import Link from 'next/link'
import React from 'react'

const Links = () => {
    const links = [
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Blogs",
            path:"/blog",
        },
        {
            title:"Contact",
            path:"/contact",
        }
    ]
  return (
    <div>
        {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
    </div>
  )
}

export default Links