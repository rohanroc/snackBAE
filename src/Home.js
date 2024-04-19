import React from 'react'
import img1 from './snackbae-ig.png'
import img2 from './feedback-ig.png'
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BiSolidCoinStack } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { MdMenu } from "react-icons/md";

const Home = () => {
    return (
        <div className="flex md:block md:bg-gray-100">

            {/* Left menu bar  */}

            <div className="mt-10 flex flex-col w-[285px] h-[982px] text-center md:hidden">

                <div className="h-16 flex justify-center">
                    <img src={img1} alt='snackBAE' className='w-32 cursor-pointer'></img>
                </div>

                <div className='space-y-[420px] font-bold text-gray-600'>
                    <div className='flex flex-col space-y-8 mt-14'>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><RxDashboard /></span>
                            <span className='ml-5'>Dash Board</span>
                        </div>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><BiSolidFoodMenu /></span>
                            <span className='ml-5'>Menu</span>
                        </div>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><BiSolidCoinStack /></span>
                            <span className='ml-5'>Payments</span>
                        </div>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><GrAnnounce /></span>
                            <span className='ml-5'>Offers & Events</span>
                        </div>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><IoPersonSharp /></span>
                            <span className='ml-5'>Customers</span>
                        </div>
                        <div></div>
                    </div>

                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><IoSettingsOutline /></span>
                            <span className='ml-5'>Settings</span>
                        </div>
                        <div className='flex flex-row mx-8 items-center text-lg cursor-pointer'>
                            <span><IoIosLogOut /></span>
                            <span className='ml-5'>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payments getway */}
            <div className='md:overflow-hidden'>
                <Menu className='hidden md:block'>
                    <MenuHandler>
                        <Button className='hidden md:block md:text-black md:text-4xl md:mx-5 md:relative md:top-5'><MdMenu />
                        </Button>
                    </MenuHandler>
                    <MenuList className='border-none bg-white ml-2 p-5'>
                        <MenuItem className='text-lg'>Dash Board</MenuItem>
                        <MenuItem className='text-lg'>Menu</MenuItem>
                        <MenuItem className='text-lg'>Payments</MenuItem>
                        <MenuItem className='text-lg'>Offers & Events</MenuItem>
                        <MenuItem className='text-lg'>Customers</MenuItem>
                    </MenuList>
                </Menu>
                <div className='bg-gray-100'>
                    <div className='h-[112px] bg-[#FFD628] w-[1235px] mt-[98px] space-y-2 md:h-[100px] md:mt-[50px] md:w-full'>
                        <h2 className='text-2xl font-bold ml-16 pt-6 md:ml-5'>Settings</h2>
                        <p className='ml-16 md:ml-5'>Manage your account settings</p>
                    </div>
                    <div className='w-[1155px] h-[650px] bg-[#FFFFFF] m-auto rounded-lg md:h-[850px]'>
                        <div className='my-3 space-x-4 ml-10 md:ml-5'>
                            <NavLink to="/payout" className={({ isActive }) => `${isActive ? "text-white bg-[#004AAD]" : "text-balck"} border-2 px-5 py-2 hover:bg-[#004AAD] hover:text-white border-black rounded-xl font-bold my-6`}>
                                <button className='my-6'>Business Info</button>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-white bg-[#004AAD]" : "text-balck"} border-2 px-5 py-2 hover:bg-[#004AAD] hover:text-white border-black rounded-xl font-bold my-6`}>
                                <button className='my-6'>Payout Details</button>
                            </NavLink>
                        </div>

                        <hr className='w-[1140px] m-auto md:hidden'></hr>

                        <div className='ml-10 my-6 md:flex md:flex-col md:ml-5'>
                            <span className='mx-1.5 font-bold text-lg my-2'>Bank Transfer</span>
                            <div className='flex space-x-5 md:flex-col md:space-x-2'>
                                <div className='w-72 ml-2 mt-7'>
                                    <label for="email" class="block text-md font-semibold leading-6 text-gray-900">Account Number</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFD628] sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className='w-72 mt-7'>
                                    <label for="email" class="block text-md font-semibold leading-6 text-gray-900">IFSC Code</label>
                                    <div class="mt-2">
                                        <input id="IFSC" name="IFSC" type="number" autocomplete="IFSC" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFD628] sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-72 mt-7 ml-2'>
                                <label for="email" class="block text-md font-semibold leading-6 text-gray-900">Benificeiry Name</label>
                                <div class="mt-2">
                                    <input id="bn" name="bn" type="text" autocomplete="bn" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFD628] sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <hr className='w-[1140px] m-auto md:hidden'></hr>

                        <div className='ml-10 my-6 md:flex md:flex-col md:ml-5'>
                            <span className='mx-1.5 font-bold text-lg my-2'>Bhim UPI</span>
                            <div className='flex space-x-5 md:flex-col md:space-x-2'>
                                <div className='w-72 ml-2 mt-7'>
                                    <label for="email" class="block text-md font-semibold leading-6 text-gray-900">UPI ID</label>
                                    <div class="mt-2">
                                        <input id="UPI" name="UPI" type="text" autocomplete="UPI" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFD628] sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className='w-72 mt-7'>
                                    <label for="email" class="block text-md font-semibold leading-6 text-gray-900">UPI Number</label>
                                    <div class="mt-2">
                                        <input id="UPIN" name="UPIN" type="number" autocomplete="UPIN" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFD628] sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className='border-2 px-4 py-1.5 bg-[#004AAD] text-white border-[#004AAD] rounded-xl my-6 ml-10 md:ml-5'>Save Change</button>
                    </div>

                    {/* fotter feedback */}

                    <div className='w-[1155px] h-[190px] bg-[#FFFFFF] m-auto rounded-lg border-black border-2 my-8 flex md:h-28 md:w-[90%]'>
                        <div className='ml-14 text-center mt-5 md:ml-3'>
                            <img src={img2} alt='feedback' className='w-60'></img>
                        </div>
                        <div className='my-16 ml-2 md:my-6'>
                            <p className='text-lg font-semibold md:text-[10px] md:leading-3'>Help Us to make Snackbae better ! Share your feedbacks and request features that fits best for your Business</p>
                            <span className='text-lg font-semibold text-blue-600 underline cursor-pointer md:text-[10px]'>Give Feedback</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
