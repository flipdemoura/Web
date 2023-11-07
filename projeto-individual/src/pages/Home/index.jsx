import Jogos from "../../components/Jogos";
import "./style.css";

const Home = () => {
  const jogos = [
    {
      url: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
      jogo: "Red Dead Redemption 2",
      id: "1",
    },
    {
      url: "https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg",
      jogo: "New World",
      id: "2",
    },
    {
      url: "https://backbone.ghost.io/content/images/2023/09/NBA-2k24---blog-preview.jpeg",
      jogo: "NBA 2k24",
      id: "3",
    },
    {
      url: "https://cdn.multiversus.com/hero/hero.jpg",
      jogo: "Multiversus",
      id: "4",
    },
  ];
  return (
    <>
      <div className="container">
        <h1>SHABBA GAME STORE</h1>
        {jogos.map((jogo) => (
          <Jogos key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </>
  );
};

export default Home;
