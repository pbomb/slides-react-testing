// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Layout,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text,
  Link,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import '../assets/prism';
import Counter from './counter';
import Tweet from './tweet';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('../assets/prism.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);
theme.screen.components.quote.lineHeight = 1.3;
theme.screen.components.text.lineHeight = 1.3;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1200}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            react-testing-library
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            textAlign="left"
          >
            Simple and complete React DOM testing utilities that encourage good
            testing practices.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Layout>
            <Fill>
              <Tweet>
                <p lang="en" dir="ltr">
                  I&#39;m seriously starting to think that I should make my own
                  (very small) testing lib and drop enzyme entirely. Most of
                  enzyme&#39;s features are not at all useful (and many
                  damaging) to my testbases. I&#39;d rather have something
                  smaller that encourages better practices.
                </p>
                &mdash; Kent C. Dodds (@kentcdodds)
                <a href="https://twitter.com/kentcdodds/status/974278185540964352?ref_src=twsrc%5Etfw">
                  March 15, 2018
                </a>
              </Tweet>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Layout>
            <Fill>
              <Tweet>
                <p lang="en" dir="ltr">
                  The more your tests resemble the way your software is used,
                  the more confidence they can give you.
                </p>
                &mdash; Kent C. Dodds (@kentcdodds)
                <a href="https://twitter.com/kentcdodds/status/977018512689455106?ref_src=twsrc%5Etfw">
                  March 23, 2018
                </a>
              </Tweet>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            React Components
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary" textSize="3rem">
              A component{' '}
              <S type="bold" textColor="primary">
                takes in parameters
              </S>, called props, and{' '}
              <S type="bold" textColor="primary">
                returns a hierarchy of views
              </S>{' '}
              to display via the render method.
            </Quote>
          </BlockQuote>
        </Slide>
        <CodeSlide
          textSize="1.3rem"
          bgColor="#2d2d2d"
          color="#fff"
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/simple-component.example')}
          ranges={[
            { loc: [0, 12], title: 'Simple React Component' },
            { loc: [2, 3], note: 'Inputs, including click handler' },
            { loc: [3, 6], note: 'Output' },
          ]}
        />
        <CodeSlide
          textSize="1.3rem"
          bgColor="#2d2d2d"
          color="#fff"
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/simple-enzyme-test.example')}
          ranges={[
            { loc: [0, 39], title: 'Simple Enzyme Test' },
            { loc: [4, 9], note: 'Mock click handler' },
            { loc: [10, 15], note: 'Test for disabled=false' },
            { loc: [12, 13], note: 'Inputs' },
            { loc: [15, 17], note: 'Output' },
            { loc: [19, 27], note: 'Test for disabled=true' },
            { loc: [21, 22], note: 'Inputs' },
            { loc: [24, 26], note: 'Output' },
            { loc: [28, 37], note: 'Test for click handler' },
            { loc: [33, 34], note: 'Simulate click event' },
            { loc: [35, 36], note: 'Verify handler was called' },
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Snapshot Testing
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary" margin="1rem">
              Benefits
            </Heading>
          </Appear>
          <List textColor="primary">
            <Appear>
              <ListItem>Dead simple</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not just for React components</ListItem>
            </Appear>
          </List>
          <Text />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Snapshot Testing
          </Heading>
          <Heading size={4} textColor="secondary" margin="1rem">
            Things to consider
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>Avoid very large snapshots</ListItem>
            </Appear>
            <Appear>
              <ListItem>Customer Serializers (e.g. jest-glamor-react)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Snapshot diffs</ListItem>
            </Appear>
          </List>
          <Text />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Issues with Enzyme
          </Heading>
          <Appear>
            <Heading size={5} textColor="secondary" margin="1rem">
              Allows you to do bad things
            </Heading>
          </Appear>
          <List textColor="primary">
            <Appear>
              <ListItem>Find components by their constructor function</ListItem>
            </Appear>
            <Appear>
              <ListItem>Inappropriate touching of privates 😳</ListItem>
            </Appear>
            <Appear>
              <ListItem>Shallow rendering</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Let's look at some examples
          </Heading>
          <Heading size={5} textColor="secondary" margin="1rem">
            To the codez!
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Component With State
          </Heading>
          <Counter />
        </Slide>
        <CodeSlide
          textSize="1.3rem"
          bgColor="#2d2d2d"
          color="#fff"
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/counter.example')}
          ranges={[
            { loc: [0, 22], title: 'Counter Component' },
            { loc: [3, 6], note: 'Internal State' },
            { loc: [7, 10], note: 'Button handlers' },
            { loc: [11, 20], note: 'Rendered output' },
            { loc: [15, 16], note: 'State rendered' },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How do we test this component?
          </Heading>
        </Slide>
        <CodeSlide
          textSize="1.3rem"
          bgColor="#2d2d2d"
          color="#fff"
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/counter-enzyme-test.example')}
          ranges={[
            { loc: [0, 19], title: 'Enzyme Example' },
            { loc: [4, 10], note: 'Test state updated' },
            { loc: [5, 6], note: 'Render Counter' },
            { loc: [7, 8], note: 'Click Increment Button' },
            { loc: [8, 9], note: 'Test Internal State (BAD!)' },
            { loc: [11, 17], note: 'Test rendered output' },
            { loc: [12, 13], note: 'Render Counter' },
            { loc: [14, 15], note: 'Click Increment Button' },
            { loc: [15, 16], note: 'Test Rendered Output (GOOD!)' },
            { loc: [4, 10], title: 'What are the problems with this test?' },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How do we test this component?
          </Heading>
        </Slide>
        <CodeSlide
          textSize="1.3rem"
          bgColor="#2d2d2d"
          color="#fff"
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/nested-components-enzyme-test.example')}
          ranges={[
            { loc: [0, 19], title: 'Enzyme Example' },
            { loc: [4, 10], note: 'Test state updated' },
            { loc: [5, 6], note: 'Render Counter' },
            { loc: [7, 8], note: 'Click Increment Button' },
            { loc: [8, 9], note: 'Test Internal State (BAD!)' },
            { loc: [11, 17], note: 'Test rendered output' },
            { loc: [12, 13], note: 'Render Counter' },
            { loc: [14, 15], note: 'Click Increment Button' },
            { loc: [15, 16], note: 'Test Rendered Output (GOOD!)' },
            { loc: [4, 10], title: 'What are the problems with this test?' },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What are the problems with the first test?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size="3" textColor="primary">
            Resources
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65"
                textColor="secondary"
              >
                Introducing the react-testing-library 🐐
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca"
                textColor="secondary"
              >
                Effective Snapshot Testing
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
