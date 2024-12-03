'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import interest from '@/public/Quiz/optQuiz/Interest.png'
import { QuizButton } from './QuizButton'
import { ArrowRight } from "lucide-react";
import placeholderImage from '@/public/Quiz/placeholder.jpg'
import { Badge } from "@/src/components/ui/badge"


// this compoenent can be use as main option type of quiz or learning style technique card

type props = {
  title: string;
  desc: string;
  image: StaticImageData | string;
  buttonText?: string;
  type?: 'main' | 'learninigStyle'
  badgeText?: string;
}

export const QuizOptHorizontalContainer = ({ title, desc, image, buttonText, type = 'main', badgeText }: props) => {

  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className={`flex flex-col md:flex-row w-full bg-white p-4 gap-4 rounded-xl ${type === 'learninigStyle' ? 'justify-center items-center' : ''} `}>
      {/* Image Section */}
      <div className="flex-none md:w-1/4 flex justify-center items-center">
        <Image
          src={imgSrc}
          alt="Technique Illustration"
          width={200}
          height={200}
          className="object-contain"
          onError={() => setImgSrc(placeholderImage)}
        />
      </div>

      {/* Text and Response Section */}
      <div className="flex flex-col justify-between  ">
        <div>
          <h2 className={`text-xl font-bold  ${type === 'main' ? 'text-primary mb-1' : 'text-secondary '} `}>{title}</h2>
          <p  className={`rounded-full text-textprimary text-opacity-80 text-sm mb-2 ${type === 'main' ? 'hidden' : ''}`}>{badgeText}</p>
          <p className="text-base text-textprimary ">
            {desc}
          </p>
        </div>

        <div className={`flex justify-start md:justify-end ${type === 'main' ? '' : 'hidden'}`}>
          <QuizButton title={buttonText ? buttonText : 'Start Quiz'} rounded='full' icon={<ArrowRight />} type='rightIcon' />
        </div>

      </div>
    </div>
  )
}