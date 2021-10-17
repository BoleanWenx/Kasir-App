import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'

export default class Sukses extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                <Image src="assets/images/sukses.png" width="600px" />
                <h2>Sukses</h2>
                <p>Terima Kasih telah memesan produk kami.</p>
                <Button variant="primary" as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}


