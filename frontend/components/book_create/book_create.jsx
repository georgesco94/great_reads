import React from 'react';

class BookCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
    this.state = {
      title: "",
      author: "",
      description: "",
      imageFile: null,
      imageUrl: null,
      displayErrors:  this.props.errors.length ? true : false
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({displayErrors: nextProps.errors.length ? true : false})
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("book[title]",this.state.title);
    formData.append("book[author]",this.state.author);
    formData.append("book[description]",this.state.description);
    formData.append("book[image]",this.state.imageFile);
    this.props.createBook(formData);
  }
  updateFile (e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend= function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);
    if(file){
      fileReader.readAsDataURL(file);
    }
  }
  renderErrors(){
    const errs = this.props.errors.map((error) => {
      return <li className="errors">{error}</li>
    });
    return (

      <div className="signup-errors-box">
        <ul className="errors-ul">
          {errs}
        </ul>
      </div>
    );
  }
  removeErrors(){
    setTimeout(function() {
       this.setState({displayErrors: false});
     }.bind(this), 2000);
  }

  render () {
    debugger
    if(this.state.displayErrors) {
      this.removeErrors();
    }
    return (
      <div className="create-book-component">
        {this.state.displayErrors ? this.renderErrors() : ""}
        <div className="create-form-box">
          <h3>Add a New Book</h3>
          <form className="create-form" onSubmit={this.handleSubmit}>
            <label>Title
              <input
                className="create-input"
                type="text"
                value={this.state.title}
                onChange={this.update('title')} />
            </label>
            <label>Author
              <input
                className="create-input"
                type="text"
                value={this.state.author}
                onChange={this.update('author')} />
            </label>

            <label>
              <p>Description</p>
              <textarea
                className="create-input"
                value={this.state.description}
                onChange={this.update('description')} />
            </label>

            <div className="image-upload">
              Add cover image for the book <br/>
              <input type="file" onChange={this.updateFile}></input>
            </div>
            <img src={this.state.imageUrl} />
            <input className="submit" type="submit" value="Create Book" />
          </form>

        </div>

      </div>
    );
  }
}

export default BookCreate;
