import "./jsx.css";

export function Jsx() {
  const isAdmin = false;

  const users = [
    {
      id: 1,
      name: "José",
    },
    {
      id: 2,
      name: "Maria",
    },
    {
      id: 3,
      name: "João",
    },
  ];

  function showUsers() {
    const userElement = users.map((user) => (
      <span key={user.id}>{user.name}</span>
    ));

    return userElement;
  }

  return (
    <>
      <div className="jsx-container">
        <h1 className="title" style={{ fontSize: 48 }}>
          JSX
        </h1>
      </div>
      <h2>O usuário é admin?</h2>
      <h3 className="title">{isAdmin ? "Sim" : "Não"}</h3>

      <div className="users-container">
        {/* {users.map((user) => (
          <span key={user.id}>{user.name}</span>
        ))} */}
        {/* {showUsers()} */}
      </div>
    </>
  );
}
