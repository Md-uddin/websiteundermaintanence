import * as React from "react";

interface CompanyInfoProps {
  name: string;
  email: string;
  phone: string;
}

function CompanyInfo({ name, email, phone }: CompanyInfoProps) {
  return (
    <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:max-w-full text-black">
      <div className="flex-auto self-start">{name}</div>
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center">
          <div className="mr-2 font-bold">Email:</div>
          <a href="mailto:contact@crea8iveclick.com"> {email}</a>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-2 font-bold">Phone:</div>
          <a href="tel:+919581506305"> {phone}</a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="flex flex-col items-end px-14 pt-12 pb-20 w-full max-md:px-5 max-md:max-w-full bg-center bg-cover bg-no-repeat "
      style={{
        background: "url('bg.png')",
      }}
    >
      <CompanyInfo
        name="Crea8iveClick"
        email="contact@crea8iveclick.com"
        phone="+91 9581506305"
      />
      <h1 className="mt-80 mr-24 text-6xl text-right w-[958px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl ">
        Oops! This website is currently under construction!
      </h1>
      <p className="mt-9 mr-24 mb-80 font-light text-right max-md:mr-2.5 max-md:mb-10 ">
        Stay Tuned!
      </p>
      <iframe
        width="100%"
        height="750px"
        src="https://easeenterprises.zohobookings.in/portal-embed#/219560000000029016"
        // frameborder="0"
        // allowfullscreen=""
      >
        {" "}
      </iframe>
    </div>
  );
}
