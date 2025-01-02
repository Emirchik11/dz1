import './App.css';
function Title () {
    return (
        <div>
            <h2>I am Title</h2>
        </div>
    )
}

function Footer () {
    return (
        <div>
            <Title/>
            <h2>I am Footer</h2>
        </div>
    )
}



function Content () {
    return (
        <div>
            <Title/>
            <h2>I am Content</h2>
        </div>
    )
}



function Header () {
    return (
        <div>
            <Title/>
            <h2>I am Header</h2>
        </div>
    )
}
function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
