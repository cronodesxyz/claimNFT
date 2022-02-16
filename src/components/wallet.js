import { useEthers } from '@usedapp/core'
import "../css/styles.css";
import {NFT_ADDRESS, NFT_ABI} from "../nftConfig"
import Web3 from "web3"


export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined


    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS)


    const handleActiveSubmit = async () => {
        activateBrowserWallet()


    }


    return (


        <div className="">
          {isConnected ? (
                    <button  className="" href="#header" onClick={deactivate}>
                        Disconnect
                    </button>
                    ) : (
                        <button  className="" href="#header" onClick={handleActiveSubmit}>
                        Connect
                        </button>
                    )
                }
        </div>
      )
}
