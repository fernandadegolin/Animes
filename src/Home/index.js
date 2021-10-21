import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import qs from "qs";
import * as S from './style';

const api = 'https://kitsu.io/api/edge/';
const LIMIT = 12;

export function Home() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // setInfo({});
        
    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    };

    if(text){
      query.filter = {
        text,
      }
    }
        fetch(`${api}anime?${qs.stringify(query)}`)
        .then((res) => res.json())
        .then((res) =>{
          setInfo(res);
            console.log(res)
        })
    
  }, [text, offset])

  return (
    <S.Content>
      <h1>Anime</h1>
      <Search
      value={text} 
      onChange={(search) => setText(search)}
      placeholder={"Busque seu Anime"}
      />

      {text && !info.data &&(
        <span>Só um minutinho que já estou buscando sua informação... Bora tomar um café</span>
      )}

      {info.data && (
        <S.AnimeList>
        {info.data.map((anime) => (
            <S.AnimeListItem key={anime.id}>
              <S.AnimePoster 
                src={anime.attributes.posterImage.small} 
                alt={anime.attributes.canonicalTitle} />
              {anime.attributes.canonicalTitle}
            </S.AnimeListItem>
          ))}
        </S.AnimeList>
      )}

      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset} 
          />

      )}
    </S.Content>
  );
}

