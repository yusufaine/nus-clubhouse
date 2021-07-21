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
        <Tabs colorScheme='clubhousegrey' mt='16px' variant='unstyled'>
            <TabList justifyContent='center' fontWeight='bold'>
                <Tab _selected={{
                    borderBottomWidth: "1px", 
                    borderBottomColor: "clubhouseorange.400",
                    textColor: "clubhouseorange.400"
                }}>
                    About
                </Tab>
                <Tab _selected={{
                    borderBottomWidth: "1px", 
                    borderBottomColor: "clubhouseorange.400",
                    textColor: "clubhouseorange.400"
                }}>
                    Scheduled
                </Tab>
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
