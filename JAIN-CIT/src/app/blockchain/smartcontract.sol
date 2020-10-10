pragma solidity ^0.6.6;

contract CaseContract{

    struct caselist{
        uint256 id;
        string case_name;
        string complainant;
        string suspect;
        string adate;
        string location;
        string agent;
        string note;
    }

    caselist[] public singlecase;
    event caseIsCreated(uint256 _caseId);

    function setCase(string memory _case_name, string memory _complainant,
    string memory _suspect, string memory _adate, string memory _location, string memory _agent,
    string memory _note) public {

        uint256 caseId = singlecase.length;

        singlecase.push(caselist({id:caseId, case_name:_case_name, complainant:_complainant, suspect:_suspect, adate:_adate,
            location:_location, agent:_agent, note:_note
        }));

        emit caseIsCreated(caseId);
    }

    function getAllCases() public view returns(uint256){
        return (singlecase.length);
    }


    function getCase(uint256 _id) public view returns(string memory, string memory,
    string memory, string memory, string memory, string memory, string memory){
        return (singlecase[_id].case_name, singlecase[_id].complainant, singlecase[_id].suspect,
        singlecase[_id].adate, singlecase[_id].location, singlecase[_id].agent, singlecase[_id].note);
    }
}
