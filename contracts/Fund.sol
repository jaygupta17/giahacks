// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Fund {

   struct Campaign{
    address owner;
    string title;
    string descr;
    uint256 deadline;
    uint256 target;
    uint256 amountCollected;
    address[] donators;
    uint256[] donations;
   }

    mapping(uint256=>Campaign) public campaigns;

    uint256 public noOfCampaigns = 0;
    function createCampaign(address _owner, string memory _title, string memory _descr,uint256 _target,uint256 _deadline) public returns (uint256){
        Campaign storage campaign = campaigns[noOfCampaigns];
        require(campaign.deadline<block.timestamp, "Deadline should be in fututre");
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.descr = _descr;
        campaign.deadline = _deadline;
        campaign.target = _target;
        noOfCampaigns++;
        return noOfCampaigns-1;
    }

    function donate(uint256 _id) public payable{
            uint256 amount  = msg.value;
            Campaign storage campaign = campaigns[_id];
            campaign.donators.push(msg.sender);
            campaign.donations.push(amount);
            (bool sent,) = payable(campaign.owner).call{value:amount}("");
            if (sent) {
                campaign.amountCollected+=amount;
            }
    }
    
    function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators,campaigns[_id].donations);
    }

    function getCampaigns( ) public view returns (Campaign[] memory) {
        Campaign[] memory all = new Campaign[](noOfCampaigns);
        for (uint256 i = 0; i < noOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            all[i] = item;            
        }
        return all;
    }

    

}
