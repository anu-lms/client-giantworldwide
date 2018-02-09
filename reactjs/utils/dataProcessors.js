import * as courseHelper from '../helpers/course';
import * as lessonHelper from '../helpers/lesson';
import * as urlUtils from '../utils/url';

export const classData = (classData) => {
  return {
    uuid: classData.uuid,
    label: classData.label
  }
};

export const courseData = (courseData) => {

  const course = courseData.entityId;
  const imageUrl = course.fieldCourseImage ? course.fieldCourseImage.meta.derivatives['576x450'] : 'http://via.placeholder.com/576x450';

  let lessons = [];
  if (course.fieldCourseLessons) {
    lessons = course.fieldCourseLessons.map(lesson => ({
      id: lesson.nid,
      title: lesson.title,
      url: lessonHelper.getUrl(course.path.alias, lesson.path.alias)
    }));
  }

  let instructors = [];
  if (course.fieldCourseInstructors) {
    instructors = course.fieldCourseInstructors.map(user => ({
      uuid: user.uuid,
      realname: `${user.fieldFirstName} ${user.fieldLastName}`
    }));
  }

  let organizationName = '';
  if (course.fieldCourseOrganisation) {
    organizationName = course.fieldCourseOrganisation.name;
  }

  let estimation = 0;
  if (course.fieldTimeToCompleteMinutes) {
    estimation = course.fieldTimeToCompleteMinutes;
  }

  return {
    id: course.nid,
    uuid: course.uuid,
    gid: courseData.gid.uuid,
    created: course.created,
    title: course.title,
    url: courseHelper.getUrl(course.path.alias),
    imageUrl: urlUtils.fileUrl(imageUrl),
    // TODO: enable image alt.
    imageAlt: course.title,
    lessons: lessons,
    organisation: organizationName,
    instructors: instructors,
    totalMinutes: estimation,
    description: course.fieldCourseDescription ? course.fieldCourseDescription.value : ''
  };
};

export const lessonData = (lessonData) => {

  const lesson = lessonData.entityId;

  let blocks = [];
  if (lesson.fieldLessonBlocks) {
    blocks = processParagraphs(lesson.fieldLessonBlocks);
  }

  return {
    id: lesson.nid,
    uuid: lesson.id,
    url: lessonHelper.getUrl(lesson.fieldLessonCourse.path.alias, lesson.path.alias),
    title: lesson.title,
    isAssessment: lesson.fieldIsAssessment ? lesson.fieldIsAssessment : false,
    blocks
  };
};

/**
 * Internal helper to process paragraphs data from the backend.
 */
const processParagraphs = (paragraphs) => {
  let blocks = [];
  let counter = 1;
  const regExp = /\/paragraph\/(.+)\//;
  paragraphs.forEach((block, order) => {

    // Couldn't get paragraph type out of the jsonapi request, therefore
    // have to use this workaround to get the paragraph type from the
    // link to fetch the current paragraph.
    const type = regExp.exec(block.links.self);

    blocks[order] = {
      type: type[1],
      id: block.id,
    };

    // For numbered divider we add automated counter.
    if (type[1] === 'divider_numbered') {
      blocks[order].counter = counter++;
    }

    // Find all props starting with "fieldParagraph" and save their values.
    for (let property in block) {
      if (block.hasOwnProperty(property)) {
        let prop = '';

        if (property.startsWith('fieldParagraph')) {
          // Remove 'fieldParagraph' prefix.
          prop = property.substr(14).toLowerCase();
        }
        else
          if (property.startsWith('fieldQuiz')) {
            // Remove 'fieldQuiz' prefix.
            prop = property.substr(9).toLowerCase();
          }

        if (prop === 'blocks') {
          blocks[order][prop] = processParagraphs(block[property]);
        }

        else if (prop) {
          blocks[order][prop] = block[property];
        }
      }
    }
  });

  // Custom mapping for linear scale fields.
  blocks = blocks.map(block => {

    if (block.type === 'quiz_linear_scale') {
      block.from = block.linearscalefrom;
      block.to = block.linearscaleto;
    }

    return block;
  });

  return blocks;
};

/**
 * Internal helper to normalize notebook notes data from the backend.
 */
export const notebookData = (notebookData) => {
  // Custom mapping for notebook notes.
  return notebookData.map(note => {

    return {
      id: note.id,
      uuid: note.uuid,
      created: note.created,
      changed: note.changed,
      title: note.title,
      body: note.fieldNotebookBody ? note.fieldNotebookBody.value : '',
    };
  });
};
