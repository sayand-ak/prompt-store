'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

function Navbar() {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropDown] = useState(false);



    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    },[]);

    return (
        <nav className="flex-between items-center w-full mb-7 py-5">
            <Link href="/" className="flex gap-2 flex-center">
                <Image 
                    src="/assets/images/logo.png"
                    alt="promptora logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                <p className="logo_text">Promptora</p>
            </Link>


            {/* Mobile navigation */}
            <div className="sm:flex hidden">
                {
                    session?.user ? (
                        <div className="flex gap-3 md:gap-4 items-center">
                            <Link 
                                href="/create-prompt" 
                                className="text-white black_btn"
                            >
                                Create Post
                            </Link>

                            <button 
                                type="button" 
                                onClick={signOut} 
                                className="outline_btn"
                            >
                                Sign Out
                            </button>

                            <Link 
                                href="/profile" 
                                className=""
                            >
                                <Image 
                                    src={session?.user?.image}
                                    alt="profile-image"
                                    height={40}
                                    width={40}
                                    className='rounded-full'
                                />
                            </Link>
                        </div>
                    ): (
                        <>
                            {
                                providers && 
                                Object.values(providers).map((provider) => (
                                    <button 
                                        type="button"
                                        key={provider.name}
                                        onClick={() => {signIn(provider.id)}}
                                        className="black_btn"
                                    >
                                        Sign In
                                    </button>
                                ))
                            }
                        </>
                    )
                }
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {
                    session?.user ? (
                        <div className="size-14 rounded-full object-cover">
                            <Image 
                                src={session?.user?.image}
                                alt="profile-image"
                                height={40}
                                width={40}
                                className='rounded-full'
                                onClick={() => setToggleDropDown(prev => !prev)}
                            />
                            
                            {
                                toggleDropdown && (
                                    <div className="dropdown"> 
                                        <Link
                                            href="/profile"
                                            className="dropdown_link" 
                                            onClick={() => setToggleDropDown(false)}   
                                        >
                                            My Profile
                                        </Link>

                                        <Link 
                                            href="/create-prompt" 
                                            onClick={() => setToggleDropDown(false)}
                                        >
                                            Create Post
                                        </Link>

                                        <button 
                                            type="button"
                                            className="mt-5 w-full rounded-lg bg-black text-white py-2"
                                            onClick = {() => {
                                                    setToggleDropDown(false)
                                                    signOut();
                                                }
                                            }
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )
                            }

                        </div>
                    ) : (
                        <>
                            {
                                providers && 
                                Object.values(providers).map((provider) => (
                                    <button 
                                        type="button"
                                        key={provider.name}
                                        onClick={() => {signIn(provider.id)}}
                                        className="black_btn"
                                    >
                                        Sign In
                                    </button>
                                ))
                            }
                        </>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar;