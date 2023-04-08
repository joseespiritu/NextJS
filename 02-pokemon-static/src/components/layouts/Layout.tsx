import Head from "next/head";
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element;
    title?: string;
}

export const Layout: React.FC<Props> = ({ children, title = 'PokemónApp' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="José Espíritu" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
