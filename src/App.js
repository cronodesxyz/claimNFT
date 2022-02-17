import './css/styles.css';
import './css/App.css';
import {Wallet} from "./components/wallet";
import {BuyForm} from "./components/mint";
import logo from "./assets/logo.png";
import CroNodeFT from "../src/assets/CroNodeFT.mp4"




function App() {


  return (
    <div className="App">


      <body>

        <div id="imgContainer">
          <img id="logo" src={logo} alt="Cronodes Logo"/>
        </div>

        <div className='nav'>
      <div className='menuItems'>
                <a href="https://cronodes.xyz" target="_blank" rel="noreferrer noopener">HOME</a>
                <a href='https://cronodes.app' target="_blank" rel="noreferrer noopener">DAPP</a>
                <a href="https://dexscreener.com/cronos/0x3ca50d07b1cfb4a4e61ee8d00c2ef1af6e42cee8" target="_blank" rel="noreferrer noopener">CHART</a>
              </div>

      </div>

        <div id="pgContent">

        <div id="claimBox">
            <p className="Claim-text" ><span id="minted"></span>/10000</p>
            <div className="row row-cols-2">
                <div className="col">
                <Wallet/>
                </div>
                <div className="col">
                    <BuyForm/>
                    <h3 className='clickOnce'> CLICK ONLY ONE TIME </h3>
                </div>


        <video className="video-mask" src={CroNodeFT} width="350" height="350" loop muted autoPlay="true" />

      

          

            </div>
          </div>

          <div className='nftInfo'>

            <h2 className='headInfo'>CroNodeFT</h2>
            
      <p class="info">A collectors item, a loyalists badge, and a perk for users! <br/>
            <br/>
        The initial utility for this NFT will be that users who hold a <br/>  NFT will
        have their claim tax reduced by half so from 10% to 5%!<br/>
        <br/>
        Cool thing about this is we can incorporate other utilities
        as we grow! Also its a good way to track a giveaway…<br/>
        <br/>
        There were 10,000 unique NFTs generated. 1 NFT costs 100 CRO to mint.
    </p>
      </div>
        </div>

        <div className='spacer'></div>




    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    
    </div>

  );
}

export default App;
