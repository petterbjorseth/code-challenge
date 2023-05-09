import { Component } from "react";
import styles from '../styles/Home.module.css';


class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <a
                    href="/"
                    >
                    <img src="/code.png" alt="Cooooodeeeee" className={styles.logo} width="700" height="100" />
                    </a>
                </header>

                <style jsx>{`
                    header {
                    width: 100%;
                    height: 10vh;
                    border-bottom: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    top: 0;
                    }
                    header img {
                    margin-left: 0.5rem;
                    height: 90%;
                    }
                    header a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                    height: 100%;
                    }
                    code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                    }
                `}</style>
            </>
        )
    }
}


export default Header;