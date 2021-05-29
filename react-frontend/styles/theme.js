import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const fonts = {
    ...chakraTheme.fonts,
    // futura: "Futura",
    // gothamrnd: "GothamRnd",
    heading: `Inter`,
    body: `Inter`
}

const colors = {
    ...chakraTheme.colors,
    clubhousegrey: {
        100: "#F5F5F5",
        200: "#F5F5F5",
        300: "#E9E9E9",
        400: "#E9E9E9",
        500: "#D7D7D7",
        600: "#D7D7D7",
        700: "#C4C4C4",
        800: "#C4C4C4",
        900: "#1A202C",
    },
    clubhouseblue: {
        100: "#003D7C",
        200: "#003D7C",
        300: "#003D7C",
        400: "#003D7C",
        500: "#003D7C",
        600: "#003D7C",
        700: "#003D7C",
        800: "#003D7C",
        900: "#003D7C",
    },
    clubhouseorange: {
        100: "#EF7B00",
        200: "#EF7B00",
        300: "#EF7B00",
        400: "#EF7B00",
        500: "#EF7B00",
        600: "#EF7B00",
        700: "#EF7B00",
        800: "#EF7B00",
        900: "#EF7B00",
    }
}

const styles = {
    global: (props) => ({
        body: {
            color: mode("clubhousegrey.900","clubhousegrey.900")(props),
            bg: mode("clubhousegrey.100", "clubhousegrey.900")(props)
        },
        a: {
            color: mode("clubhouseorange.100", "clubhouseorange.100")(props),
            _hover: {
                textDecoration: "underline",
            },
        }
    })
}

const Link = {
    baseStyle: (props) => ({
        color: mode("clubhouseorange.100", "clubhouseorange.100")(props)
    })
}

const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: "bold",
        // textTransform: "uppercase",
        borderRadius: "lg", // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        // sm: {
        //     fontSize: "sm",
        //     px: 4, // <-- px is short for paddingLeft and paddingRight
        //     py: 3, // <-- py is short for paddingTop and paddingBottom
        // },
        md: {
            fontSize: "md",
            px: 6, // <-- these values are tokens from the design system
            py: 6, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        // outline: {
        //     border: "2px solid",
        //     borderColor: "purple.500",
        //     color: "purple.500",
        // },
        solid: {
            bg: "clubhousegrey.500",
            color: "clubhousegrey.900",
            _hover: {
                bg: "clubhousegrey.700",
                _disabled: {
                    bg: "clubhousegrey.500",
                },
            },
            _active: { bg: "clubhousegrey.700" },
        },
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "solid",
    },
}

const overrides = {
    ...chakraTheme,
    fonts,
    colors,
    styles,
    components: {
        Button,
        Link
    }
    
}

const customTheme = extendTheme(overrides)

export default customTheme