import { LuGalleryHorizontal } from "react-icons/lu";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";

const ViewAssignment = () => {

  const location = useLocation();
  const {assign} = location.state || {};

 

  console.log(assign,'from view');
  const {
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
  _id} = assign || {}


  return (
    <div className="p-6 flex justify-center items-center">
      <div className="card lg:card-side bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <figure className="lg:w-1/2">
          <img
            src={thumbnail}
            alt="Assignment Thumbnail"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body lg:w-1/2 p-6 bg-gray-100">
          <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
           {title}
          </h2>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Title:</span>{title}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Marks:</span> {marks}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Difficulty:</span> {difficulty}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Due Date:</span> {dueDate}
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            <span className="font-semibold">Description:</span> {description}
          </p>

          <div className="card-actions">
            <NavLink to={`/take`}  state={{ assign }}>
              <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">
                Take Assignment
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
