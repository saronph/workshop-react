import { useState } from "react";
import { Button } from "../../components/Button";

export function State() {
  const [users, setUsers] = useState([
    {
      name: "José",
    },
  ]);

  const [newUser, setNewUser] = useState<string>("");

  function addUser(newName: string) {
    const usersUpdated = [
      ...users,
      {
        name: newName,
      },
    ];

    setUsers(usersUpdated);

    // setUsers((currentState) => {
    //   return [
    //     ...currentState,
    //     {
    //       name: newName,
    //     },
    //   ];
    // });
  }

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <h1 className="text-2xl">State</h1>

      <div>
        {users.map((user, index) => (
          <span key={index}>{user.name} - </span>
        ))}
      </div>

      <input
        className="border-2 p-2 border-gray-500 rounded-md"
        type="text"
        onChange={(e) => setNewUser(e.target.value)}
      />

      <div className="flex gap-4">
        <Button onClick={() => addUser(newUser)}>Add user</Button>
        <Button isReset onClick={() => setUsers([])}>
          Reset users
        </Button>
      </div>
    </div>
  );
}
