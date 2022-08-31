import { BsFacebook } from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';

export const Footer = () => {
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Menu</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">Buy 1 get 3</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">Kids Box</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">My box</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">LIMO &amp; COMBO</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">Pizza</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">About Us</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Introduction</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Our Vision and Mission</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Core Values</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Food Safety</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">STORE LOCATOR</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">North</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Central</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">South</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact Us</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="https://facebook.com" className="hover:opacity-60">
                            <BsFacebook />
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://instagram.com" className="hover:opacity-60">
                            <FiInstagram />
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://gmail.com" className="hover:opacity-60">
                            <AiOutlineMail />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 self-center bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2022 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}