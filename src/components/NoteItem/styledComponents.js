// Style your elements here
import styled from 'styled-components'

export const NotesListItem = styled.li`
    display:flex;
    flex-direction:column;
    padding:2rem 2rem;
    row-gap:1rem;
    border:0.5px solid grey;
    width:20rem;

    border-radius:1rem;
`

export const Title = styled.h1`
    font-size:1.8rem;
    font-family:Bree Serif;
    font-weight:500;
`

export const Description = styled.p`
    color:grey;
    font-size:1.5rem;
`
