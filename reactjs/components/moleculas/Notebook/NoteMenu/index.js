import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import Dropdown, { MenuItem, MenuIcon, DeleteIcon } from '../../../atoms/DropdownMenu';
import * as notebookActions from "../../../../actions/notebook";

class NoteMenu extends Component {

  onDelete() {
    const { note, dispatch } = this.props;

    if (window.confirm("Delete this note?")) {
      // Hide the note immediately after confirmaiton.
      dispatch(notebookActions.deleteNote(note.id));

      // Make DELETE request.
      const request = this.context.request();
      request
        .delete('/jsonapi/notebook/notebook/' + note.uuid)
        .send()
        .then(response => {
          console.log('Deleted note ' + note.uuid);
        })
        .catch(error => {
          console.log(error);
          Alert.error('Could not delete the note. Please reload the page and try again.');
        });

    }
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle noCaret
          btnStyle="link"
        >
          <MenuIcon />
        </Dropdown.Toggle>
        <Dropdown.MenuWrapper pullRight>
          <Dropdown.Menu pullRight>
            <MenuItem onSelect={() => { this.onDelete() }} >
              <DeleteIcon /> Delete Note
        </MenuItem>
          </Dropdown.Menu>
        </Dropdown.MenuWrapper>
      </Dropdown>
    )
  }
}

NoteMenu.contextTypes = {
  request: PropTypes.func,
};

export default connect()(NoteMenu);