const Assignment = () => {
    return (
      <div className="my-12 ">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome to the Assignment Hub
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3">
            {/* Card 1 */}
            <div className="card bg-blue-50 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-blue-700">Create Assignments</h2>
                <p>
                  Effortlessly create detailed assignments with customizable templates tailored to your academic needs. Save time and focus on learning!
                </p>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="card bg-green-50 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-green-700">Track Progress</h2>
                <p>
                  Monitor assignment submissions and progress with real-time updates, ensuring a smooth workflow for students and educators.
                </p>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="card bg-yellow-50 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-yellow-700">Collaborate Seamlessly</h2>
                <p>
                  Enable students and educators to collaborate effectively with shared resources and discussion forums, fostering a vibrant learning community.
                </p>
              </div>
            </div>
  
            {/* Card 4 */}
            <div className="card bg-red-50 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-red-700">Access Anywhere</h2>
                <p>
                  Enjoy the flexibility of accessing assignments and resources from any device, anytime, anywhere. Learning made truly accessible!
                </p>
              </div>
            </div>
          </div>
  
          {/* About Us Section */}
          <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">About Us</h3>
            <p className="text-gray-700 text-justify">
            
              An intuitive platform for creating, sharing, and managing assignments, designed for students and educators. Simplify collaboration, track progress, and foster a productive learning environment with user-friendly tools and seamless accessibility. Empower educators to provide personalized feedback, helping students grow and excel in their academic journey. Facilitate seamless communication and resource sharing to promote teamwork and innovation. Our platform adapts to the unique needs of users, ensuring a tailored experience that enhances productivity and inspires learning. 
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Assignment;
  