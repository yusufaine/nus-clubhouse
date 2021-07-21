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
        <Tabs isFitted colorScheme='clubhouseorange'>
            <TabList>
                <Tab>About</Tab>
                <Tab>Scheduled</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
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
