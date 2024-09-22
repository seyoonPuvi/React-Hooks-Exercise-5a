// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
`

export const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  color: darkblue;
  text-align: center;
  font-family:Bree Serif;
`

export const NotesInputContainer = styled.form`
  width: 100%;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem 2rem;
  display:flex;
  flex-direction:column;
  row-gap: 2rem;
`

export const Input = styled.input`
  border: none;
  outline: none;
  color: black;
  font-size:1.8rem;
`

export const TextArea = styled.textarea`
  color: black;
  width: 100%;
  border:none;
  outline:none;
  font-size:1.8rem
`

export const AddButton = styled.button`
  align-self: flex-end;
  padding: 1rem 2rem;
  background-color: steelblue;
  color: white;
  border:none;
  outline:none;
`

export const EmptyNotesContainer = styled.div`
  align-self:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;

`

export const Image = styled.img`
  height:10rem;
  width:10rem;
  object-fit:contain;
  object-position:center;

`

export const SubHeading = styled.h1`
  font-size:2rem;
  color:grey;
  font-weight:bold;
  text-align:center;
`

export const Text = styled.p`
  font-size:1.6rem;
  color:grey;
  text-align:center;
`

export const NotesListContainer = styled.ul`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  gap:2rem 2rem;
  padding-inline-start:0;

`
