import {
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
// import { useWeb3React } from "@web3-react/core";
import { useMoralis } from "react-moralis";
// import { connectors } from "../../connectors";

import mmIcon from '../../assets/mm.png';
import wcIcon from '../../assets/wc.png';


export default function SelectWalletModal({ isOpen, closeModal }) {
  // const { activate } = useWeb3React();
  const {
    authenticate  
  } = useMoralis();

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  const authWalletConnect = async () => {
    setProvider("walletconnect")
    const user = authenticate({
        provider: window.localStorage.getItem("provider"),
        chainId: 1,
        mobileLinks: [
            "metamask",
            "trust",
            "coinbase",
            "rainbow",
            "argent",
            "imtoken",
            "pillar",
        ],
        signingMessage: "Connect To MintWave",
    });
    console.log(user);
  }


  const authMetamask = async () => {
    setProvider("metamask")
    const user = authenticate({
        provider: window.localStorage.getItem("provider"),
        chainId: 1,
        signingMessage: "Connect To MinWave",
    });
    console.log(user);
  }


  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent w="300px">
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: "none"
          }}
        />
        <ModalBody paddingBottom="1.5rem">
          <VStack>
            <Button
              variant="outline"
              onClick={async () => await authWalletConnect()}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src={wcIcon}
                  alt="Wallet Connect Logo"
                  width={26}
                  height={26}
                  borderRadius="3px"
                />
                <Text>Wallet Connect</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              onClick={async () => await authMetamask()}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src={mmIcon}
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Metamask</Text>
              </HStack>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
