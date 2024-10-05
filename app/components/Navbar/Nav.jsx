'use client'
import Link from 'next/link'
import React from 'react'
import Links from './Links/Links'

const Nav = () => {
  return (
    <div className="header_section">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Nav