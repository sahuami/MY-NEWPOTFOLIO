
'use client'

import { Github, Linkedin, Mail, Twitter, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from 'next/image'

const Footer = () => {
  const [textColors, setTextColors] = useState([
    'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500', 'text-pink-500'
  ])
  const [imageRotation, setImageRotation] = useState(0)

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColors(prev => [...prev.slice(1), prev[0]])
    }, 2000)

    const rotationInterval = setInterval(() => {
      setImageRotation(prev => (prev + 5) % 360)
    }, 100)

    

    return () => {
      clearInterval(colorInterval)
      clearInterval(rotationInterval)
    }
  }, [])

  

  const socialLinks = [
    { icon: Github, href: "https://github.com/sahuami", color: "text-purple-500", hoverBg: "hover:bg-purple-100/10" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amit-sahu-39387a262", color: "text-blue-500", hoverBg: "hover:bg-blue-100/10" },
    { icon: Twitter, href: "https://twitter.com/sahuami2000", color: "text-sky-500", hoverBg: "hover:bg-sky-100/10" },
    { icon: Mail, href: "mailto:sahuami2000@gmail.com", color: "text-red-500", hoverBg: "hover:bg-red-100/10" },
    // { icon: Users, href: "#", color: "text-green-500", hoverBg: "hover:bg-green-100/10" },
  ]

  return (
    <footer className="w-full mt-12 overflow-hidden border-t bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300">
      <div className="container w-11/12 mx-auto px-4 py-8 overflow-hidden">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Profile Section */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-4 relative group w-[100px] h-[100px] overflow-hidden">
              <Image
                src="/images/businessdev/AmitPhoto.png"
                alt="Aniruddha Adak"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover border-4 border-primary shadow-lg transition-all duration-300"
                style={{ transform: `rotate(${imageRotation}deg)` }}
              />
            </div>

            {[
              `© ${new Date().getFullYear()}. All rights reserved.`,
              "Created by AMIT SAHU",
              "Phone: +917029155691",
              "Email: aniruddhaadak80@gmail.com"
            ].map((text, index) => (
              <p
                key={index}
                className={`mt-1 text-sm font-medium ${textColors[index % textColors.length]}  hover:scale-105 transform`}
              >
                {text.startsWith('Phone:') ? (
                  <>Phone: <a href="tel:+917029155691" className="hover:underline hover:text-primary">+918700851891</a></>
                ) : text.startsWith('Email:') ? (
                  <>Email: <a href="mailto:aniruddhaadak80@gmail.com" className="hover:underline hover:text-primary">sahuami2000@gmail.com</a></>
                ) : text}
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4 flex-wrap justify-center">
              {socialLinks.map(({ icon: Icon, href, color, hoverBg }, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className={`group transition-all duration-300 transform hover:scale-105 ${color} ${hoverBg}`}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" className="relative">
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping bg-current"></span>
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-current blur-sm"></span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
