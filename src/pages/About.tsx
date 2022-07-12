import { Container, Button } from "react-bootstrap";

export function About() {
  return (
    <Container>
      <h1>About</h1>
      <div>
        <p>
          Shopping cart built using react (context and useLocalStorage hook),
          typescript, and bootstrap.
        </p>
        <p>
          This project was completed by following WebDevSimplified's tutorial at{" "}
          <a
            href="https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified"
            target="_blank"
          >
            https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified
          </a>
        </p>
        <p>
          You can checkout the github repo for this project here:{" "}
          <a
            href="https://github.com/thejasonxie/react-shopping-cart"
            target="_blank"
          >
            https://github.com/thejasonxie/react-shopping-cart
          </a>
        </p>
      </div>
    </Container>
  );
}
