function showHide() {
    document.getElementById("statusDrop").classList.toggle("show");
}
            // Close the dropdown menu if the user clicks outside of it

function validateField(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, (limitNum + 1));
    }
    else {
        return;
    }

}

function isNumberKey(evt){  
    var charCode = (evt.which) ? evt.which : event.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// function checklistInputFlow() {
//     var asset = document.getElementById("asset_num_d").value;
//     var str = asset.toString();
//     var len = str.valueOf().length;
//
//     if (len >= 5) {
//         document.getElementById("jira_num").focus();
//     }
// }
function statusInputFlow() {
    var c1temp = document.getElementById("c1temp").value;
}

// function checkReportType(val){
//     var element = document.getElementById("asset_div");
//     var element2 = document.getElementById("user_div");
//     var element3 = document.getElementById("host_div");
//     var element4 = document.getElementById("jira_div");
//
//     switch(val) {
//         case "asset":
//             element.style.display = "inline-block";
//             element.required = "true";
//             element2.style.display = "none";
//             element3.style.display = "none";
//             element4.style.display = "none";
//             break;
//         case "jira":
//             element.style.display = "none";
//             element2.style.display = "none";
//             element3.style.display = "none";
//             element4.style.display = "inline-block";
//             element4.required = "true";
//             break;
//         case "user":
//             element.style.display = "none";
//             element2.style.display = "inline-block";
//             element2.required = "true";
//             element3.style.display = "none";
//             element4.style.display = "none";
//             break;
//         case "hostname":
//             element.style.display = "none";
//             element2.style.display = "none";
//             element3.style.display = "inline-block";
//             element3.required = "true";
//             element4.style.display = "none";
//             break;
//         default:
//             break;
//     }
// }


function checkDeployType(val) {
    var dell = document.getElementById("dell_div");
    var cisco = document.getElementById("cisco_div");

    switch (val) {
        case "dell":
            dell.style.display = "inline-block";
            cisco.style.display = "none";
            document.getElementById("asset_num_d").focus();
            break;
        case "cisco":
            dell.style.display = "none";
            cisco.style.display = "inline-block";
            document.getElementById("hostname_c").focus();
            break;
        case "base":
            dell.style.display = "none";
            cisco.style.display = "none";
            break;
        default:
            break;
    }
}

// function autoFocus(event) {
//     var deployAsset = document.getElementById("asset_num_d");
//     var hostname = document.getElementById("hostname_c");

//     var search.js = document.getElementById("asset_num");
//     var jira = document.getElementById("jira_num");

//     if (deployAsset == 5) {
//         document.getElementById("hostname_c").focus();
//     }


//     if (search.js == 5) {
//         document.getElementById("jira_num").focus();
//     }

// }

// function checkAssetResults(val) {
//     var element = document.getElementById("asset_deploy_table");
//     var element1 = document.getElementById("asset_reclaim_table");
//     var element2 = document.getElementById("asset_retire_table");
//
//     switch(val) {
//         case 0:
//             element.style.display = "none";
//             element1.style.display = "none";
//             element2.style.display = "none";
//
//             break;
//         case 1:
//             element.style.display = "inline-block";
//             element1.style.display = "inline-block";
//             element2.style.display = "inline-block";
//             break;
//         default:
//             break;
//     }
// }
    
function searchReset() {
    window.location = 'reports.html'

    document.getElementById("search").reset();
    document.getElementById("jira_div").style.display = "none";
    document.getElementById("host_div").style.display = "none";
    document.getElementById("user_div").style.display = "none";
    document.getElementById("asset_div").style.display = "none";

    document.getElementById("jira_div").defaultValue;
    document.getElementById("host_div").defaultValue;
    document.getElementById("user_div").defaultValue;
    document.getElementById("asset_div").defaultValue;

    document.getElementById("asset_number").value = "";
    document.getElementById("jira_number").value = "";
    document.getElementById("host").value = "";
    document.getElementById("username").value = "";
}

function deployReset() {
    var dell = document.getElementById("dell_div");
    var cisco = document.getElementById("cisco_div");
    var checkBox = document.getElementsByClassName("checkbox");

    dell.style.display = "none";
    cisco.style.display = "none";

    dell.defaultValue;
    cisco.defaultValue;

    checkbox.unchecked;


}




