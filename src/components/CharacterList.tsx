import { GET_CHARACTERS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Card from "@mui/material/Card";

interface Character {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: string;
}

interface CharacterData {
  characters: {
    results: Character[];
  };
}

interface CharacterListProps {
  page: number;
  filter: boolean;
}

function CharacterList({ page, filter }: CharacterListProps) {
  const { loading, error, data } = useQuery<CharacterData>(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = filter
    ? data?.characters.results.filter((item: any) => item.species === "Human")
    : data?.characters.results;

  return (
    <div className="cardInfo">
      {characters?.map(({ id, name, image, status, species, gender }) => (
        <Card
          key={id}
          sx={{
            backgroundColor: "#C8ccc4",
            border: "solid black 1px",
            borderRadius: "8px",
            width: "20%",
            marginLeft: "35px",
            paddingBottom: "20px",
            marginBottom: "25px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          <h2 className="title">{name}</h2>
          <img width="250" height="300" alt={`${name} `} src={`${image}`} />
          <br />
          <p className="title">Status:</p>
          <p className="info">{status}</p>
          <p className="title">Species:</p>
          <p className="info">{species}</p>
          <p className="title">Status:</p>
          <p className="info">{status}</p>
          <p className="title">Gender:</p>
          <p className="info">{gender}</p>

          <br />
        </Card>
      ))}
    </div>
  );
}

export default CharacterList;
