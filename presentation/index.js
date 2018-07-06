// Import React
import React from 'react';
import styled, { injectGlobal } from 'react-emotion';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane as CodePaneLib,
  Deck,
  Fill,
  Heading,
  Image,
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
// require('../assets/prism.css');

injectGlobal({
  'pre, code': {
    fontFamily: '"Dank Mono", monospace',
  },
});

const CodePane = styled(CodePaneLib)({ margin: '50px 0', fontSize: '2rem' });

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
    tertiary: 'Dank Mono',
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
          <Heading size={1} fit textColor="secondary">
            Testing React Components
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary">
            The Good, the Bad and the Ugly 🔫 🤠 🐴
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} margin="0 0 2rem 0" textColor="primary">
            Guiding Principal
          </Heading>
          <Tweet>
            <p lang="en" dir="ltr">
              The more your tests resemble the way your software is used, the
              more confidence they can give you.
            </p>
            &mdash; Kent C. Dodds (@kentcdodds)
            <a href="https://twitter.com/kentcdodds/status/977018512689455106?ref_src=twsrc%5Etfw">
              March 23, 2018
            </a>
          </Tweet>
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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Snapshot Testing
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
            Dead Simple
          </Heading>
          <Image src="assets/simple-snapshot.png" margin="2rem auto" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
            Not just for React components
          </Heading>
          <Image src="assets/server-snapshot.png" margin="2rem auto" />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Effective Snapshot Testing
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
            Name your tests well
          </Heading>
          <CodePane
            lang="javascript"
            source="it('renders the thread connector when showThreadConnector is true');"
            textFont="tertiary"
            textSize="2rem"
            margin="50px 0"
          />
        </Slide>
        <Slide transition={['slide']} bgColor="#000">
          <Heading size={5} textColor="primary">
            Avoid very large snapshots
          </Heading>
          <Image src="assets/empire_strikes_back.jpg" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" margin={0}>
          <Fill>
            <Heading size={5} textColor="secondary">
              Use Custom Serializers
            </Heading>
            <Text textSize="1.5rem">(e.g. jest-emotion)</Text>
            <Image src="assets/jest-emotion.png" height={605} width={497} />
          </Fill>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Enzyme
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Quote
            textColor="secondary"
            textFont="secondary"
            textSize="2rem"
            textAlign="left"
          >
            The more your tests resemble the way your software is used, the more
            confidence they can give you.
          </Quote>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Challenges with Enzyme
          </Heading>
          <Image src="assets/giphy.webp" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Large API
          </Heading>
          <Image src="assets/enzyme-api.gif" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Rendering React components
          </Heading>
          <Image src="assets/enzyme-render.png" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Inappropriate touching of privates 😳
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>wrapper.prop(key)</ListItem>
            </Appear>
            <Appear>
              <ListItem>wrapper.state(key)</ListItem>
            </Appear>
            <Appear>
              <ListItem>wrapper.setState(nextState)</ListItem>
            </Appear>
            <Appear>
              <ListItem>wrapper.instance()</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Enzyme Selectors
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>Find by props</ListItem>
            </Appear>
            <Appear>
              <ListItem>Find by Component's constructor</ListItem>
            </Appear>
            <Appear>
              <ListItem>Find by Component's displayName</ListItem>
            </Appear>
            <Appear>
              <ListItem>Find by CSS classes</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="#000">
          <Image src="assets/spiderman.jpg" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            If not Enzyme, then what?
            <Image src="assets/confused-dogs.gif" />
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Quote
            textColor="secondary"
            textFont="secondary"
            textSize="2rem"
            textAlign="left"
          >
            The more your tests resemble the way your software is used, the more
            confidence they can give you.
          </Quote>
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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            react-testing-library 🐐
          </Heading>
          <Text
            textSize="2rem"
            margin="1rem auto"
            textAlign="left"
            textFont="secondary"
          >
            Simple and complete React DOM testing utilities that encourage good
            testing practices.
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Small API, uses the DOM
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Components tested like they're used
          </Heading>
          <Appear>
            <Text>Privates stay private! 😎</Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Encourages accessible applications
          </Heading>
          <List>
            <ListItem>getByLabelText</ListItem>
            <ListItem>getByPlaceholderText</ListItem>
            <ListItem>getByText</ListItem>
            <ListItem>getByAltText</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Escape-hatches for everything else
          </Heading>
          <List>
            <ListItem>getByTestId</ListItem>
            <ListItem>container.querySelector (DOM APIs)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Let's look at an example
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Counter Component
          </Heading>
          <Counter />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            How do we test this component?
          </Heading>
          <Heading size={5} textColor="secondary" margin="1rem">
            To the codez! 🚀
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Benefits vs Enzyme
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>Minimal API surface area</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uses the DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <S type="strikethrough">Encourages</S> Enforces good practices
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">
            Resources
          </Heading>
          <List>
            <ListItem>
              <Link href="http://airbnb.io/enzyme/" textColor="primary">
                Enzyme
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65"
                textColor="primary"
              >
                Introducing the react-testing-library 🐐
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca"
                textColor="primary"
              >
                Effective Snapshot Testing
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['spin']}>
          <Heading>Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
