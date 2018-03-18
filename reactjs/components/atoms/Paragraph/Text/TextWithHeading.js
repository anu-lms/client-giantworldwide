import React from 'react';
import PropTypes from 'prop-types';

class TextWithHeading extends React.Component {

  componentDidMount() {
    // Report to the parent component that the loading is done.
    if (this.props.handleParagraphLoaded) {
      this.props.handleParagraphLoaded(this.props.id);
    }
  }

  componentDidUpdate() {
    // Report to the parent component that the loading is done.
    if (this.props.handleParagraphLoaded) {
      this.props.handleParagraphLoaded(this.props.id);
    }
  }

  render() {
    const { text, title, columnClasses } = this.props;
    return (
      <div className="text-with-heading">
        <div className="container">
          <div className="row">
            <div className={columnClasses.join(' ')}>

              {title &&
              <h4>{title}</h4>
              }

              {text &&
              <div dangerouslySetInnerHTML={{__html: text.value}}/>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

TextWithHeading.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  columnClasses: PropTypes.array,
  settings: PropTypes.object,
  handleParagraphLoaded: PropTypes.func,
  text: PropTypes.shape({
    value: PropTypes.string,
    format: PropTypes.string,
  }),
  title: PropTypes.string,
};

export default TextWithHeading;
