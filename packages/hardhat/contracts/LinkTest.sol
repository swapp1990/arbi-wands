pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract APIConsumer is VRFConsumerBase {
	using SafeMath for uint256;

	bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public randomResult;

	uint256 private constant ROLL_IN_PROGRESS = 42;

	event DiceLanded(bytes32 indexed requestId, uint256 indexed result);

	mapping(bytes32 => address) private s_rollers;
	mapping(address => uint256) private s_results;

	constructor() VRFConsumerBase(
            0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B, // VRF Coordinator
            0x01BE23585060835E02B77ef475b0Cc51aA1e0709  // LINK Token
        )
    {
        keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311;
        fee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network)
    }

	function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }

	function rollDice(address roller) public returns (bytes32 requestId) {
		require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK to pay fee");
		require(s_results[roller] == 0, "Already rolled");
		requestId = requestRandomness(keyHash, fee);
		s_rollers[requestId] = roller;
		s_results[roller] = ROLL_IN_PROGRESS;
	}

	function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
		uint256 d20Value = randomness.mod(20).add(1);
		s_results[s_rollers[requestId]] = d20Value;
		emit DiceLanded(requestId, d20Value);
    }

	function withdrawLink() external {}
}