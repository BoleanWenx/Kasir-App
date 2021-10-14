import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Hasil, ListCategories, Menus, NavbarComponent } from './components'
import { API_URL } from './utils/constans'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: "Cemilan"
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menu: []
    })

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    const { menus, categoriYangDipilih } = this.state
    return (
      <div>
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
              <Col>
                <h4>Daftar Produk Kami</h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}