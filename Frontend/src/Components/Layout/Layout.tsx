import Content from "./Content/Content";
import Header from "./Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header />
            <Content />
        </div>
    );
}

export default Layout;
