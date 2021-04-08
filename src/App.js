import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Contact 
          name="Elmer Lee"
          avatar="https://randomuser.me/api/portraits/men/31.jpg"
          online/>
          <Contact 
          name="Joan Porter"
          avatar="https://randomuser.me/api/portraits/women/87.jpg"
          />
          <Contact 
          name="Gilbert Crawford"
          avatar="https://randomuser.me/api/portraits/men/36.jpg"
          online/>
    </div>
  );
}

export default App;
