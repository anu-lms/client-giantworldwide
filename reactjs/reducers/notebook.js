export default (state = { notes: [], activeNoteId: -1 }, action) => {
  let index;

  switch (action.type) {

    // Adds existing note to the notebook store.
    case 'NOTE_ADD':

      // Search for the existing note.
      index = state.notes.findIndex(element => element.id === action.note.id);

      // If the note was found, then we should update it.
      if (index !== -1) {
        return {
          ...state,
          notes: [
            ...state.notes.slice(0, index),
            {
              ...action.note,
              isSaved: true,
              isSaving: false,
            },
            ...state.notes.slice(index + 1)
          ],
        };
      }

      // If lesson didn't exist before - simply add it.
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            ...action.note,
            isSaved: true,
            isSaving: false,
          },
        ],
      };

    case 'NOTE_UPDATE_TITLE':

      // Search for the existing note.
      index = state.notes.findIndex(element => element.id === action.id);

      // If the note is found (which is expected), then just update the title.
      if (index !== -1) {
        return {
          ...state,
          notes: [
            ...state.notes.slice(0, index),
            {
              ...state.notes[index],
              title: action.title,
              // Automatically mark note as not synced with backend.
              isSaved: false,
            },
            ...state.notes.slice(index + 1),
          ],
        }
      }

      // If note was not found (which is not expected, but just as a fallback)
      // then simply return state as is.
      return state;

    case 'NOTE_UPDATE_BODY':

      // Search for the existing note.
      index = state.notes.findIndex(element => element.id === action.id);

      // If the note is found (which is expected), then just update the body.
      if (index !== -1) {

        // There is only 1 case when we want to mark a note as saved on body
        // change: when current note body is empty. It can happen only when the
        // note was loaded from the backend. It would be '<p></p>' otherwise.
        let isSaved = false;
        if (!state.notes[index].body) {
          isSaved = true;
        }

        return {
          ...state,
          notes: [
            ...state.notes.slice(0, index),
            {
              ...state.notes[index],
              body: action.body,
              isSaved: isSaved,
            },
            ...state.notes.slice(index + 1),
          ],
        }
      }

      // If note was not found (which is not expected, but just as a fallback)
      // then simply return state as is.
      return state;

    case 'NOTE_SET_STATE_SAVING':

      // Search for the existing note.
      index = state.notes.findIndex(element => element.id === action.id);

      // If the note is found (which is expected), then just set the right state.
      if (index !== -1) {
        return {
          ...state,
          notes: [
            ...state.notes.slice(0, index),
            {
              ...state.notes[index],
              isSaving: true,
              isSaved: false,
            },
            ...state.notes.slice(index + 1),
          ],
        }
      }

      // Otherwise return unchanged state.
      return state;

    case 'NOTE_SET_STATE_SAVED':

      // Search for the existing note.
      index = state.notes.findIndex(element => element.id === action.id);

      // If the note is found (which is expected), then just set the right state.
      if (index !== -1) {
        return {
          ...state,
          notes: [
            ...state.notes.slice(0, index),
            {
              ...state.notes[index],
              isSaving: false,
              isSaved: true,
            },
            ...state.notes.slice(index + 1),
          ],
        }
      }

      // Otherwise return unchanged state.
      return state;

    // Set ID of active note to display for editing.
    case 'NOTE_SET_ACTIVE':
      return {
        ...state,
        activeNoteId: action.id,
      };

    // Return to the initial state.
    case 'NOTEBOOK_CLEAR':
      return {
        ...state,
        notes: [],
        activeNoteId: -1,
      };

    default:
      return state;
  }
};
