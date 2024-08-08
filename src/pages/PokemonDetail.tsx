import { usePokemon } from "../api";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import invariant from "tiny-invariant";

const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  invariant(name, "Expected name to be defined");

  const { data, isLoading } = usePokemon(name);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  invariant(data, "Expected data to be defined");

  return (
    <>
      <Helmet>
        <title>{data.name}</title>
        <meta property="description" content={`Details for ${data.name}`} />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={`Details for ${data.name}`} />
        <meta property="og:image" content={data.sprites.front_default} />
        <meta property="og:image:alt" content={data.name} />
        <meta property="og:type" content="website"></meta>
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content={`Details for ${data.name}`} />
        <meta name="twitter:image" content={data.sprites.front_default} />
      </Helmet>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </>
  );
};

export default PokemonDetailPage;
