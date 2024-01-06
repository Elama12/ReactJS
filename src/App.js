import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import Feed from './Feed';

function App() {

const [posts,setPosts] = useState(
  [
    {
      
      id: 1,
      title: "are or do repels provide blacked out except option criticizes",
      month:"July",
      body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
    },
    {
      
      id: 2,
      title: "who is being",
      month:"May",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    },
    {
      
      id: 3,
      title: "she repels troubles as if she were training, whoever she is",
      month:"Jun",
      body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or"
    },
    {
      
      id: 4,
      title: "and he is blinded",
      month:'Aug',
      body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    },
  ]
  )

  const [search,serSearch] = useState('')
  const [searchresult,setSearchResult]=useState([])
  const [postTitle,setPostTitle] = useState('')
  const [postBody,setPostBody]= useState('')

  useEffect(()=>{
    const filterResults = posts.filter((post)=>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase().includes(search.toLowerCase()))
    )
    setSearchResult(filterResults.reverse())
  },[posts,search])


  const handleSubmit = (e) =>{

    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    
    const newpost = { id, title:postTitle, body:postBody}

    const allPosts = [...posts,newpost]

    setPosts(allPosts)

    setPostBody('')
    setPostTitle('')
  }

  const handleDelete = () =>{
    
  }


  return (
    <div className="App">
      <Header
      title='Social Media App'
      />
      <Nav
      search={search}
      setSearch={serSearch}
      />
     <Routes>

      <Route path='/' element={<Home posts={searchresult} 
      /> }/>

      <Route path='/newpost'> 
       <Route index element={ <NewPost
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
      /> } />
      <Route path='id' element={<PostPage
      posts={posts} handleDelete={handleDelete}
      /> }
      />
      </Route>
      {/* <PostPage /> */}
      <Route path='/about' element={<About /> } />
    </Routes>


      {/* <Feed /> */}
      

      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
      
    </div>
  );
}

export default App;
