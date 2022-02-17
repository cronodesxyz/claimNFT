import { useEthers } from '@usedapp/core'
import "../css/styles.css";



export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined




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
