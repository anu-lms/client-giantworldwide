import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageLoader from '../../../atoms/PageLoader';
import CommentsList from '../../../atoms/Comment/List';
import AddCommentForm from '../../../atoms/Comment/Form';
import { scrollToElement } from '../../../../utils/scrollTo';
import EmptyText from '../../../atoms/Comment/EmptyText';
import ErrorBoundary from '../../../atoms/ErrorBoundary';
import * as lessonCommentsActions from '../../../../actions/lessonComments';
import * as lessonCommentsHelper from '../../../../helpers/lessonComments';

class lessonComments extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.scrollToForm = this.scrollToForm.bind(this);
  }

  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    // When component is mounted, send action that the comments sidebar is opened.
    if (!isLoading) {
      dispatch(lessonCommentsActions.syncComments());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoading && !nextProps.isLoading) {
      // Restore Scroll position after sidebar reload.
      const scrollableArea = document.getElementById('lesson-comments-scrollable');
      if (scrollableArea) {
        scrollableArea.scrollTop = 0;
      }
    }
  }

  scrollToForm() {
    scrollToElement('lesson-comments-scrollable', 'new-comment-form', () => {
      document.getElementById('new-comment-form')
        .getElementsByTagName('textarea')[0].focus({ preventScroll: true });
    });
  }

  render() {
    const { comments, isLoading } = this.props;

    return (
      <div className="lesson-comments-container">
        {isLoading &&
          <PageLoader />
        }
        <ErrorBoundary>
          <div className="lesson-comments-scrollable" id="lesson-comments-scrollable">
            <div className="comments-header">
              <div className="title">All Comments</div>
              <div className="actions">
                <div className="add-new-comment" onKeyPress={this.scrollToForm} onClick={this.scrollToForm}>+ New Comment</div>
              </div>
            </div>

            <div className="comments-content">
              {comments.length > 0 ? (
                <CommentsList comments={comments} />
              ) : (
                <EmptyText />
              )}

              <AddCommentForm />
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

lessonComments.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ lessonSidebar }) => ({
  comments: lessonCommentsHelper.getOrderedComments(lessonSidebar.comments.comments),
  isLoading: lessonSidebar.sidebar.isLoading,
});

export default connect(mapStateToProps)(lessonComments);
