import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const StudentsDetails = () => {
  const params = useParams();
  const foundUsers = Users.find((user) => user.id === Number(params.id));
  return (
    <>
      <Header />
      <main>
        {foundUsers ? (
          <UsersDetailsPerfil
            name={foundUsers.name}
            bairro={foundUsers.bairro}
          />
        ) : (
          "Produto não encontrado"
        )}
      </main>
      <Footer />
    </>
  );
};
