import RegisterForm from '@/components/forms/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
    {/* TODO: OTP verification | passKey model */}
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image className="h-10 md:h-13 mb-16 w-max" width={1000} height={1000} alt="DocSpot Logo" src={'/assets/Logo.svg'} />
        {/* <PatientForm/> */}
        <RegisterForm/>
        <div className="text-14-regular mt-20 justify-between flex">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 DocSpot</p>
          <Link className="text-blue-500" href={'/?admin=true'}>Admin</Link>
        </div>
      </div>
    </section>
    <Image src='/assets/images/register-img.png' height={1000} width={1000} alt='doctor image' className="side-img max-w-[390px] rounded-l-2xl object-cover" priority/>
  </div>
  )
}

export default Register
