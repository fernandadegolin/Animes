import styled from "styled-components";

export const Content = styled.div`
    text-align: center;
`;

export const AnimeList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    list-style: none;
`;

export const AnimeListItem = styled.li`
    font-weight: bold;
    text-align: center;
`;

export const AnimePoster = styled.img`
    max-width: 100%;
`;
