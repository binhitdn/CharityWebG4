import React from "react";

function FAQ() {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default FAQ;
