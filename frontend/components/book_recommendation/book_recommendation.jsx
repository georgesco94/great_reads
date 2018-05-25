import React from 'react';
import {Link} from 'react-router-dom';
class BookRecommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading:false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.props.getRecommendation();
  }

  handleClick() {
    this.setState({loading:true,clicked:true}, () => {
      setTimeout(()=>{
        console.log('before recommendation fetch');
        this.props.getRecommendation().then( ()=>{
          console.log('after recommendation fetch');
          this.setState({loading:false});
        });
      },1000);
    });
  }

  spinning() {
    return (
      <div className="user-greet-wrapper recommendation-wrapper">
        <div className="user-greet recommendation-box">
          <div className="spinner">
            <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }

  notClickedRender() {
    return (
      <div className="user-greet-wrapper recommendation-wrapper">
        <div className="user-greet recommendation-box">
          Get Recommendation
          <button className="recommendation-button" onClick = {this.handleClick}>
            GO
          </button>

        </div>
      </div>
    );
  }

  render () {
    if(this.state.loading) {
      return this.spinning();
    }
    if (!this.state.clicked) {
      return this.notClickedRender();
    }
    let book = this.props.recommendedBook;
    return (
      <div className="recommendation-wrap">
        <div className="recc-box">
          <div className="recc-book-box">
            <Link to={`/books/${book.id}`}>
              <img className="book-cover" src={book.image_url}/>
            </Link>
          </div>
          <div className="recc-text">
            asd
          </div>
        </div>

      </div>
    );
  }
}

export default BookRecommendation;
