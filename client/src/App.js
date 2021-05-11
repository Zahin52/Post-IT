import './App.css';
import Posts from "./components/posts"
import PostForm from "./components/postForm"
// import postForm from './components/postForm';




function App() {
    

    return (
        <div style={{height:"100vh"}} className="p-4 d-flex flex-column flex-md-row w-100 justify-content-around align-items-center">
            <Posts />
            <PostForm />
        </div>
    );
}

export default App;
