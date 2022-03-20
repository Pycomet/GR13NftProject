import React from "react";
import {
    Tab,
    Text,
    Divider,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
} from '@chakra-ui/react'
import CollectionPanel from "./CollectionPanel";
import { getChainIds } from '../../server/utils'


const CollectionTab: React.FC = () => {
    
    const data = getChainIds()
    const [tabIndex, setTabIndex] = React.useState(0)
    
    return (
        <Tabs variant='soft-rounded' colorScheme='blue' onChange={(index) => setTabIndex(index)} isLazy>
            <TabList w={"80vw"} justifyContent="center">
                {data.map((tab, id) => (
                    <>
                    <Tab key={tab} fontSize={'lg'} fontWeight={500} onClick={() => console.log(parseInt(tab.id))}>{tab.label}</Tab>
                    </>
                ))}
            </TabList>
            <Divider />
            <TabPanels>
                <TabPanel>
                    <CollectionPanel chainId={1} />
                </TabPanel>
                <TabPanel><CollectionPanel chainId={137} /></ TabPanel> 
                <TabPanel><CollectionPanel chainId={43114} /></ TabPanel> 
                <TabPanel><CollectionPanel chainId={1285} /></ TabPanel> 
                <TabPanel><CollectionPanel chainId={250} /></ TabPanel> 
                <TabPanel><CollectionPanel chainId={42161} /></ TabPanel> 
                <TabPanel><CollectionPanel chainId={336} /></ TabPanel> 
            </TabPanels>
        </Tabs>
    )
};

export default CollectionTab;