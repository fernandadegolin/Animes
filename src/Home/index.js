import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import * as S from './style';

const api = 'https://kitsu.io/api/edge/';

export function Home() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
      if (text) {        //IF significa que se a API não tiver texto, não entra aqui.          
        fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((res) => res.json())
        .then((res) =>{
          setInfo(res);
            console.log(res)
        })
      }
  }, [text])

  return (
    <S.Content>
      <h1>Anime</h1>
      <Search
      value={text} 
      onChange={(search) => setText(search)}
      placeholder={"Busque seu Anime"}
      />

      {info.data && (
        <S.AnimeList>
        {info.data.map((anime) => (
            <S.AnimeListItem key={anime.id}>
              <S.AnimePoster src={anime.attributes.posterImage.small} />
              {anime.attributes.canonicalTitle}
            </S.AnimeListItem>
          ))}
        </S.AnimeList>
      )}
    </S.Content>
  );
}

