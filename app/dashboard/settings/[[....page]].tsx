import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

function Settings() {
  return (
    
    <div className='flex items-center justify-center h-full'>
        <UserProfile routing="path" path="/dashboard/settings" />
    </div>

  )
}

export default Settings