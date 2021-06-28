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
        50: "#F5F5F5",
        100: "#F5F5F5",
        200: "#E9E9E9",
        300: "#E9E9E9",
        400: "#D7D7D7",
        500: "#D7D7D7",
        600: "#C4C4C4",
        700: "#C4C4C4",
        800: "#1A202C",
        900: "#1A202C",
    },
    clubhouseblue: {
        50: "#3399FF",
        100: "#1F8FFF",
        200: "#0A85FF",
        300: "#007AF5",
        400: "#0070E0",
        500: "#0066CC",
        600: "#005CB8",
        700: "#0052A3",
        800: "#00478F",
        900: "#003D7C",
    },
    clubhouseorange: {
        50: "#FFB05C",
        100: "#FFA647",
        200: "#FF9C33",
        300: "#FF931F",
        400: "#FF890A",
        500: "#EF7B00",
        600: "#E07400",
        700: "#CC6900",
        800: "#B85F00",
        900: "#A35400",
    }
}

const styles = {
    global: (props) => ({
        body: {
            color: mode("clubhousegrey.900","clubhousegrey.900")(props),
            bg: mode("clubhousegrey.50", "clubhousegrey.900")(props)
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
    baseStyle: {
        color: "clubhouseorange.500"
    }
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
        // solid: {
        //     bg: "clubhousegrey.400",
        //     color: "clubhousegrey.800",
        //     _hover: {
        //         bg: "clubhousegrey.600",
        //         _disabled: {
        //             bg: "clubhousegrey.400",
        //         },
        //     },
        //     _active: { bg: "clubhousegrey.600" },
        // },
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

// MYPETS PORTION

// import { extendTheme } from "@chakra-ui/react"
// import { theme as chakraTheme } from "@chakra-ui/react"

// const fonts = {
//     ...chakraTheme.fonts,
//     // futura: "Futura",
//     // gothamrnd: "GothamRnd",
//     heading: `Inter`,
//     body: `Inter`
// }

// const colors = {
//     ...chakraTheme.colors,
//     mypets: {
//         100: "#ffc400",
//         200: "#ffc400",
//         300: "#ffc400",
//         400: "#ffc400",
//         500: "#ffc400",
//         600: "#ffc400",
//         700: "#ffc400",
//         800: "#ffc400",
//         900: "#ffa000",
//     }
// }

// const config = {
//     initialColorMode: "light",
//     useSystemColorMode: false,
//   }

// const overrides = {
//     ...chakraTheme,
//     fonts,
//     colors,
//     config
// }

// const customTheme = extendTheme(overrides)

// export default customTheme