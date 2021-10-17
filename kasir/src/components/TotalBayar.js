import React, { Component } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class TotalBayar extends Component {


	render() {

		const totalBayar = this.props.keranjangs.reduce(function (result, item) {

			return result + item.total_harga;
		}, 0)

		return (

			<div className="fixed-bottom" >
				<Row>
					<Col md={{ span: 3, offset: 9 }} className="px-4">
						<h4>Totaal harga :<strong className="float-right mr-2">Rp. {numberWithCommas(totalBayar)}</strong></h4>
						<Button vaariant="primary" block className="mb-2 mt-2 mr-2">
							<FontAwesomeIcon icon={faShoppingCart} /><strong>Bayar</strong>
						</Button>
					</Col>
				</Row>
			</div>

		)
	}
}