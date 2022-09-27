---
sidebar_position: 1
description: desc
---

# MIPs FAQs 

### 1. Is it possible to generate a valid proof of indexing (POI) even if a subgraph has failed? 

Yes, it is indeed.

For context, the arbitration charter, [learn more about the charter here](https://hackmd.io/@4Ln8SAS4RX-505bIHZTeRw/BJcHzpHDu#Abstract), specifies the methodology for generating a POI for a failed subgraph.

A community member, [SunTzu](https://github.com/suntzu93), has created a script to automate this process in compliance with the arbitration charter's methodology. Check out the repo [here](https://github.com/suntzu93/get_valid_poi_subgraph).

### 2. Which chain will the MIPs program incentivise first?

The first chain that will be supported on the decentralized network is Gnosis Chain! Formerly known as xDAI, Gnosis Chain is an EVM-based chain. Gnosis Chain was selected as the first given its user-friendliness of running nodes, Indexer readiness, alignment with The Graph and adoption within web3.

### 3. How will new chains be added to the MIPs program?

New chains will be announced throughout the MIPs program, based on Indexer readiness, demand, and community sentiment. Chains will firstly be supported on the testnet and, subsequently, a GIP will be passed to support that chain on mainnet. Indexers participating in the MIPs program will choose which chains they are interested in supporting and will earn rewards per chain, in addition to earning query fees and indexing rewards on the network for serving subgraphs. MIPs participants will be scored based on their performance, ability to serve network needs, and community support.

### 4. How will we know when the network is ready for a new chain?

The Graph Foundation will be monitoring QoS performance metrics, network performance and community channels to best assess readiness. The priority is ensuring the network meets performance needs for those multi-chain dapps to be able to migrate their subgraphs.

### 5. How are rewards divided per chain?

Given that chains vary in their requirements for syncing nodes, and they differ in query volume and adoption, rewards per chain will be decided at the end of that chain's cycle to ensure that all feedback and learnings are captured. However, at all times Indexers will also be able to earn query fees and indexing rewards once the chain is supported on the network.


### 6. What if I don’t want to support all chains in the MIPs program?

You can run whichever nodes you want! The goal of MIPs is to bootstrap Indexers to support the chains they want to index data for and the web3 ecosystems they are interested in supporting.

### 7. When will rewards be distributed?

MIPs rewards will be distributed per chain once performance metrics are met and migrated subgraphs are supported by those Indexers. Look out for info about the total rewards per chain mid-way through that chain's cycle.

### 8. How does scoring work?

Indexers will compete for rewards based on scoring throughout the program on the leaderboard. Program scoring will be based on:

**Subgraph Coverage**

- Are you providing maximal support for subgraphs per chain?

- During MIPs, large Indexers are expected to stake 50%+ of subgraphs per chain they support.

**Quality Of Service**

- Is the Indexer serving the chain with good Quality of Service (latency, fresh data, uptime, etc.)? 

- Is the Indexer supporting dapp developers being reactive to their needs? 

Is Indexer allocating efficiently, contributing to the overall health of the network?

**Community Support**

- Is Indexer collaborating with fellow Indexers to help them get set up for multi-chain?

- Is Indexer providing feedback to core devs throughout the program or sharing information with Indexers in the Forum? 

### 9. How will the Discord role be assigned?

Moderators will assign the roles in the next few days. 

### 10. Is it okay to start the program on a testnet and then switch to Mainnet? Will you be able to identify my node and take it into account while distributing rewards?

Yes, it is actually expected of you to do so. Several phases are on Görli and one is on the mainnet.

### 11. At what point do you expect participants to add a mainnet deployment?

There will be a requirement to have a mainnet indexer during phase 3. More infomation on this will be [shared in this notion page soon.](https://thegraphfoundation.notion.site/MIPs-Home-911e1187f1d94d12b247317265f81059) 

### 12. Will rewards be subject to vesting?

The percentage to be distributed at the end of the program will be subject to vesting. More on this will be shared in the Indexer Agreement. 

### 13. For teams with more than one member, will all the team members be given a MIPs Discord role?

Yes

### 14. Is it possible to use the locked tokens from the graph curator program to participate in the MIPs testnet?

Yes 

### 15. During the MIPs program, will there be a period to dispute invalid POI?

To be decided. Please return to this page periodically for more details on this or if your request is urgent, please email info@thegraph.foundation

### 17. Can we combine two vesting contracts?

No. The options are: you can delegate one to the other one or run two separate indexers.

### 18. KYC Questions?

Please email info@thegraph.foundation
