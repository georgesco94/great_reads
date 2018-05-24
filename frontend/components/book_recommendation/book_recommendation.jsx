import React from 'react';

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
      <div className="user-greet-wrapper">
        <div className="user-greet">
          <div className="greet-text">
            This book is recommended to you based on genres and read books.
          </div>
          <div className="challenge-box">
            {book.title}
          </div>
          <div className="add-more">

          </div>
        </div>
      </div>
    );
  }
}

export default BookRecommendation;
