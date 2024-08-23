import Feed from "@components/Feed"

const Home = () => {
    return (
        <div className="flex flex-center flex-col">
            <h1 className="head_text text-center">
                Unleash Creativity
                <br />
                <span className="violet_gradient">with Expert AI Prompts</span>
            </h1>
            <p className="desc text-center pt-3">Step into Promptora, your go-to hub for discovering, storing, and sharing innovative AI prompts crafted by a community of enthusiasts.</p>
            
            <Feed />
        </div>
    )
}

export default Home