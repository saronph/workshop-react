import { useNavigate } from "react-router-dom";
import { ButtonsContainer, Container, DashboardButton, Title } from "./styles";

export function Dashboard() {
  const navigate = useNavigate();

  const buttons = [
    {
      id: 1,
      name: "Dashboard",
      route: "/",
    },
    {
      id: 2,
      name: "JSX",
      route: "/jsx",
    },
    {
      id: 3,
      name: "Tailwind",
      route: "/tailwind",
    },
    {
      id: 4,
      name: "Typescript",
      route: "/typescript",
    },
    {
      id: 5,
      name: "Class",
      route: "/class",
    },
    {
      id: 6,
      name: "Estados",
      route: "/state",
    },
    {
      id: 7,
      name: "Hooks",
      route: "/hooks",
    },
  ];
  return (
    <Container>
      <Title>Telas</Title>

      <ButtonsContainer>
        {buttons.map((button) => (
          <DashboardButton
            key={button.id}
            $typeNumber={button.id}
            onClick={() => navigate(button.route)}
          >
            {button.name}
          </DashboardButton>
        ))}
      </ButtonsContainer>
    </Container>
  );
}
