import { Link, useSearchParams } from "react-router-dom";
import {
  MagnifyingGlass,
  Trash,
  Info,
  PlusCircle,
  XCircle,
} from "@phosphor-icons/react";
import { Header } from "../components/header";
import { Users as initialUsers } from "../data/users";
import { useState } from "react";
import { Footer } from "../components/footer/footer";
export const Students = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [isFormVisible, setFormVisible] = useState(false);
  const [isDataBoxVisible, setDataBoxVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensagem: "",
  });
  const [users, setUsers] = useState(initialUsers);
  const handleSearchChange = (event) => {
    setSearchParams({ search: event.target.value });
  };
  const filteredUsers = users.filter((user) =>
    user.linkLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const handleDeleteUser = (linkUrl) => {
    setUsers(users.filter((user) => user.linkUrl !== linkUrl));
  };
  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      linkUrl: formData.name.toLowerCase().replace(/\s+/g, "-"),
      linkLabel: formData.name,
    };
    setUsers([...users, newUser]);
    setDataBoxVisible(true);
  };
  const handleBoxClose = () => {
    setDataBoxVisible(false);
    setFormData({ name: "", email: "", mensagem: "" });
    setFormVisible(false);
  };
  return (
    <>
      <Header />{" "}
      <div className="bg-slate-400">
        {" "}
        <div className="flex justify-center">
          {" "}
          <div className="flex items-center  bg-slate-600 rounded-full p-3 w-96 shadow shadow-white mt-3 ml-3">
            {" "}
            <input
              type="seach"
              placeholder="seach..."
              className="outline-none w-full pl-7 text-gray-800 bg-transparent h-10 rounded-l-full focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearchChange}
            />{" "}
            <MagnifyingGlass size={24} className="text-gray-400 ml-2" />{" "}
          </div>{" "}
          <PlusCircle
            size={32}
            className="mt-6 ml-4 cursor-pointer"
            onClick={toggleFormVisibility}
          />{" "}
        </div>{" "}
        <div className="flex justify-center mt-7 ml-3">
          {" "}
          <div className="w-[50%]">
            {" "}
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex bg-slate-600 rounded-md shadow shadow-slate-500 p-10 items-center w-full justify-between mt-7"
              >
                {" "}
                <p className="font-medium text-xl">{user.linkLabel}</p>{" "}
                <div className="flex gap-4">
                  {" "}
                  <Link to={`/user-details/${user.linkUrl}`}>
                    <Info size={24} />{" "}
                  </Link>{" "}
                  <Trash
                    size={24}
                    className="cursor-pointer"
                    style={{ color: "red" }}
                    onClick={() => handleDeleteUser(user.linkUrl)}
                  />{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          {isFormVisible && (
            <div className="w-[50%] ml-3">
              {" "}
              <div className="bg-sky-blue-100 rounded-md shadow shadow-slate-500 p-10 items-center mt-9 ml-8 flex flex-col justify-between w-full max-w-4xl h-[30rem]">
                {" "}
                <div className="flex mt-5 w-full">
                  {" "}
                  <form className="w-full" onSubmit={handleFormSubmit}>
                    {" "}
                    <div className="m-4">
                      {" "}
                      <label htmlFor="name" className="block">
                        Nome{" "}
                      </label>{" "}
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={formData.name}
                        onChange={handleFormChange}
                      />{" "}
                    </div>{" "}
                    <div className="m-4">
                      {" "}
                      <label htmlFor="email" className="block">
                        Email{" "}
                      </label>{" "}
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={formData.email}
                        onChange={handleFormChange}
                      />{" "}
                    </div>{" "}
                    <div className="m-4">
                      {" "}
                      <label htmlFor="mensagem" className="block">
                        Biografia{" "}
                      </label>{" "}
                      <textarea
                        id="mensagem"
                        className="w-full h-36 p-2 border border-black rounded-md"
                        value={formData.mensagem}
                        onChange={handleFormChange}
                      ></textarea>{" "}
                    </div>{" "}
                    <button className="bg-white text-black  border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300 ml-5">
                      Enviar {" "}
                    </button>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
        {isDataBoxVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            {" "}
            <div className="bg-white rounded-md p-8 shadow-lg relative h-[15rem] w-[30rem]">
              {" "}
              <XCircle
                size={24}
                weight="regular"
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleBoxClose}
              />{" "}
              <h2 className="text-xl font-bold mb-4">Dados do Estudante</h2>{" "}
              <p className="mt-2">
                <strong>Nome:</strong> {formData.name}{" "}
              </p>{" "}
              <p className="mt-2">
                <strong>Email:</strong> {formData.email}{" "}
              </p>{" "}
              <p className="mt-2">
                <strong>Biografia:</strong> {formData.mensagem}{" "}
              </p>{" "}
            </div>{" "}
          </div>
        )}{" "}
      </div>
      <Footer />{" "}
    </>
  );
};
