"use client"
import { Button } from '@mui/material';
import React from 'react'

import Drawlerbottom from '@/Components/User/Drawler/Drawlerbottom'

import TuneIcon from '@mui/icons-material/Tune';
const SearchBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
         <Drawlerbottom setOpen={setOpen} open={open}/>
            <div className='flex justify-center items-center m-3 gap-2'>
             
                <form className="rtl ">

                    <div className="relative flex justify-center items-center">
                        <div className="absolute inset-y-0 top-[-2px] right-[0.85rem] flex items-center pl-3 pointer-events-none ">
                            <svg
                                className=" w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-2 pl-[42px] pr-9 text-sm text-gray-900 border border-gray-300 border-solid rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-1"
                            placeholder="جست و جو..."
                        />


                    </div>
                </form>
                <div className='w-10'>
                    <Button
                        onClick={() => {
                            setOpen(true)
                        }}
                        sx={{
                            padding: "8px",
                            borderRadius: "100%",
                            minWidth: "30px",
                            marginRight: "-40px",
                        }}
                        variant="contained"
                    >
                        <TuneIcon/>
                    </Button>
                </div>
            </div>

        </>
    )
}

export default SearchBar