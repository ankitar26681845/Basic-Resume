function toggleSection(sectionID){
    var section = document.getElementById(sectionID);
    if(section.style.display==='none' || section.style.display===""){
        section.style.display="block";
    }
    else{
        section.style.display="none";
    }
    
}
