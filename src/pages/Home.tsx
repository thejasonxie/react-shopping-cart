import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const storeBtnClick = () => {
    navigate("/store");
  };

  return (
    <Container>
      <h1>Home</h1>
      <div>
        <p>Visit the store to start shopping.</p>
        <Button onClick={storeBtnClick}>Store</Button>
      </div>
    </Container>
  );
}
