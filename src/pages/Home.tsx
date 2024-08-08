import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p className="version">
        <strong>Version:</strong>{" "}
        <code>{import.meta.env.VITE_APP_VERSION ?? "0.0.0"}</code>
      </p>
      <p>Pokemon:</p>
      <ul>
        <li>
          <Link to="./pokemon/ditto">Ditto</Link>
        </li>
        <li>
          <Link to="./pokemon/pikachu">Pikachu</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
