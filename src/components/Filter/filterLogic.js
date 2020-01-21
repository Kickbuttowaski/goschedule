import { getMovies } from "../Table/fakeMovieService"
import _ from "lodash";
const chooseFilter=(field,logic,data,dbData)=>{
    
    var tempdata;
    if(logic === "c" || "dc")
    {
        tempdata=dbData.filter(val=>val[field].toLowerCase().includes(data.toLowerCase()))
        if(logic === "dc")
        {
            tempdata = _.difference(dbData,tempdata)
        }
        return tempdata;
    }   
    else if(logic === "s"){
        tempdata=dbData.filter(val=>val[field].toLowerCase().startsWith(data.toLowerCase()))
        return tempdata;
    }
    else{
        tempdata=dbData.filter(val=>val[field].toLowerCase().endsWith(data.toLowerCase()))
        return tempdata;
    }

}
const filterLogic=(val,dbData)=>{
    var db=dbData
    var finalData;
    var tempDb=db;
    val.map(obj=>{
        if (obj['dropDown1'] && obj['dropDown2'] && obj['inputVal'] !== "")
        {
        finalData=chooseFilter(obj['dropDown1'],obj['dropDown2'],obj['inputVal'],tempDb)
        tempDb = finalData
    } 
    })  
    return tempDb  
    //var data=tempDB.filter(data=>data[val[0]['dropDown1']].toLowerCase().includes(val[0]['inputVal']))
    //console.table(tempDb)
    //console.log(val[0]['inputVal'].toLower)
}

export default filterLogic