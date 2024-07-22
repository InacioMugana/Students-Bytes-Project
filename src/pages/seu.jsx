import React from "react";
import { Link } from "react-router-dom"; // Certifique-se de importar o Link do React Router
import { Info, Trash } from "@phosphor-icons/react"; // Substitua pelo caminho correto dos componentes Info e Trash
<p className="font-medium text-xl">{user?.linkLabel}</p>;
if (!user) {
  return null; // Ou renderize algo adequado se `user` não estiver disponível
}

export const SeuComponente = ({ user, handleDeleteUser, index }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      key={index}
      className="flex bg-slate-600 rounded-full shadow shadow-slate-500 p-10 items-center w-full justify-between mt-7"
      style={{
        transition: "background-color 0.3s, box-shadow 0.3s",
        backgroundColor: hovered ? "#485863" : "#374151",
        boxShadow: hovered
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          : "0 0 transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="font-medium text-xl">{user.linkLabel}</p>
      <div className="flex gap-4">
        <Link
          to={`/student-details/${user.id}`}
          className="hover:text-blue-500"
        >
          <Info size={24} />
        </Link>
        <Trash
          size={24}
          className="cursor-pointer"
          style={{
            color: hovered ? "red" : "black",
            transition: "color 0.3s ease",
          }}
          onClick={() => handleDeleteUser(user.linkUrl)}
        />
      </div>
    </div>
  );
};
