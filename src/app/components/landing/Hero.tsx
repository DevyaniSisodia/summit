"use client";
import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";

const data = [
  {
    category: "Football",
    title: "Take your shot!",
    src: "https://i.pinimg.com/736x/d0/10/6d/d0106ddf2c95b88d393655b45a693221.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Football.
        </p>
      </div>
    ),
  },
  {
    category: "Volleyball",
    title: "Keep it alive!",
    src: "https://i.pinimg.com/736x/c4/c3/a8/c4c3a8286c6085cf5592cc0ee9712242.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Volleyball.
        </p>
      </div>
    ),
  },
  {
    category: "Badminton",
    title: "Smash it!",
    src: "https://i.pinimg.com/736x/04/0d/b0/040db07ec90f8c3cba3346ca03abe2b9.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Football.
        </p>
      </div>
    ),
  },
  {
    category: "Swimming",
    title: "Hold your breath!",
    src: "https://i.pinimg.com/736x/50/3c/5f/503c5f974fd4a6468588a29ea4894bd4.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Volleyball.
        </p>
      </div>
    ),
  },
  {
    category: "Football",
    title: "Take your shot!",
    src: "https://i.pinimg.com/736x/d0/10/6d/d0106ddf2c95b88d393655b45a693221.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Football.
        </p>
      </div>
    ),
  },
  {
    category: "Volleyball",
    title: "Spike it!",
    src: "https://cdn.dribbble.com/users/1092116/screenshots/3267154/media/1deb89dc0038bff0caeed6bfbdd38b10.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Volleyball.
        </p>
      </div>
    ),
  },
  {
    category: "Football",
    title: "Take your shot!",
    src: "https://i.pinimg.com/736x/d0/10/6d/d0106ddf2c95b88d393655b45a693221.jpg",
    content: (
      <div className="bg-[#24231f] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-[#eff4c6] text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Register now for Football.
        </p>
      </div>
    ),
  },
];

const Hero = () => {
  const cards = data.map((item, index) => (
    <Card key={index} card={item} index={index} />
  ));

  return (
    <section className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-2xl md:text-5xl font-bold text-[#eff4c6] font-sans px-4">
        Choose Your Sport.
      </h2>
      <Carousel items={cards} initialScroll={0} />
    </section>
  );
};

export default Hero;
