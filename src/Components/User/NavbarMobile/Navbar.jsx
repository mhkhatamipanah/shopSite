import React from 'react'
import Link from 'next/link'

//icons
import { Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ChatIcon from '@mui/icons-material/Chat';
const cssMui = { padding: 0, color: 'var(--color-3)', minWidth: 0 }
const Navbar = () => {
    return (
        <div className='fixed w-full bottom-0 grid grid-cols-5 grid-row-reverse justify-center items-center border-t '>
            <Link href="/" className='w-full flex justify-center items-center'>
                <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                    حساب
                    <PersonIcon fontSize="small" />
                </Button>
            </Link>
            <Link href="/" className='w-full flex justify-center items-center'>
                <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                    چت
                    <ChatIcon fontSize="small" />
                </Button>
            </Link>
            <Link href="/" className='w-full flex justify-center items-center'>
                <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                    سبد خرید
                    <ShoppingCartIcon fontSize="small" />
                </Button>
            </Link>
            <Link href="/" className='w-full flex justify-center items-center'>
                <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                    دسته بندی
                    <DehazeIcon fontSize="small" />
                </Button>
            </Link>
            <Link href="/" className='w-full flex justify-center items-center'>
                <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                    خانه
                    <HomeIcon fontSize="small" />
                </Button>
            </Link>

        </div>
    )
}

export default Navbar