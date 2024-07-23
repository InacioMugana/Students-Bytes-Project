import React, { useState } from "react";

export const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ ...initialFormData }); // Limpa o formulário
  };

  return (
    <div
      style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "1px" }}
      className="flex justify-center items-center h-screen flex flex-col items-center justify-center"
    >
      {" "}
      <h1 className="text-white text-2xl font-bold mb-4">Call us</h1>
      <div className="flex justify-center items-center border rounded-2xl border-white z-10 bg-purple-bytes p-4 mt-10 mb-10">
        {/* Informações de contato à esquerda */}
        <div className="flex flex-col flex-1 pr-4">
          <p className="text-white mb-5">Address: Eduardo Mondlane </p>
          <p className="text-white mb-5">Neighborhood: Central</p>
          <p className="text-white mb-5">Cell: 84 00 00 111</p>
          <p className="text-white mb-5">Email: bytesStudents@gmail.com</p>
        </div>

        {/* Formulário à direita */}
        <form
          className="flex flex-col flex-1 space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Escreva aqui o seu nome"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-14 border-b-2 bg-slate-600 bg-purple-bytes text-white outline-none placeholder-white px-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-14 border-b-2 bg-slate-600 bg-purple-bytes text-white outline-none placeholder-white px-4"
          />
          <textarea
            name="message"
            cols="20"
            rows="5"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-20 border-b-2 bg-slate-600 bg-purple-bytes text-white outline-none placeholder-white px-4"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-slate-600 hover:text-white transition-colors duration-300 ml-5"
          >
            Send
          </button>
        </form>

        {/* Pop-up */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-purple-bytes p-6 rounded-lg shadow-lg">
              <div className="flex justify-end">
                <button onClick={handleClosePopup} className="text-white">
                  &times;
                </button>
              </div>
              <p className="text-white mb-3">Nome: {formData.name}</p>
              <p className="text-white mb-3">Email: {formData.email}</p>
              <p className="text-white mb-3">Mensagem: {formData.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
