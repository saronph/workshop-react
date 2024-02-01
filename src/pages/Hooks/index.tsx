import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useUser } from "../../contexts/user";
import { api } from "../../services/api";

export function Hooks() {
  const [count, setCount] = useState(0);

  const { user, updateUser } = useUser();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const getUser = useCallback(async () => {
    const response = await api.get("/users/saronph");
    console.log(response.data);
  }, []);

  useEffect(() => {
    console.log(`O valor de 'count' é: ${count}`);

    return () => {
      // console.log("Componente desmontado");
    };
  }, [count]);

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <h1 className="text-2xl">Hooks</h1>

      {/* useEffect */}
      {/* <span>Valor count: {count}</span>
      <Button onClick={() => incrementCount()}>Adicionar</Button> */}

      {/* useContext */}
      {/* <div className="flex flex-col">
        <span>Nome user: {user.name}</span>
        <span>Cargo: {user.role}</span>
      </div>

      <Button onClick={() => updateUser("role", "user")}>Alterar user</Button> */}

      {/* Req. Api */}
      <Button onClick={getUser}>Buscar user</Button>
    </div>
  );
}
