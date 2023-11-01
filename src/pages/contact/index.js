import React from "react";

function Contact() {
  return (
    <div>
      <section className="dark:bg-green-400 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is a Payment Gateway?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  neque in fugiat magni, quas animi enim veritatis deleniti ex.
                  Impedit.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  aspernatur quae, eos explicabo odit minima libero veniam
                  similique quibusdam doloribus facilis ipsa accusantium vel
                  maiores corrupti! Libero voluptate a doloribus?
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What platforms does ACME payment gateway support?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure,
                  voluptatibus autem eaque unde possimus quae.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Does ACME provide international payments support?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure,
                  voluptatibus autem eaque unde possimus quae.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure,
                  voluptatibus autem eaque unde possimus quae.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Need help? Send us a message and we will get back to you as soon as
          </p>
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="binh@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 text-white transition duration-200"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
