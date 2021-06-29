var React = require('react');
var ReactDOM = require('react-dom');
import {Editor, EditorState, RichUtils} from 'draft-js';

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

class MyEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      ID: null,
    };
    this.onChange = (editorState) => this.setState({editorState});
    // this.focus = () => this.refs.editor.focus();
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  render() {
    return (
        <div>
          <div>Editor View</div>
          <button>Back to Documents Portal</button>
          <div id="content" style={{textAlign: "center"}}>
            <div className='group' style={{marginBottom: '1em' }}>
              <h2>Sample Document</h2>
              <div id="ID">Shareable Document ID: {this.ID}</div>
              <button>Save Changes</button>
            </div>
            <div className="group" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div id="toolbar">
                <button onClick={() => this._onBoldClick()}>BOLD</button>
                <button>ITALICS</button>
                <button>UNDERLINE</button>
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleFontColor()}>Font Color</button>
                  <div className="dropdownContent" id="fontColor">
                    <a href="#">Red</a>
                    <a href="#">Blue</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleFontSize()}>Font Size</button>
                  <div className="dropdownContent" id="fontSize">
                    <a href="#">10</a>
                    <a href="#">12</a>
                  </div>
                </div>
                <div id="textAlignment">
                  <button>LEFT ALIGN</button>
                  <button>CENTER ALIGN</button>
                  <button>RIGHT ALIGN</button>
                </div>
                <div id="listing">
                  <button>BULLET LIST</button>
                  <button>NUMBERED LIST</button>
                </div>
              </div>
              <div style={styles.editor}>
                <Editor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  placeholder="What's on your mind...?"
                  ref="editor"
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const styles = {
  editor: {
    padding: "0.3em",
    display: "block",
    height: "50vh",
    width: "80vw",
    marginTop: "0.5em",
    border: "1px solid black",
    fontSize: 18,
    fontFamily: "cursive",
    borderRadius: "0.05em",
  }
}


ReactDOM.render(<MyEditor />,
   document.getElementById('root'));
