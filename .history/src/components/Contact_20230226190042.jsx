import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1028px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
            Contact
        </h1>
        <form action="" method="POST" encType="multipart/form-data" >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-200 " type="text" name="name" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-200 " type="text" name="phone" />
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="">Email</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-200 " type="email" name="email"/>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="">Subject</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-200 " type="text" name="subject"/>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="">Message</label>
                <textarea className="border-2 rounded-lg p-3 flex border-gray-200 " rows='10' name="message"></textarea>
            </div>
            <button className="bg-[]" type="submit">
                Send Message
            </button>
        </form>
    </div>
  )
};

export default Contact;
