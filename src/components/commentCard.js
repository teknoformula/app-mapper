import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class CommentCard extends Component {

  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.delete = this.delete.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  upvote(){
    axios.get(`http://localhost:4000/project/comments/vote-up/${this.props.obj._id}`)
      .then(console.log('upvoted comment!'))
      .catch(err => console.log(err));
      window.location.reload();
  }

  downvote(){
    axios.get(`http://localhost:4000/project/comments/vote-down/${this.props.obj._id}`)
      .then(console.log('upvoted comment!'))
      .catch(err => console.log(err));
      window.location.reload();
  }
  
  delete() {
    axios.get(`http://localhost:4000/project/${this.props.projectId}/delete/${this.props.commentId}`)
      .then(console.log('deleted comment!'))
      .catch(err => console.log(err));
      window.location.reload();
  }

  render() {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row ">
              <div className="col-md-2">
                <div className="w-50 h-100" style={{background: this.props.color}}/>
              </div>
              <div className="col-md-10 px-3">
                <div className="card-block px-3">
                  <p className="card-header">{this.props.obj.content}</p>
                  <p className="card-header">
                  Standards-compliant webservices; integrate unleash bleeding-edge incubate channels embrace implement matrix front-end reinvent bandwidth tag embedded. Authentic wireless podcasts seize technologies incentivize rich-clientAPIs benchmark? Virtual best-of-breed mesh synergistic: killer holistic unleash; monetize B2B syndicate back-end viral, user-centric intuitive facilitate. Architectures value-added target feeds schemas syndicate web services channels markets back-end virtual dynamic benchmark markets design deliver recontextualize enable, recontextualize.
                  </p>
                  <div className="btn-group flex-wrap">
                    <button onClick={this.upvote} className="btn btn-success">UpVote <i className="fas fa-thumbs-up"></i></button>
                    <button onClick={this.downvote} className="btn btn-secondary">DownVote <i className="fas fa-thumbs-down"></i></button>
                    <Link to={`/${this.props.projectId}/comments`} className="btn btn-secondary active">Reply</Link>
                    <button className="btn btn-outline-primary">
                      <i className="far fa-thumbs-up"> </i> {this.props.obj.score}</button>
                  </div>
                  <button onClick={this.delete} className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
 
export default CommentCard;