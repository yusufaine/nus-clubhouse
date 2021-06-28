import {
    useContext 
} from 'react'
import { 
    Box,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    useToast,
} from "@chakra-ui/react"

import AuthContext from '../../context/AuthContext'
import UserLoginForm from '../UserLoginForm/UserLoginForm'
import UserSignupForm from '../UserSignupForm/UserSignupForm'

function LoginRegisterForm() {
    const { loginUser, registerUser } = useContext(AuthContext)
    const toast = useToast()
    const tabs = [
        "Log in",
        "Create account"
    ]

    const handleUserLogin = (values, actions) => {
        try {
            loginUser(values, toast, actions)
        } catch (err) {
            console.error(err)
        }
    }

    const handleUserSignup = (values, actions) => {
        try {
            registerUser(values, toast, actions)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Box>
            <Tabs isFitted colorScheme='clubhouseorange'>
                <TabList>
                    {tabs.map((tabHeader, i) => (
                        <Tab key={i}>{tabHeader}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel  px={0}>
                        <UserLoginForm
                            handleSubmit={handleUserLogin}
                        />
                    </TabPanel>
                    <TabPanel  px={0}>
                        <UserSignupForm
                            handleSubmit={handleUserSignup}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default LoginRegisterForm
