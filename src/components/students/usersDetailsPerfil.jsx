import { Link } from "react-router-dom";

export const UsersDetailsPerfil = ({ name, email, numero }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl mb-4">User Details</h1>
        <p className="mb-2">
          <strong>Name:</strong> {name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Number:</strong> {numero}
        </p>
        <div className="flex justify-center items-center">
          <Link to="/students">
            {" "}
            <button className="text-white text-sm border-black border-spacing-4 shadow-lg rounded-2xl bg-black/70 w-40 h-10 hover:bg-sky-blue-200  hover:transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out hover:w-44 mt-11 hover:mt-12 hover:shadow-2xl hover:rounded-3xl">
              Back To students list
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
