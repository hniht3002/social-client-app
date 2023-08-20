import { registered } from "@/data/GlobalState";
function Home() {
    if(!registered) {
        return (<h1>Register page </h1>)
    }

    return <h1>Home page</h1>
}

export default Home;