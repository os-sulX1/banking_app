import React from 'react'


const Footer = ({user ,type = 'desktop'}: FooterProps) => {
  return (
    <footer className='footer'>
      <div className={type === 'mobile' ? 'footer-name_mobile' : 'footer_name'}>
        <p className='text-xl font-bold text-gray-700'>
          {user?.name[0] as string}
        </p>
      </div>
      <div className={type === 'mobile' ? 'footer-email_mobile' : 'footer_email'}>
        <h1 className='text-14 truncate font-normal text-gray-600'>
          {user?.name as string}
        </h1>

      </div>

    </footer>
  )
}

export default Footer