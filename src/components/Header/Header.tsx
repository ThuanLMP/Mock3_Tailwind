import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

type PropsHeader = {
    typePage: String
}

export default function Header({ typePage }: PropsHeader) {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const navigate = useNavigate()
    const [stateNav, setStateNav] = useState<Boolean>(false)

    return (
        <>
            <div className="h-16 fixed top-0 z-10 w-full">
                {
                    isMobile === true ?
                        <div onClick={() => {
                            setStateNav(true)
                        }}>
                            <i className="fal fa-bars text-3xl absolute cursor-pointer right-3 top-5"></i>
                        </div> :
                        <ul className="flex text-xl font-medium mt-7 absolute right-16">
                            <li className={typePage === 'works' ? 'text-[#FF6464] mr-8 cursor-pointer' : 'mr-8 cursor-pointer'}
                                onClick={() => {
                                    navigate('/works')
                                }}

                            >Works</li>
                            <li className={typePage === 'blog' ? 'text-[#FF6464] mr-8 cursor-pointer' : 'mr-8 cursor-pointer'}
                                onClick={() => {
                                    navigate('/blog')
                                }}
                            >Blog</li>
                            <li>Contact</li>
                        </ul>
                }
            </div>
            {
                isMobile && stateNav &&
                <div>
                    <div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.3)] z-20'></div>
                    <div className='fixed top-0 right-0 bottom-0 w-[375px] max-w-[100%] bg-white z-20'>
                        <h1 className="ml-4 mt-8 mb-8">Navigate</h1>
                        <div className='absolute top-4 right-3 cursor-pointer' onClick={() => {
                            setStateNav(false)
                        }}><i className="far fa-times"></i></div>
                        <hr></hr>
                        <ul className='text-2xl mt-12 ml-4'>
                            <li
                                className={typePage === 'works' ? 'text-[#FF6464] cursor-pointer' : 'cursor-pointer'}
                                onClick={() => {
                                    navigate('../works')
                                }}>Works</li>
                            <li
                                className={typePage === 'blog' ? 'text-[#FF6464] cursor-pointer' : 'cursor-pointer'}
                                onClick={() => {
                                    navigate('../blog')
                                }}>Blog</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
            }
        </>


    )
}