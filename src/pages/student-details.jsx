import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Users } from "../data/users";
import { UsersDetailsPerfil } from "../components/students/usersDetailsPerfil";

export const StudentsDetails = () => {
  const params = useParams();
  const foundUsers = Users.find((user) => user.id === Number(params.id));
  return (
    <>
      <Header />
      <main>
        {foundUsers ? (
          <UsersDetailsPerfil
            name={foundUsers.linkUrl}
            email={foundUsers.linkLabel}
            numero={foundUsers.numero}
          />
        ) : (
          "Details not found"
        )}
      </main>
      <Footer />
    </>
  );
};
