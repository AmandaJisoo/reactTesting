import React from 'react';
import { mount } from 'enzyme';
import Root from 'temp';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();

    //mock out the result
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name : 'Fetch #1' }, { name : 'Fetch #2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
})

//only when we invoke is invoked by devlopers manually, jest know that it is valid
it ('can fetch a list of comment', (done) => {
    //Attemp to render **entire** app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    
    //find fetch comments btn and click it
    wrapped.find('.fetch-comments').simulate('click');
    //expect 500 comments

    //this fails bc axios only can be done in browser setting, we have to mock it out
    //the fake moxios only has two 
    //it takes time to response to get the moxios response
    moxios.wait(() => {
        //to update itself
        wrapped.update();

        //needs to tell jest to hol on for a sec
        //offers a call bak
        expect(wrapped.find('li').length).toEqual(2);

        //signal to jest we are actually done
        done();

        //final clean up
        wrapped.unmount();
    });
});