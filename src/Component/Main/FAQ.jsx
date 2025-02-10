import React from "react";

const FAQ = () => {
  return (
    // <div className="w-11/12 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    //   <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">
    //     Wanna Know About Our Website?
    //   </h2>
    //   <div className="space-y-4">
    //     {/* FAQ Item 1 */}
    //     <div className="collapse collapse-arrow bg-white border border-gray-300 rounded-lg shadow-md">
    //       <input type="radio" name="faq-accordion" defaultChecked />
    //       <div className="collapse-title text-lg font-semibold text-gray-700">
    //         Is This a Website About Creating Users Assignments?
    //       </div>
    //       <div className="collapse-content text-gray-600">
    //         <p>Yeah! This platform allows you to manage and share assignments seamlessly.</p>
    //       </div>
    //     </div>

    //     {/* FAQ Item 2 */}
    //     <div className="collapse collapse-arrow bg-white border border-gray-300 rounded-lg shadow-md">
    //       <input type="radio" name="faq-accordion" />
    //       <div className="collapse-title text-lg font-semibold text-gray-700">
    //         Is This Website Suitable for All Students?
    //       </div>
    //       <div className="collapse-content text-gray-600">
    //         <p>Yeah! Why not? This platform is designed for everyone to use.</p>
    //       </div>
    //     </div>

    //     {/* FAQ Item 3 */}
    //     <div className="collapse collapse-arrow bg-white border border-gray-300 rounded-lg shadow-md">
    //       <input type="radio" name="faq-accordion" />
    //       <div className="collapse-title text-lg font-semibold text-gray-700">
    //         Is This Only Suitable for University Students?
    //       </div>
    //       <div className="collapse-content text-gray-600">
    //         <p>No! Anyone can use this platform regardless of their level of education.</p>
    //       </div>
    //     </div>

    //     {/* FAQ Item 4 */}
    //     <div className="collapse collapse-arrow bg-white border border-gray-300 rounded-lg shadow-md">
    //       <input type="radio" name="faq-accordion" />
    //       <div className="collapse-title text-lg font-semibold text-gray-700">
    //         Can We Share Anything Beneficial for Students?
    //       </div>
    //       <div className="collapse-content text-gray-600">
    //         <p>Yes, you can! Sharing knowledge and resources is highly encouraged.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-11/12 mx-auto p-6 my-10 bg-pink-50 rounded-lg shadow-xl ">
      <h2 className="text-4xl text-center font-bold text-pink-600 mb-8">
        Wanna Know About Our Website?
      </h2>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="collapse collapse-arrow bg-white border border-pink-300 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-pink-700 hover:text-pink-500 transition">
            Is This a Website About Creating Users Assignments?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yeah! This platform allows you to manage and share assignments
              seamlessly.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="collapse collapse-arrow bg-white border border-pink-300 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-pink-700 hover:text-pink-500 transition">
            Is This Website Suitable for All Students?
          </div>
          <div className="collapse-content text-gray-600">
            <p>Yeah! Why not? This platform is designed for everyone to use.</p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="collapse collapse-arrow bg-white border border-pink-300 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-pink-700 hover:text-pink-500 transition">
            Is This Only Suitable for University Students?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              No! Anyone can use this platform regardless of their level of
              education.
            </p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="collapse collapse-arrow bg-white border border-pink-300 rounded-lg shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-pink-700 hover:text-pink-500 transition">
            Can We Share Anything Beneficial for Students?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, you can! Sharing knowledge and resources is highly
              encouraged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
