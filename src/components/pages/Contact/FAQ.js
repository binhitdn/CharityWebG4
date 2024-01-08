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
              If we can develop one village, we will also find a way to develop other villages. Therefore, I find this project to develop a village very visionary and sustainable. I want to understand more about specific programs so I can arrange to participate in certain programs.
              </summary>
              <div className="px-4 pb-4">
                <p>
                Thank you for your great vision.
                Yes, all of us are very excited to proceed with the project. We believe in our effort and strong cooperation and love for the development of the people and the village. 
                The project has many programs. These are practical training programs, suitable to the human and natural potential of the region. For the new Pà-cang village, agriculture, green tourism and services are very potential. Therefore, training programs will focus on:
                •	Developing sustainable agriculture and protecting the environment
                •	Develop life skills for children
                •	Improve professional skills, products and services
                •	Develop business skills
                •	Develop communication and foreign language skills
                Please call 0962 414 125 or email dinhdongphuong@gmail.com for all information and registering to participate.

                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                If I participate, where will I stay?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Depends on the specific program. If the program requires participation in practical training at the workplace, we will stay in the village. The organizers will make arrangements for you.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                I would like to contribute some ideas to the project. Who do I contact?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Thank you for your sincere advice. Please call 0962 414 125 or email dinhdongphuong@gmail.com to Ms. Phuong.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                I want to mobilize donations for the project. Who do I contact?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Thank you for your sincere support and cooperation. Please call 0962 414 125 or email dinhdongphuong@gmail.com to Ms. Phuong for all information on the projects.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Does the project receive monetary sponsorship?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Each project program has detailed content posted on the website. If the program needs financial support, please contact us by email dinhdongphuong@gmail.com or phone number 0962 414 125. You can also transfer money to Smile Eye Charity's account.
                  Account number: Techcombank, 22296699, Smile Eye Charity
                  We will get back to you as soon as we confirm your support.
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
