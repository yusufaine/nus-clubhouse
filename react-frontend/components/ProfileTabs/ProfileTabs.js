import {
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
} from "@chakra-ui/react"

import ProfileAboutSection from '../ProfileAboutSection/ProfileAboutSection'
import ProfileScheduledSection from '../ProfileScheduledSection/ProfileScheduledSection'

function ProfileTabs({ numFollowers, numFollowing }) {
    return (
        <Tabs colorScheme='clubhouseorange' mt='24px'>
            <TabList justifyContent='center' fontWeight='bold'>
                <Tab>About</Tab>
                <Tab>Scheduled</Tab>
            </TabList>
            <TabPanels>
                <TabPanel px={0}>
                    <ProfileAboutSection numFollowers={numFollowers} numFollowing={numFollowing} />
                </TabPanel>
                <TabPanel>
                    <ProfileScheduledSection />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default ProfileTabs
