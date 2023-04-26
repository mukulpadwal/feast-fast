import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card } from '../components/Card'

const Home = () => {

  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [search, setSearch] = useState("");

  const loadItemData = async () => {
    try {
      const URL = "http://localhost:5000/api/getdata";
      const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      });

      let jsonData = await response.json();
      setFoodItems(jsonData);

    } catch (error) {
      console.log(error);
    }
  }

  const loadCategoryData = async () => {
    try {
      const URL = "http://localhost:5000/api/getcategories";
      const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      });

      let jsonData = await response.json();
      setFoodCategories(jsonData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadItemData();
    loadCategoryData();
  }, []);

  return (
    <div>
      <div> <Navbar /> </div>
      <div>
        <div style={{ objectFit: "contain !important" }}>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner" id='carousel'>
              <div className='carousel-caption' style={{ zIndex: 2 }}>
                <div className="d-flex justify-content-center" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </div>
              </div>
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/800x500/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/800x500/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/800x500/?cuisine" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container mt-3'>
        {
          foodCategories !== []
            ?
            foodCategories.map((category) => {
              return (
                <div className='row mb-3' key={category._id}>
                  <div key={category._id} className='fs-3'>
                    {category.CategoryName}
                  </div>
                  <hr />
                  {
                    foodItems !== []
                      ?
                      foodItems.filter((item) => { return (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())) }).map((filteredItem) => {
                        return (
                          <div className='col-12 col-md-6 col-lg-3'>
                            <Card key={filteredItem._id} data={filteredItem} />
                          </div>
                        )
                      })
                      : ""
                  }
                </div>
              )
            })
            :
            ""
        }
      </div>
      <div> <Footer /> </div>
    </div>
  )
}

export default Home;
