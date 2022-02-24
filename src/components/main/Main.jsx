import "./Main.css";
// import hello from "../../assets/hello.svg"
import Chart from "../charts/Chart";
import { useEffect, useState } from "react";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    
    const apiCall = (url, consecuencia) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => consecuencia(data))
          .catch((e) => console.log(e));
      }
    
    useEffect(()=> {
        apiCall("https://capital-sushi.herokuapp.com/api/products", setProducts);
        apiCall("https://capital-sushi.herokuapp.com/api/users", setUsers);
        apiCall("https://capital-sushi.herokuapp.com/api/categories", setCategories);
    },[])

    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    { <img src= "/imagesindex.jpeg" alt=""/> }
                    <div className="main__greeting">
                        <h1>Dashboard Capital Sushi</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">PRODUCTOS</p>
                            <span className="font-bold text-title">{products.length}</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">USUARIOS</p>
                            <span className="font-bold text-title">{users.length}</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">CATEGORÍAS</p>
                            <span className="font-bold text-title">{categories.length}</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Ultimo Producto Listado</h1>
                                <p>Capital Federal, Argentina</p>
                            </div>
                            <div className="imagen-product">
                                {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src="" alt=" Ultimo producto "/> */}
                                <h1>{products[0].title}</h1>
                                <p>{products[0].prod_description}</p>
                                <p>{products[0].price}</p>
                            </div>                       
                        </div>
                    </div>
                    
                    {/* <div className="charts__right">
                    
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Capital Federal, Argentina</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$0</p>
                            </div>

                            <div className="card2">
                                <h1>Sales</h1>
                                <p>0</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>0</p>
                            </div>

                            <div className="card4">
                                <h1>Orders</h1>
                                <p>0</p>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <Chart />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main;