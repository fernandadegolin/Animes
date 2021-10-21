import React from 'react';
import * as S from './style';

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS -1) / 2;

export const Pagination = ({ limit, total, offset, setOffset }) => {
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(currentPage - MAX_LEFT, 1);

    function onPageChange (page) {
        setOffset ((page -1) * limit);
    }

    return(
        <S.PageList>
            <li>
                <S.PageItem  
                onClick={() => onPageChange (currentPage -1)}
                disabled={currentPage === 1}
                >
                    Anterior
                </S.PageItem>
            </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages)})
        .map((_, index) => index + first)
        .map((page) => (
            <li key={page}>
                <S.PageItem 
                className={page === currentPage ? 'pagination__item--active' : null}
                onClick={() => onPageChange (page)}
                >
                    {page}
                </S.PageItem>
            </li>
            ))}
            <li>
                <S.PageItem onClick={() => onPageChange (currentPage + 1)}
                disabled={currentPage === pages}
                >
                    Próximo
                </S.PageItem>
            </li>
        </S.PageList>
    )
};
