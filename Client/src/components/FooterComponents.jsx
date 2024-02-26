import React from 'react'
import { Footer, FooterLink, FooterLinkGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs"

function FooterComponents() {
    return (
        <Footer className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>

                        <Link to='/'
                            className='self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-xl'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tanu's</span>Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-3 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Project Link</FooterLink>


                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    My Article
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Github</FooterLink>


                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    privacy Policy</FooterLink>


                                <FooterLink
                                    href='https://github.com/tanugautam3456/My-Articles'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>

                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href="#"
                        by='Tanu gautam'
                        year={new Date().getFullYear()}
                    />

                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponents
