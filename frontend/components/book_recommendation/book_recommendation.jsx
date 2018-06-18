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
    this.generateText = this.generateText.bind(this);
  }

  componentDidMount() {
    // this.props.getRecommendation();
  }

  handleClick() {
    const clicked = !this.state.clicked;
    this.setState({loading:true,clicked:clicked}, () => {
      setTimeout(()=>{
        this.props.getRecommendation().then( ()=>{
          this.setState({loading:false});
        });
      },1000);
    });
  }

  spinning() {
    return (
      <div className="user-greet-wrapper recommendation-wrapper">
        <div className="recommendation-box">
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
        <div className="recommendation-box">
          <span>
            Want a Recommendation? Get one based on read books.
          </span>
          <button className="recommendation-button" onClick = {this.handleClick}>
            GO
          </button>

        </div>
      </div>
    );
  }

  generateText(book) {
    let text = '';
    let hasRead = this.props.hasRead;
    if (hasRead) {
      text = `${book.title} recommended to you based on your previously read books.`;
    }else {
      text = `${book.title} recommended to you as the highest rated book on the website.`;
    }
    return text;
  }

  render () {
    if(this.state.loading) {
      return this.spinning();
    }
    if (!this.state.clicked) {
      return this.notClickedRender();
    }
    let book = this.props.recommendedBook;
    let hasRead = this.props.hasRead;
    let text = this.generateText(book);
    return (
      <div className="recommendation-wrap">
        <div className="recc-box">
          <div className="recc-book-box">
            <Link to={`/books/${book.id}`}>
              <img className="recc-book-img" src={book.image_url}/>
            </Link>
          </div>
          <div className="recc-text">
            <button className="recommendation-button" onClick={this.handleClick}>
              <i class="fa fa-undo"></i>
            </button>
            {text}
          </div>
        </div>

      </div>
    );
  }
}

export default BookRecommendation;
