"use client";
import React from "react";
import Button from "modules/common/components/button"
import Image from "next/image";
import Link from "next/link";

export default function ContactTemplate() {
  return (
    <section className="bg-white text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <h3 className="text-2xl mb-4">Discover the Art of Digital Creation</h3>
            <p className="mb-4">
              At the heart of our digital print business lies a passion for transforming artistic visions into tangible
              prints. We specialize in high-quality digital prints that capture the essence of creativity while
              contributing to a greener planet. Our approach promotes environmentally friendly practices by enabling
              printing on demand, reducing waste and unnecessary production.
            </p>
            <p className="mb-4">
              Our mission transcends beyond mere aesthetics; it's about creating a sustainable future where art thrives
              in harmony with our environment. Every digital print is a testament to this commitment, crafted with
              precision and care to bring you a piece of art that is both stunning and eco-conscious.
            </p>
            <p className="mb-4">
              Innovation is at our core. We recognize the evolving landscape of art and technology, which is why we're
              excited to introduce our collaboration with TestIngal. This platform empowers you to generate your own
              art, blending your creative ideas with advanced AI technology. It's an opportunity to explore, experiment,
              and create unique pieces that resonate with your personal style and story.
            </p>
            <p className="mb-4">
              Join us in this journey of artistic exploration and environmental stewardship. Whether it's through our
              curated collection of digital prints or your own creations on Printinc, we're here to bring your artistic
              vision to life, sustainably and beautifully.
            </p>
            <div className="text-center mt-6">
              
              <Button className="mt-2" variant="primary">
              <Link href="https://ai.printinc.shop/">
                Printinc AI
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt="Artistic digital creation"
              className="max-w-full h-auto"
              height="400"
              src="/cta_six.png"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          </div>
          </div>
       
 <div className="container mx-auto px-6 py-12">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     <div>
       <h3 className="text-2xl mb-4">Understanding Paper and Printing</h3>
       <p className="mb-4">
              While we focus on digital goods, understanding the physical medium is essential for those who wish to bring digital art into the tangible world. Selecting the right paper for your digital prints is a crucial step in the artistic process, as it significantly affects the final appearance and feel of the artwork.
            </p>
            <p className="mb-4">
              Various paper types could be used for the fine art printing, each with unique qualities and suited for different artistic styles and preferences. From Alpha-Cellulose Papers, ideal for fine art prints with their durability and matte finish, to Cotton Rag Papers that offer depth and character for fine art reproductions. We also recommend RC Photo Papers for a glossy, satin finish and excellent scuff resistance.
            </p>
            <p className="mb-4">
              The weight, texture, and finish of the paper play an integral role in the outcome of the print. Whether you're looking for a lightweight paper for everyday prints or a heavy, textured paper that emulates the feel of original artwork, we guide you in making the right choice to ensure your digital creation is displayed at its best.
            </p>
            <p className="mb-4">
              We believe in empowering our customers with knowledge, allowing them to make informed decisions about their digital art printing. Whether you opt for our digital prints or decide to print on your own, we're committed to providing the guidance and resources you need.
            </p>
                   </div>
       </div>
       </div>
       </section>
  )
}

