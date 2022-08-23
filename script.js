function App(){ 
    //Start Of Preview Maximize Settings
    const[MaxPrevView, setMaxPrevView] = React.useState(false);
    const[PrevText, setPrevText] = React.useState("Enter Full Screen");
    function HandlePrevClick() {
      var welcome = document.getElementById("Welcome-section");
      var element = document.getElementById("textareaSection");
      var Fullelement = document.getElementById("previewSection");
      if(MaxPrevView == false){
        setMaxPrevView(true);
        setPrevText ("Exit Full Screen");
        welcome.classList.add("hidden"); 
        element.classList.add("hidden");
        Fullelement.classList.add("full");
      } 
      else{
        setMaxPrevView(false);
        setPrevText ("Enter Full Screen");
        welcome.classList.remove("hidden");
        element.classList.remove("hidden");
        Fullelement.classList.remove("full");
      } 
    }
    //End of Preview Maximize Settings
    //Start Of Editor Maximize Settings
    const[MaxEditView, setMaxEditView] = React.useState(false);
    const[EditText, setEditText] = React.useState("Enter Full Screen");
    function HandleEditClick() {
      var welcome = document.getElementById("Welcome-section");
      var element = document.getElementById("previewSection");
      var Fullelement = document.getElementById("message");
      if(MaxEditView == false){
        setMaxEditView(true);
        setEditText ("Exit Full Screen"); 
        element.classList.add("hidden");
        welcome.classList.add("hidden");
        Fullelement.classList.add("full");
      } 
      else{
        setMaxEditView(false);
        setEditText ("Enter Full Screen");
        element.classList.remove("hidden");
        welcome.classList.remove("hidden");
        Fullelement.classList.remove("full");
      } 
    }
    //End of Editor Maximize Settings
   const defaultText=`#Welcome to my MarkDown Previewer!<br>
##This project was made for a FreeCodeCamp course.
###For more information on FreeCodeCamp click [here](https://www.freecodecamp.org/)
###If you wish to build a website like this you should really practice basic JavaScript first!
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
###This will print hi world 10 times!
###So in order to start with web development you have to study:
1. HTML
2. CSS
3. javaScript
    - Rudy
    - React
> This should be a quote

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
**Made by Daniel**
   `;

   const [text, setText] = React.useState(defaultText);
 
  function handleChange(event) {
    setText(event.target.value);
  };
  var converter = new showdown.Converter();
  var html = converter.makeHtml(text);

    return(
      <div id="return">
          <div id="textareaSection" class="previews">
            <div id="editor" class="legends">
              <h2>Editor</h2>
              <button id="EditMaxButton" onClick={HandleEditClick}>{EditText}</button>
              </div>
          <textarea id="message" name="message" rows="10" cols="35" onChange={handleChange}>{defaultText}</textarea>
          </div>
          <div id="previewSection" class="previews">
            <div id="legend" class="legends">
                <h2>Preview</h2>
                <button id="PrevMaxButton" onClick={HandlePrevClick}>{PrevText}</button>
            </div>
          <div id="preview"   dangerouslySetInnerHTML={{__html: html}} />
          </div>
      </div>
          
    )

}
ReactDOM.render(<App />, document.querySelector("#area"));


