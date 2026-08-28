import { Container } from "@/components/layout/Container";
import Button from "@/components/Button";

function App() {
    return (
        <div>
            <Container className="mt-5 flex flex-col gap-4">
                <h1 className="text-7xl font-solar-md">The retention engine</h1>
                <h2 className="text-5xl font-pixel">This is a heading</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis quis non, ab impedit sint eum, aliquid, fugiat
                    sunt necessitatibus vitae voluptates corporis culpa fugit.
                    Nesciunt alias ratione libero soluta in sint, fugit
                    architecto officia expedita deserunt fugiat quas debitis
                    porro, distinctio quae ducimus dolorem natus! Ducimus eos
                    similique veniam veritatis incidunt, qui delectus quas natus
                    labore sit quibusdam quia officiis consequuntur explicabo
                    nemo? Qui, ut veniam, facere iure id distinctio animi
                    repellat, ab harum consequatur mollitia. Officiis
                    consequatur suscipit quaerat eligendi sequi autem nihil qui
                    animi soluta pariatur, ipsum facilis explicabo quisquam
                    aliquam porro reiciendis error debitis non enim illum.
                </p>
                <div className="flex items-center mt-5 gap-4">
                    {/*<button className="px-5 py-[8px] border text-md border-gray-300 hover:border-text bg-gray-300 hover:bg-text text-text hover:text-white transition-colors duration-300 ease-in-out rounded-full cursor-pointer">Contact me</button>
                    <button className="px-5 py-9 border text-sm border-primary-400 hover:border-text bg-primary-400 hover:bg-text text-text hover:text-white transition-colors duration-300 ease-in-out rounded-full cursor-pointer">Contact me</button>
                    <button className="px-10 py-4 text-lg rounded-full border border-text hover:border-primary-400 bg-text hover:bg-primary-400 text-white hover:text-text">
                        Click me
                    </button>*/}
                    <Button size="lg" href="https://facebook.com" icon>Book a demo</Button>
                    <Button variant="ghost" size="lg">Book a demo</Button>
                    <Button variant="super" size="lg">Book a demo</Button>
                    <Button icon >Book a demo</Button>
                    <Button variant="ghost">Book a demo</Button>
                    <Button variant="super">Book a demo</Button>
                </div>
            </Container>
        </div>
    );
}

export default App;
