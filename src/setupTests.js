import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//name must be setupTests.js
configure({ adapter: new Adapter() });
