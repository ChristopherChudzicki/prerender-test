import { useQuery } from "@tanstack/react-query";

type PokemonDetail = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const usePokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: async (): Promise<PokemonDetail> => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return res.json();
    },
  });
};

export { usePokemon };
