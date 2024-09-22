// Write your code here
import {NotesListItem, Title, Description} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, inputText} = notesDetails

  return (
    <NotesListItem>
      <Title>{title}</Title>
      <Description>{inputText}</Description>
    </NotesListItem>
  )
}

export default NoteItem
