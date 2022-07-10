import { FC, ReactElement } from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

interface ILayout {
	children: ReactElement,
}

const Layout: FC<ILayout> = ({ children }) => {

	return (
		<div className="container flex flex-col p-4 mx-auto max-w-5xl motion-safe:animate-fade-in sm:p-8">
			<main className="flex-grow mb-16 min-h-screen sm:motion-safe:animate-slide-down-fade">
				{children}
			</main>
			<NavBar />
      <Footer />
		</div>
	)
}

export default Layout;
