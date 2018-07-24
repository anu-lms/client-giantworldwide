<?php

namespace frontend;

/**
 * Class CommentsCest
 *
 * @group frontend
 */
class CommentsCest {

  private $comments;

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function LessonCommentOperations(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner();
    $I->openVideoComments();

    // Switch to notes tab.
    $I->click('.lesson-sidebar-container .tab.notes');
    // Wait for notes to be fully loaded.
    $I->waitForElementLoaded('.add-note');
    // Switch back to comments.
    $I->click('.lesson-sidebar-container .tab.comments');
    // Wait for comments to be fully loaded.
    $I->waitForElementLoaded('.add-new-comment');

    // CREATE A COMMENT.
    // Open comment creation form.
    $I->click('.add-new-comment');
    // Make sure input is in focus.
    $I->wait(0.4);
    $I->assertTrue($I->executeJS('return document.querySelector("#new-comment-form textarea") === document.activeElement'));
    // Create a comment.
    $this->comments = $I->createComments(1);
    // ID of the comment we just created.
    $id = $this->comments[0];

    // REPLY FORM.
    $I->click("#$id .reply");
    // Make sure input is in focus
    $I->wait(0.4);
    $I->assertTrue($I->executeJS('return document.querySelector("#reply-comment-form textarea") === document.activeElement'));

    // EDIT COMMENT.
    $comment_text = $I->grabTextFrom("#$id .comment-body");
    $I->clickCommentMenuItem($id,'edit');
    // Edit comment.
    $I->pressKey('#edit-comment-form textarea', ' (edited)');
    // Save comment.
    $I->click('#edit-comment-form button[type="submit"]');
    // Wait for comment to be updated.
    $I->waitForText($comment_text . ' (edited)', null, "#$id .comment-body");

    // DELETE COMMENT.
    $I->deleteComment($id);
    // Check that comment is not in the list any more.
    $I->dontSeeElement("#$id");
  }

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function LessonCommentPermissions(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner();

    // Teacher creates a comment.
    $teacher = $I->haveFriend('teacher', 'Step\Acceptance\Teacher');
    $teacher->does(function(\Step\Acceptance\Teacher $I) {
      $I->loginAsTeacher();
      $I->openVideoComments();
      // Create a comment.
      $this->comments = $I->createComments(1);
    });

    // ID of the comment we just created.
    $id = $this->comments[0];
    // Check comment created by teacher.
    $I->openVideoComments();
    // Open comment operations menu.
    $I->scrollAndClick( "#$id .context-menu button");
    // Wait for menu to be opened.
    $I->waitForElementVisible("#$id div[role='menu']");
    // Check that edit and delete operations are not available.
    $I->dontSeeElement("#$id div[role='menu'] .edit");
    $I->dontSeeElement("#$id div[role='menu'] .delete");

    // Teacher deletes a comment.
    $teacher->does(function(\Step\Acceptance\Teacher $I) {
      $I->openVideoComments();
      $I->deleteComment($this->comments[0]);
    });
  }

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function LessonCommentsThread(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner();
    $I->openVideoComments();

    // Create a comment.
    $this->comments = $I->createComments(1);

    // Teacher replies to the comment.
    $teacher = $I->haveFriend('teacher', 'Step\Acceptance\Teacher');
    $teacher->does(function(\Step\Acceptance\Teacher $I) {
      $I->loginAsTeacher();
      $I->openVideoComments();
      // Reply to the comment.
      $this->comments = array_merge($this->comments, $I->createComments(1, $this->comments[0]));
    });

    // Delete threaded comment.
    $I->openVideoComments();
    $I->deleteComment($this->comments[0]);
    // Make sure thread is not deleted.
    $I->waitForElement('.comments-list .comment.deleted');

    // Delete last comment in a thread.
    $teacher->does(function(\Step\Acceptance\Teacher $I) {
      $I->openVideoComments();
      $I->deleteComment($this->comments[1]);
      // @TODO: uncomment this once issue #157352838 is resolved.
      //$I->dontSeeElement('.comments-list .comment.deleted');
    });
  }

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function LessonCommentlink(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner();
    $I->openVideoComments();

    // Create comments.
    $this->comments = $I->createComments(7);

    // Copy last comment link.
    $I->clickCommentMenuItem($this->comments[6], 'copy');
    $I->waitForText('Link successfully copied.');

    // @TODO: Is there a better way to get data from the clipboard?
    $I->pressKey('#new-comment-form textarea', array('ctrl', 'v'));
    $url = $I->grabValueFrom('#new-comment-form textarea');

    // Go to the comment link.
    $url = parse_url($url, PHP_URL_PATH) . '?' . parse_url($url, PHP_URL_QUERY);
    $I->amOnPage($url);

    // Make sure comment is highlighted.
    $I->waitForElementLoaded('.comments-list .comment.highlighted');

    // Cleanup.
    /*foreach ($this->comments as $id) {
      $I->deleteComment($id);
    }*/

  }

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function CrossOrgComments(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner();
    $I->openVideoComments();

    $this->comments = $I->createComments(1);

    // User from other organization.
    $learner2 = $I->haveFriend('learner2', 'Step\Acceptance\Learner');
    $learner2->does(function(\Step\Acceptance\Learner $I) {
      $I->loginAsLearner2();
      $I->openVideoComments();
      // Make sure comment is not visible for another organization.
      $I->dontSeeElement('#' . $this->comments[0]);
    });

    // Cleanup.
    //$I->deleteComment($this->comments[0]);
  }

  /**
   * @param \Step\Acceptance\Learner $I
   * @throws \Exception
   */
  public function CommentsCounter(\Step\Acceptance\Learner $I) {
    $I->loginAsLearner3();
    $I->openVideoComments();

    // Get current count of comments of the first video paragraph.
    $count = $I->getCommentsCount('9991191');

    // Add a comment.
    $comment = $I->createComments(1)[0];
    // Make sure amount of comments updated.
    $I->assertEquals($I->getCommentsCount('9991191'), $count + 1);

    // Delete comment.
    $I->deleteComment($comment);
    // Close "Comment deleted" info dialog.
    $I->click('.s-alert-close');
    // Make sure amount of comments updated.
    $I->assertEquals($I->getCommentsCount('9991191'), $count);

    // Switch to Test Organization 2.
    $I->switchToOrganization('Test Organization 2');

    // Make sure that amomunt of comments is different for org 2.
    $org2_count = $I->getCommentsCount('9991191');
    $I->assertNotEquals($count, $org2_count);
  }

}
