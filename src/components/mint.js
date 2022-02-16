import {NFT_ADDRESS, NFT_ABI} from "../nftConfig"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const BuyForm = () => {

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS)

    const handleBuySubmit = async () => {
        if(account){



            return contract.methods.claim().send({from: account})
            }else {
            alert("Not connected")
        }
    }

    return (
        <div>


            <button onClick={handleBuySubmit} href="#header" className="claim-button">Claim your NFT here</button>
        </div>
    )

}
