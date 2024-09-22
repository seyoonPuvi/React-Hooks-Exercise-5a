// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Container,
  MainContainer,
  NotesInputContainer,
  Input,
  TextArea,
  AddButton,
  Heading,
  EmptyNotesContainer,
  Image,
  SubHeading,
  Text,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [inputText, setInputText] = useState('')
  const [notesList, addList] = useState([])

  const onSetTitle = event => {
    setTitle(event.target.value)
  }

  const onSetInputText = event => {
    setInputText(event.target.value)
  }

  const onAddList = event => {
    event.preventDefault()
    const newList = {
      id: uuidv4(),
      title,
      inputText,
    }

    addList(prevList => [...prevList, newList])
    setTitle('')
    setInputText('')
  }

  const onRenderEmptyNotes = () => (
    <EmptyNotesContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <SubHeading>No Notes Yet</SubHeading>
      <Text>Notes you add will appear here</Text>
    </EmptyNotesContainer>
  )

  const onRenderNotesList = () => (
    <NotesListContainer>
      {notesList.map(each => (
        <NoteItem notesDetails={each} key={each.id} />
      ))}
    </NotesListContainer>
  )

  const isEmpty = notesList.length === 0

  return (
    <Container>
      <MainContainer>
        <Heading>Notes</Heading>
        <NotesInputContainer onSubmit={onAddList}>
          <Input
            type="text"
            value={title}
            onChange={onSetTitle}
            placeholder="Title"
          />
          <TextArea
            cols="55"
            rows="10"
            placeholder="Take a Note..."
            value={inputText}
            onChange={onSetInputText}
          />
          <AddButton type="submit">Add</AddButton>
        </NotesInputContainer>
        {isEmpty ? onRenderEmptyNotes() : onRenderNotesList()}
      </MainContainer>
    </Container>
  )
}

export default Notes
