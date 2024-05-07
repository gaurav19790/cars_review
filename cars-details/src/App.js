
import './App.css';
import { Banner, Footer, Header, List,Cards, FindCars } from './components';


function App() {
  const data=[
    {"title":"design",
      "photo":"https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/10/Dodge-Challenger-Demon-1.jpg",
      "header":"Slider 01",
      "para":"love the car drive the fast"
    },
    {"title":"design",
      "photo":"https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "header":"Slider 02",
      "para":"love the car drive the fast"
    },
    {"title":"design",
      "photo":"https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "header":"Slider 03",
      "para":"love the car drive the fast"
    },
    {"title":"design",
      "photo":"https://images.unsplash.com/photo-1608340821332-3a73fadd890c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "header":"Slider 04",
      "para":"love the car drive the fast"
    },
    {"title":"design",
      "photo":"https://images.unsplash.com/photo-1573074556015-71d2140a6372?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "header":"Slider 05",
      "para":"love the car drive the fast"
    },
    {"title":"design",
    "photo":"https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/10/Dodge-Challenger-Demon-1.jpg",
    "header":"Slider 01",
    "para":"love the car drive the fast"
  },
  {"title":"design",
    "photo":"https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "header":"Slider 02",
    "para":"love the car drive the fast"
  },
  {"title":"design",
    "photo":"https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "header":"Slider 03",
    "para":"love the car drive the fast"
  },
  {"title":"design",
    "photo":"https://images.unsplash.com/photo-1608340821332-3a73fadd890c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "header":"Slider 04",
    "para":"love the car drive the fast"
  },
  {"title":"design",
    "photo":"https://images.unsplash.com/photo-1573074556015-71d2140a6372?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "header":"Slider 05",
    "para":"love the car drive the fast"
  },
  ]
  return (
    <div className="App">
    <Header/>
     {/* banner */}
      <Banner data={data}/>
<div className=' ml-3'>
 
        <List/>
        <FindCars/>
     <Cards data={data}/>
     <Cards data={data}/>
</div>
        
  <Footer/>
    </div>
  );
}

export default App;
