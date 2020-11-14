import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: ""};

    handleChange = (evt) => {
        this.setState({comment : evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        //TODO
        //make sure we call action creator
        //empty out the text, take it from actions
        this.props.saveComment(this.state.comment);

        this.setState({comment: ''});
        
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>
                Fetch Comments
            </button>
            </div>
        )
    }
}

//null bc doesn't need any state
export default connect(null, actions)(CommentBox);
