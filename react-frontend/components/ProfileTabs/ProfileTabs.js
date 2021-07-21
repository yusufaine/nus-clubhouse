import {
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
} from "@chakra-ui/react"

import ProfileAboutSection from '../ProfileAboutSection/ProfileAboutSection'
import ProfileScheduledSection from '../ProfileScheduledSection/ProfileScheduledSection'

function ProfileTabs({ user }) {
    return (
        <Tabs isFitted colorScheme='clubhouseorange'>
            <TabList>
                <Tab>About</Tab>
                <Tab>Scheduled</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ProfileAboutSection user={user} />
                </TabPanel>
                <TabPanel>
                    <ProfileScheduledSection />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default ProfileTabs
