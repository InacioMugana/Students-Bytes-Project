export const UsersDetailsPerfil = ({ name, email, numero }) => {
  return (
    <div>
      <h1>detalhes do Usuario</h1>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
      <p>numero:{numero}</p>
    </div>
  );
};
