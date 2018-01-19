import React from 'react';
import App from '../application/App';
import withAuth from '../auth/withAuth';
import withRedux from '../store/withRedux';
import { getUrl as getLessonUrl } from '../helpers/lesson';
import { getUrl as getCourseUrl } from '../helpers/course';
import LessonPageTemplate from '../components/organisms/Templates/LessonPage';

class LessonPage extends React.Component {

  render () {
    return (
      <App>
        <LessonPageTemplate
          toc={this.props.toc}
          lesson={this.props.lesson}
          course={this.props.course}
        />
      </App>
    );
  }

  static async getInitialProps({ accessToken, query }) {

    const toc = [
      {
        title: 'Introduction',
        url: getLessonUrl('/demo', '/1'),
        id: 1,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',
      },
      {
        title: 'Fifth Gear',
        url: getLessonUrl('/demo', '/2'),
        id: 2,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',
      },
      {
        title: 'Fourth Gear',
        url: getLessonUrl('/demo', '/3'),
        id: 3,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',
      },
      {
        title: 'Third Gear',
        url: getLessonUrl('/demo', '/4'),
        id: 4,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',
      },
      {
        title: 'Second Gear',
        url: getLessonUrl('/demo', '/5'),
        id: 5,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',      },
      {
        title: 'First Gear',
        url: getLessonUrl('/demo', '/6'),
        id: 6,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',      },
      {
        title: 'Reverse Gear',
        url: getLessonUrl('/demo', '/7'),
        id: 7,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',      },
      {
        title: 'Five Gears Assessment Gear',
        url: getLessonUrl('/demo', '/8'),
        id: 8,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',      },
      {
        title: 'Going Deeper: Five Gears',
        url: getLessonUrl('/demo', '/9'),
        id: 9,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices nunc, sit amet lobortis odio. Nullam a efficitur justo. Pellentesque pretium ante suscipit lectus convallis rhoncus. Ut sollicitudin nec augue nec finibus. Proin sollicitudin augue eget pulvinar gravida. Nulla sodales est non diam maximus consequat. Sed fringilla lacinia augue, vel venenatis tellus dignissim id. Aliquam pulvinar quam eu mauris blandit, vel lobortis metus blandit. Pellentesque id sem at lorem tincidunt ullamcorper. Morbi cursus vel arcu sed sollicitudin. Cras nulla neque, luctus quis pulvinar sed, rutrum id arcu</p>',      },
    ];

    const index = toc.findIndex(element => element.id + '' === query.lesson);

    return {
      toc,
      lesson: toc[index],
      course: {
        id: 1,
        title: 'The Five Gears',
        image: '',
        url: getCourseUrl('/demo'),
      }
    }
  }


}

export default withRedux(withAuth(LessonPage));
