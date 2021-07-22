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
            <TabList justifyContent='space-evenly'>
                <Tab 
                    _selected={{ 
                        borderBottomColor: "clubhouseorange.400",
                        textColor: "clubhouseorange.400"
                    }}
                    borderBottomWidth="2px"
                    borderBottomColor='clubhousegrey.50'
                    fontWeight='bold'
                    fontSize='sm'
                    mr='12px'
                >
                    About
                </Tab>
                <Tab 
                    _selected={{ 
                        borderBottomColor: "clubhouseorange.400",
                        textColor: "clubhouseorange.400"
                    }}
                    borderBottomWidth="2px"
                    borderBottomColor='clubhousegrey.50'
                    fontWeight='bold'
                    fontSize='sm'
                >
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
