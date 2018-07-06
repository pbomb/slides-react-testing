import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';
import { cleanup } from 'react-testing-library';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer(emotion));
afterEach(cleanup);
