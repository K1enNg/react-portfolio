import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9bf545ca-b05e-4fde-8045-63f4d8fbc05f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
        <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Hit me up :)</h1>
            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <a href="#" className='my-4 border-b'>
                    <p>{CONTACT.email}</p>
                </a>
            </div>
            <div className="contact-form w-full mt-4">
            <form onSubmit={onSubmit}>
            <ul className="list-none p-0 m-0">
                <li className="flex items-center mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border-0 bg-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                />
                </li>
                <li className="flex items-center mb-4">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border-0 bg-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                />
                </li>
                <li className="mb-4">
                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full border-0 bg-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                />
                </li>
                <li className="mb-4">
                <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className="w-full border-0 bg-black text-white px-4 py-2 rounded-md min-h-48 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                />
                </li>
                <li className="flex justify-end">
                <input
                    type="submit"
                    className="flat-button text-yellow-500 font-bold hover:opacity-75 transition ease-in-out duration-150 py-2 px-4 rounded-md border border-yellow-500"
                    value="SEND"
                />
                </li>
            </ul>
            </form>
        </div>
        </div>
        <div className="container contact-page flex flex-col items-center">
        
      {result && <p className="text-center">{result}</p>}
    </div>
    </>
  )
}
export default Contact