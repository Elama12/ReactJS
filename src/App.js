import logo from './logo.svg';
import './index.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect, useRef } from 'react';
import Additem from './Additem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {


  const inputRef = useRef();
  
  const API = 'http://localhost:3500/items';

  const [items,setItems] = useState([]);

  const [newItem,setNewItem] = useState("");
  const [search,setSearch] = useState('');
  const [isloading,setIsloading] = useState(true)


  useEffect(()=>{
    const fetchItems = async() => {
      try{
        const response = await fetch(API);
        if(!response.ok) throw Error("Data Not Received")
        console.log(response)
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems);
      }
      catch(err){
        console.log(err.stack)
      }
      finally{
        setIsloading(false)
      }
    } 
    setTimeout(()=>{
      (async () => await fetchItems()) ()
    },3000)

  },[])

    const addItem = async(item) =>{
      const id = items.length ? items[items.length - 1].id +1 : 1;
      const newItem = {id, checked:false,item};
      const listItems = [...items,newItem]
      setItems(listItems)
      // localStorage.setItem("todo_list",JSON.stringify(listItems))


      const postOptions={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newItem)
      }
      const result = await apiRequest(API,postOptions);
    

    }

    const handleCheck = async(id) =>{
        const listItems = items.map((item)=> item.id===id ? {...item,checked:!item.checked} : item  
        )
        setItems(listItems)
        // localStorage.setItem("todo_list",JSON.stringify(listItems))

        const myItem = listItems.filter((item)=>item.id===id)

        const updateOptions={
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({checked:myItem[0].checked})
        }

        const reqApi = `${API}/${id}`

      const result = await apiRequest(reqApi,updateOptions);

    }

    const handleDelete = async(id) =>{

      const deleteItems = items.filter((item)=> item.id !== id)
      setItems(deleteItems)
      // localStorage.setItem("todo_list",JSON.stringify(deleteItems))

      const deleteOption = {method:'DELETE'}

      const reqApi = `${API}/${id}`
      const result = await apiRequest(reqApi,deleteOption);

    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem("");
    }

  return (
    <div className="App">
      <Header  title="Elamaran_List" />
      <Additem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <main>
        {isloading && <p>{`Your Data is Loading`}</p>}
      {!isloading && <Content
        items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}      
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
