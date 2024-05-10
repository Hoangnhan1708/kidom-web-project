import Footer from './Footer';

function FooterOnly({ children }) {
    return (
        <div>
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default FooterOnly;
