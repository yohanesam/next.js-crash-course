import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Head><title>BitzPrice</title></Head>
        <link rel="stylesheet" href="http://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
        
    </div>
);

export default Layout;