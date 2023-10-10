
import 'bootstrap/dist/css/bootstrap.min.css'

export function Bolos() {
    return (
    <>
        <section className="page-section" id="bolos">
            <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Nossos Bolos</h2>
                <h3 className="section-subheading text-muted">Confira as opções de Bolos para sua festa.</h3>
            </div>

            <table className="table table-hover">
                <thead>
                        <tr>
                            <th>Bolo</th>
                            <th>QTD de Pessoas</th>
                            <th>Item</th>
                            <th>Preços Scrapt</th>
                            <th>Preços Chantininho</th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>1</td>
                            <td>4 a 7</td>
                            <td>Bolo </td>
                            <td>R$ 70,00</td>
                            <td>R$ 90,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>8 a 10</td>
                            <td>Bolo</td>
                            <td>R$ 90,00</td>
                            <td>R$ 120,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>10 a 15</td>
                            <td>Bolo</td>
                            <td>R$ 120,00</td>
                            <td>R$ 140,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>15 a 20</td>
                            <td>Bolo</td>
                            <td>R$ 140,00</td>
                            <td>R$ 160,00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>20 a 25</td>
                            <td>Bolo</td>
                            <td>R$ 170,00</td>
                            <td>R$ 200,00</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>30 a 35</td>
                            <td>Bolo</td>
                            <td>R$ 190,00</td>
                            <td>R$ 230,00</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>40 a 45</td>
                            <td>Bolo</td>
                            <td>R$ 210,00</td>
                            <td>R$ 250,00</td>
                        </tr>
                </tbody>

            </table>

            </div>

        </section>
    </>
    )     
}