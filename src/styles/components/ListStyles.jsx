import styled from "styled-components";

export const ListView = styled.div`
    width: 100%;
    display: grid;
    grid-template: auto/1fr;
    gap: 4rem;

    @media screen and (min-width: 650px) {
		grid-template: auto / repeat(2, 1fr);
	}

    @media screen and (min-width: 1000px) {
		grid-template: auto / repeat(3, 1fr);
	}
`