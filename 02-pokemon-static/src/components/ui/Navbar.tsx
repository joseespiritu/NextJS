import Image from "next/image";
import NextLink from "next/link"
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: "flex",
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 50px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </div>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href={"/favorites"} passHref>
                <div style={{ marginRight: '10px' }}>
                    <Text color='white'>Favoritos</Text>
                </div>
            </NextLink>

        </div>
    )
}
