import React, { useState } from 'react';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Front = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const transition = { type: 'spring', duration: 3 };

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden" id="home">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <Header />
                
                <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                    <div className="space-y-8">
                       

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold">
                                <span className="text-white">Transform Your</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                                    Ideal Body
                                </span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                In here we will help you to shape and build your ideal body and live up your life to fullest
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">+100</h3>
                                <p className="text-orange-500">Expert Coaches</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">+1000</h3>
                                <p className="text-orange-500">Members Joined</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">+50</h3>
                                <p className="text-orange-500">Fitness Programs</p>
                            </div>
                        </div>

                        <div className="relative">
                            <button onClick={() => setShowDropdown(!showDropdown)} 
                                className="px-8 mr-3 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                                Get Started
                            </button>
                           

                            {showDropdown && (
                                <div className="relative bg-gray-800 rounded-lg shadow-xl p-2 z-50 mt-2">
                                    <button onClick={() => navigate("/member-signup")} 
                                        className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500 rounded transition-colors duration-300">
                                        Join as Member
                                    </button>
                                    <button onClick={() => navigate("/trainer-signup")}
                                        className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500 rounded transition-colors duration-300">
                                        Join as Trainer
                                    </button>
                                    <button onClick={() => navigate("/login")}
                                        className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500 rounded transition-colors duration-300">
                                        Login
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        

                        <motion.img
                            initial={{ right: "11rem" }}
                            whileInView={{ right: "1rem" }}
                            transition={transition}
                            src={hero_image}
                            alt="hero"
                            className="relative z-20 max-w-md mx-auto"
                        />

                        <motion.img
                            initial={{ right: "20rem" }}
                            whileInView={{ right: "15rem" }}
                            transition={transition}
                            src={hero_image_back}
                            alt="hero background"
                            className="absolute top-0 right-0 -z-10 opacity-50"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;