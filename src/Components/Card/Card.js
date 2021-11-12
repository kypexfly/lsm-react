import './Card.css'

function Card({ bg, buttonName, content, footer }) {

    return (
        <div className="card">
            <header className="card-header" style={{ backgroundImage: `url(${bg})` }}>
            </header>
            <div className="container">

                {content}

            </div >

            <footer className="w3-container w3-purple">
                <div className="container">
                    {footer}
                </div>
            </footer>

        </div >
    )
}

export default Card;