import Help from "@components/Help";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
    title: 'Promptora',
    description: "Share your AI prompts",
    icons: {
        icon: '/assets/images/logo.png', 
    },
};


const RootLayout = ({ children }) => {
    return(
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>

                    <main className="app">
                        <Navbar />
                        {children}
                    </main>

                    <div className="fixed bottom-10 right-10 bg-[#F5F5F5] shadow-xl rounded-full p-2">
                        <Help/>
                    </div>
                </Provider>
            </body>
        </html>
    )
};

export default RootLayout;