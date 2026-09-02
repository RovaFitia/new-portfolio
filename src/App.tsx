import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import Footer from "./components/navigation/footer/Footer";
import Navbar from "./components/navigation/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Container className="mt-5 flex flex-col gap-4">

                <Typography variant="display" component="h1">
                    The retention engine
                </Typography>
                <Typography variant="h1" component="h1">
                    The retention engine
                </Typography>
                <Typography variant="h2" component="h2">
                    The retention engine
                </Typography>
                <Typography variant="h3" component="h3">
                    The retention engine
                </Typography>
                <Typography variant="h4" component="h4">
                    The retention engine
                </Typography>
                <Typography variant="body" component="p">
                    The retention engine
                </Typography>
                <Typography variant="lead">The retention engine</Typography>
                <Typography variant="body" component="p">
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
                </Typography>
                {/*<div className="flex flex-wrap md:flex-nowrap items-center mt-5 gap-4 ">
                    <Button size="lg" href="https://facebook.com" icon>
                        Book a demo
                    </Button>
                    <Button variant="ghost" size="lg">
                        Book a demo
                    </Button>
                    <Button variant="super" size="lg">
                        Book a demo
                    </Button>
                    <Button icon>Book a demo</Button>
                    <Button variant="ghost">Book a demo</Button>
                    <Button variant="super">Book a demo</Button>
                </div>*/}
            </Container>

            <Footer />
        </>
    );
}

export default App;
