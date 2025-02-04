import { Chains } from "./chains";

export function getChainIds () {
    const chainData = [...Chains]
    const ids = []

    chainData.map((each) => (
        ids.push({
            id: each.id,
            label: each.label
        })
    ))

    return ids
}


export const truncateText = str =>  {
    return str.slice(0, 4) + "..." + str.slice(37)
}



// Pulls the wallet current balance withb web3
export const getWalletBalance = address => {

    // use web3 library
    return address
}
