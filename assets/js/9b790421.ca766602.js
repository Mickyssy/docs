"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Goerli Indexer Guide",l={unversionedId:"launchpad/guides/goerli-indexer-guide",id:"launchpad/guides/goerli-indexer-guide",title:"Goerli Indexer Guide",description:"This guide is intended to be an end to end walk-through of setting up an Indexer running on the Graph Protocol Testnet on the Ethereum Goerli network.",source:"@site/docs/launchpad/guides/goerli-indexer-guide.md",sourceDirName:"launchpad/guides",slug:"/launchpad/guides/goerli-indexer-guide",permalink:"/launchpad/guides/goerli-indexer-guide",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/guides/goerli-indexer-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Celo Archive Mainnet Node Guide",permalink:"/launchpad/guides/celo-archive-kubernetes-guide"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What we&#39;re going to do",id:"what-were-going-to-do",level:2},{value:"Create the Indexer and Operator Ethereum accounts",id:"create-the-indexer-and-operator-ethereum-accounts",level:2},{value:"Generating mnemonics for your new accounts",id:"generating-mnemonics-for-your-new-accounts",level:2},{value:"Funding our new accounts",id:"funding-our-new-accounts",level:2},{value:"Registering our Indexer and Operator accounts",id:"registering-our-indexer-and-operator-accounts",level:2},{value:"Launching off the pad!",id:"launching-off-the-pad",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goerli-indexer-guide"},"Goerli Indexer Guide"),(0,o.kt)("p",null,"This guide is intended to be an end to end walk-through of setting up an Indexer running on the Graph Protocol Testnet on the Ethereum Goerli network."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"All the ",(0,o.kt)("a",{parentName:"p",href:"../prerequisites"},"Launchpad Prerequisites")," apply, so be sure to read them first."),(0,o.kt)("p",null,"You will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At least one server running Ubuntu 22.04 with keypair authenticated SSH access"),(0,o.kt)("li",{parentName:"ul"},"A web browser with MetaMask installed")),(0,o.kt)("h2",{id:"what-were-going-to-do"},"What we're going to do"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create all the relevant Ethereum accounts, fund them, register them on-chain with the protocol"),(0,o.kt)("li",{parentName:"ol"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"../quick-start"},"Quick Start")," guide to set up our local machine, and then set up our cluster of servers, and finally deploy the Graph Stack"),(0,o.kt)("li",{parentName:"ol"},"Configure DNS, verify ingress and TLS is working"),(0,o.kt)("li",{parentName:"ol"},"Allocate to subgraph deployments"),(0,o.kt)("li",{parentName:"ol"},"Verify that we are serving queries")),(0,o.kt)("h2",{id:"create-the-indexer-and-operator-ethereum-accounts"},"Create the Indexer and Operator Ethereum accounts"),(0,o.kt)("p",null,"We will need to set up two new Ethereum accounts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Indexer account: this account is your Indexer's identity, and is used to stake GRT into the protocol. This account owns your in-protocol GRT. This key should be kept very safe!"),(0,o.kt)("li",{parentName:"ol"},"The Operator account: this account is authorised to perform some operational actions (like managing allocations) on behalf of your Indexer. The key for this account will live on your server(s). The Indexer Software uses this account to automate interactions with the protocol. This account does not own your GRT, but can take actions that put your GRT at risk (e.g. submitting a bad POI could make you liable to slashing). You can replace the Operator account with a new one at any time.")),(0,o.kt)("h2",{id:"generating-mnemonics-for-your-new-accounts"},"Generating mnemonics for your new accounts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://iancoleman.io/bip39/"},"Ian Coleman's BIP39 generator")," is great for quickly generating new mnemonics and their derived accounts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Set the "Coin" to "ETH - Ethereum".'),(0,o.kt)("li",{parentName:"ol"},"Click Generate"),(0,o.kt)("li",{parentName:"ol"},"Take note of: the mnemonic and (optionally, if you follow this guide) all details for the first derived address")),(0,o.kt)("p",null,"Generate two new mnemonics and save their details."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When setting up your Indexer account for mainnet, use a more secure method, like a hardware wallet, for generating your Indexer account.")),(0,o.kt)("h2",{id:"funding-our-new-accounts"},"Funding our new accounts"),(0,o.kt)("p",null,"Both our new accounts will need ETH in order to pay for transaction costs. The Operator account will be used for all automated protocol interactions, so it will need a lot more ETH than the Indexer account. The Indexer account will need to pay for gas to stake GRT into the protocol, and set various metadata and parameters."),(0,o.kt)("p",null,"For the Goeli testnet, there are a number of ETH faucets that can be used to fund your new accounts. You can find various options here: ",(0,o.kt)("a",{parentName:"p",href:"https://faucetlink.to/goerli"},"https://faucetlink.to/goerli")),(0,o.kt)("p",null,"Our Indexer account will also need at least 100,000 Goerli GRT in order to stake in the protocol. If you are a MIPs participant, you should follow the relevant instructions to get that GRT. Otherwise there is a Goerli GRT faucet available in the ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/discord"},"Graph Protocol Discord"),"."),(0,o.kt)("h2",{id:"registering-our-indexer-and-operator-accounts"},"Registering our Indexer and Operator accounts"),(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.thegraph.com"},"The Graph's Testnet Network app")," to register our new accounts with the protocol on-chain."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use MetaMask to import the private key for your Indexer mnemonic's first derived account. This will allow us to transact as our Indexer."),(0,o.kt)("li",{parentName:"ol"},'Navigate to "Indexing" under your profile dropdown menu'),(0,o.kt)("li",{parentName:"ol"},"Click the Stake button and Stake at least 100k GRT (first allowing GRT token access with an approval transaction, followed by the stake transaction)"),(0,o.kt)("li",{parentName:"ol"},'Navigate to "Settings" under your profile dropdown menu, and then to "Operators" in the left hand menu'),(0,o.kt)("li",{parentName:"ol"},"Click the plus symbol, paste in your Operator mnemonic's first derived address, click Add and submit the transaction"),(0,o.kt)("li",{parentName:"ol"},"(optionally) Navigate to other settings to configure profile details")),(0,o.kt)("h2",{id:"launching-off-the-pad"},"Launching off the pad!"),(0,o.kt)("p",null,"Now that our accounts are ready, let's follow the ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," guide to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new repository for our infrastructure"),(0,o.kt)("li",{parentName:"ol"},"Configure our local machine to command our cluster"),(0,o.kt)("li",{parentName:"ol"},"Configure our servers into a Kubernetes cluster"),(0,o.kt)("li",{parentName:"ol"},"Deploy core cluster services and the Graph Indexing stack into our cluster")))}d.isMDXComponent=!0}}]);